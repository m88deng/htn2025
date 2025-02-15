import React, { useState } from "react";
import { StyledEventImage, StyledProjectCard } from "../styles/Event.styled";
import EventModal from "./EventModal";

export default function EventCard({
  name,
  event_type,
  start_time,
  end_time,
  speakers,
  image,
}) {
  return (
    <>
      <StyledProjectCard className="card my-4 shadow-sm">
        <div className="card-body">
          {image && (
            <StyledEventImage
              background={image}
              className="text-center image-container"
            />
          )}
          <h5 className="card-title pt-3">{name}</h5>
        </div>
      </StyledProjectCard>
    </>
  );
}
