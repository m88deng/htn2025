import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { StyledModalImage, StyledEventModal } from "../styles/Event.styled";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

export default function EventModal({
  showModal,
  onClose,
  event,
  image,
  isAuthenticated,
}) {
  const [inProp, setInProp] = useState(showModal);
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
    return event.speakers.map((speaker) => speaker.name).join(", ");
  };

  const getEventURL = () => {
    const url = isAuthenticated ? event.private_url : event.public_url;
    return url;
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
        <div className="modal d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            <div className="modal-content" ref={modalRef}>
              <div
                className="modal-header d-flex justify-content-between align-items-center"
                style={{ height: 60 }}
              >
                <h1 className="modal-title" style={{ fontSize: 26 }}>
                  {event.name}
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
                    <div className="col-6">
                      <div
                        className="d-flex flex-column justify-content-between"
                        style={{ height: 260 }}
                      >
                        <div className="d-flex flex-column gap-2 event-info">
                          <div className="d-flex flex-row justify-content-between align-item-center">
                            <div className="d-flex flex-row align-item-center gap-2">
                              <EventRoundedIcon />
                              <div>Day</div>
                            </div>
                            <div>{formatEventDay(event.start_time)}</div>
                          </div>
                          <div className="d-flex flex-row justify-content-between align-item-center">
                            <div className="d-flex flex-row align-item-center gap-2">
                              <ScheduleRoundedIcon />
                              <div>Time</div>
                            </div>
                            <div>
                              {formatEventTime(
                                event.start_time,
                                event.end_time
                              )}
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-between align-item-center">
                            <div className="d-flex flex-row align-item-center gap-2">
                              <AutoAwesomeRoundedIcon />
                              <div>Type</div>
                            </div>
                            <div>{formatEventType(event.event_type)}</div>
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
                    <div className="col-6">
                      <StyledModalImage background={image} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="mt-4 event-description">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledEventModal>
    </CSSTransition>
  );
}
