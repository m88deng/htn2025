import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { StyledEventModal } from "../styles/Event.styled";

import image from "../assets/1.jpg";

export default function EventModal({ showModal, onClose, event }) {
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
              <div className="modal-header d-flex justify-content-between align-items-center">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  onClick={onClose} // Manually close modal
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div
                  className="text-center"
                  style={{ height: "150px", width: "225px" }}
                >
                  <img
                    src={image}
                    className="img-fluid mb-3"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledEventModal>
    </CSSTransition>
  );
}
