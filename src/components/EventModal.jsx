import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { StyledEventModal, StyledModalImage } from "../styles/Event.styled";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";

export default function EventModal({
  showModal,
  onClose,
  event,
  image,
  isAuthenticated,
  relatedEvents,
}) {
  const [inProp, setInProp] = useState(showModal);
  const [currentEvent, setCurrentEvent] = useState(event); // Track current event displayed in the modal

  const nodeRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    setInProp(showModal);
  }, [showModal]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".modal-content")) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setInProp(false);
    setTimeout(onClose, 300);
  };

  const formatEventDay = (start) => {
    const formattedDate = new Date(start).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  const formatEventTime = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const formattedStartTime = startDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const formattedEndTime = endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return `${formattedStartTime} - ${formattedEndTime}`;
  };

  const formatEventType = (type) => {
    return (type || "")
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getSpeakerNames = () => {
    return currentEvent.speakers.map((speaker) => speaker.name).join(", ");
  };

  const getEventURL = () => {
    const url = isAuthenticated
      ? currentEvent.private_url
      : currentEvent.public_url;
    return url;
  };

  // Handle related event click to update the modal content
  const handleRelatedEventClick = (relatedEvent) => {
    setCurrentEvent(relatedEvent); // Update the modal to show the related event's details
  };

  return (
    <CSSTransition
      in={inProp}
      timeout={300}
      classNames="modal-fade"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <StyledEventModal ref={nodeRef}>
        <div
          className="modal d-flex justify-content-center"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content" ref={modalRef}>
              <div
                className="modal-header d-flex justify-content-between align-items-center"
                style={{ height: 60 }}
              >
                <h1 className="modal-title" style={{ fontSize: 26 }}>
                  {currentEvent.name}
                </h1>
                <button
                  className="d-flex justify-content-center align-items-center"
                  type="button"
                  style={{ width: 38, height: 38 }}
                  onClick={onClose}
                >
                  <span style={{ display: "block", fontSize: 20 }}>
                    &times;
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col col-lg-6">
                      <div className="d-flex flex-column justify-content-between event-left">
                        <div className="d-flex flex-column gap-2 event-info">
                          <div className="d-flex flex-row justify-content-between align-item-center">
                            <div className="d-flex flex-row align-item-center gap-2">
                              <EventRoundedIcon />
                              <div>Day</div>
                            </div>
                            <div>{formatEventDay(currentEvent.start_time)}</div>
                          </div>
                          <div className="d-flex flex-row justify-content-between align-item-center">
                            <div className="d-flex flex-row align-item-center gap-2">
                              <ScheduleRoundedIcon />
                              <div>Time</div>
                            </div>
                            <div>
                              {formatEventTime(
                                currentEvent.start_time,
                                currentEvent.end_time
                              )}
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-between align-item-center">
                            <div className="d-flex flex-row align-item-center gap-2">
                              <AutoAwesomeRoundedIcon />
                              <div>Type</div>
                            </div>
                            <div>
                              {formatEventType(currentEvent.event_type)}
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-between align-item-center">
                            <div className="d-flex flex-row align-item-center gap-2">
                              <PersonRoundedIcon />
                              <div>Speakers</div>
                            </div>
                            <div>{getSpeakerNames()}</div>
                          </div>
                          <div style={{ backgroundColor: "green" }}></div>
                        </div>
                        <div className="mt-2 event-url" onClick={getEventURL}>
                          <a
                            href={getEventURL()}
                            target="blank"
                            style={{ color: "black" }}
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <StyledModalImage background={image} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="mt-4 event-description">
                        {currentEvent.description}
                      </p>
                    </div>
                  </div>

                  {relatedEvents.length > 0 && (
                    <div className="d-flex align-items event-related-container">
                      <div className="d-flex align-items-center gap-1">
                        <LightbulbRoundedIcon style={{ marginRight: "8px" }} />
                        <div>Related</div>
                      </div>

                      {relatedEvents.map((relatedEvent) => (
                        <div
                          className="event-related"
                          style={{ fontWeight: 500 }}
                          key={relatedEvent.id}
                          onClick={() => handleRelatedEventClick(relatedEvent)}
                        >
                          {relatedEvent.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledEventModal>
    </CSSTransition>
  );
}
