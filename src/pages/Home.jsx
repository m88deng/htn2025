import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";
import "../index.css";
import event1 from "../assets/1.jpg";
import event2 from "../assets/2.jpg";
import event3 from "../assets/3.jpg";
import event4 from "../assets/4.jpg";
import event5 from "../assets/5.jpg";
import event6 from "../assets/6.jpg";
import event7 from "../assets/7.jpg";
import event8 from "../assets/8.jpg";
import event9 from "../assets/9.jpg";
import event10 from "../assets/10.jpg";
import event11 from "../assets/11.jpg";
import event12 from "../assets/12.jpg";
import event13 from "../assets/13.jpg";
import event14 from "../assets/14.jpg";
import event15 from "../assets/15.jpg";
import Loading from "./Loading";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import { StyledHome } from "../styles/Home.styled";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const eventTypes = ["All", "workshop", "tech_talk", "activity"];

const imageMap = {
  1: event1,
  2: event2,
  3: event3,
  4: event4,
  5: event5,
  6: event6,
  7: event7,
  8: event8,
  9: event9,
  10: event10,
  11: event11,
  12: event12,
  13: event13,
  14: event14,
  15: event15,
};

export default function Home({ isAuthenticated }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const openModal = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };
  const closeModal = () => {
    setSelectedEvent(null);
    setShowModal(false);
  };

  useEffect(() => {
    // fetch("/api/events")
    fetch(import.meta.env.VITE_LOCAL_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  const filteredEvents = events.filter(
    (event) =>
      (isAuthenticated || event.permission === "public") &&
      (selectedType === "All" || event.event_type === selectedType)
  );

  const groupedEvents = filteredEvents.reduce((acc, event, onLogin) => {
    const eventDate = new Date(event.start_time).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    if (!acc[eventDate]) {
      acc[eventDate] = [];
    }
    acc[eventDate].push(event);
    return acc;
  }, {});

  return (
    <StyledHome>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h1>Hack The North Events</h1>
        <div className="mb-3 d-flex justify-content-center align-items-center">
          {/* <label htmlFor="event-filter" className="me-2">
            Filter by Type:
          </label> */}
          <FilterAltRoundedIcon />
          <select
            id="event-filter"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="p-2"
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
                  .join(" ")}
              </option>
            ))}
          </select>
        </div>
      </div>
      {Object.keys(groupedEvents).length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No events found.</p>
      ) : (
        Object.entries(groupedEvents).map(([date, events]) => (
          <div key={date}>
            <h2 className="mt-4">{date}</h2>
            <Swiper
              key={`${date}Events`}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation={groupedEvents[date].length > 3}
              loop={groupedEvents[date].length > 3}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {events.map((event) => (
                <SwiperSlide
                  key={event.id}
                  onClick={() => {
                    openModal(event);
                  }}
                >
                  <EventCard {...event} image={imageMap[event.id]} />
                </SwiperSlide>
              ))}
            </Swiper>
            {selectedEvent && (
              <EventModal
                showModal={showModal}
                onClose={closeModal}
                event={selectedEvent}
                image={imageMap[selectedEvent.id]}
                isAuthenticated={isAuthenticated}
              />
            )}
          </div>
        ))
      )}
    </StyledHome>
  );
}
