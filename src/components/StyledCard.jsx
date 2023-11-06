import React, { useState } from "react";
import Details from "./Details"
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import GH from "../images/GH.svg";
// Components
import { Card } from "react-bootstrap";
import { projectCardImages } from "../data"

const StyledCardComponent = styled.div`
  .card {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
    theme.name === "light"
      ? "0 3px 10px rgb(0 0 0 / 0.2)"
      : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
    }
  }
`;

const ZoomContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
`;


const ExtraDetails = styled.div`
  margin-left: 5%;
  justify-content: center;

  width: 30%;
  height: auto;
  align-items: center;
  color: ${({ theme }) => theme.color};
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
    theme.name === "light"
      ? "0 3px 10px rgb(0 0 0 / 0.2)"
      : "0 3px 10px rgb(255 255 255 / 0.2)"};
  transition: opacity 0.3s;
  display: ${({ expanded }) => (expanded ? "block" : "none")};
`;

export default function StyledCard({ image, name, path, description, url, demo }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const details = (projectCardImages.find((item) => item.name === path))?.details ?? null

  const toggleScrolling = (disableScroll) => {
    if (disableScroll) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  };

  // const handleCardClick = () => {
  //   setSelectedCard({ image, name, description, url, demo });
  //   toggleScrolling(true); // Disable scrolling
  // };

  const toggleDetails = () => {
    setSelectedCard({ image, name, description, url, demo });
    toggleScrolling(true); // Disable scrolling
    setDetailsExpanded(!detailsExpanded);
  };

  const handleCloseZoom = () => {
    setSelectedCard(null);
    setDetailsExpanded(!detailsExpanded);
    toggleScrolling(false); // Enable scrolling
  };
  return (
    <StyledCardComponent>
      <Card>
        <Card.Img
          variant="top"
          src={image ? image : GH}
          alt={name}
          className="mx-auto"
        />

        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}
            <Card.Link onClick={toggleDetails}>
              {"Details "}
              <Icon icon="mdi:magnify" />
            </Card.Link>
          </Card.Text>
          {/* {details !== "" ? (
            <Card.Link href={demo}>
              {"Details"}
              <Icon icon="mdi:magnify" />
            </Card.Link>
          ) : null} */}

          {demo !== "" ? (
            <Card.Link href={demo} target="_blank">
              {"Live Demo "}
              <Icon icon="icon-park-outline:code-computer" />
            </Card.Link>
          ) : null}

        </Card.Body>

        <Card.Footer className="text-center">
          <Card.Link href={url} target="_blank">
            {"View on GitHub "}
            <Icon icon="icomoon-free:github" />
          </Card.Link>
        </Card.Footer>
      </Card>

      {selectedCard && (
        <ZoomContainer>
          <ExtraDetails expanded={detailsExpanded}>
            <Card>
              <Card.Img
                variant="top"
                src={selectedCard.image}
                alt={selectedCard.name}
                className="mx-auto"
              />
              <Card.Body className="overflow-auto text-center">
                <Card.Title>{selectedCard.name}</Card.Title>
                <Card.Text>{selectedCard.description}</Card.Text>
                {selectedCard.demo !== "" && (
                  <Card.Link href={selectedCard.demo}>
                    {"Live Demo "}
                    <Icon icon="icon-park-outline:code-computer" />
                  </Card.Link>
                )}
              </Card.Body>
              <button onClick={handleCloseZoom} className="btn btn-secondary mt-3">
                Close
              </button>
            </Card>
          </ExtraDetails>
          <ExtraDetails expanded={detailsExpanded}>
            <Card>
              <Card.Body className="overflow-auto text-center">
                {details && (
                  // Render the Details component with details data
                  <Details details={details}>
                  </Details>
                )}
              </Card.Body>

            </Card>
          </ExtraDetails>
        </ZoomContainer>
      )}
    </StyledCardComponent>
  );
}
