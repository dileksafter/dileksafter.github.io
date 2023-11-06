import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
import React, { useState, useEffect } from "react";
// Data
import { skillData, resume } from "../data";
// Components
import { Button, Col, Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

import { Icon } from '@iconify/react';

import Slider from 'react-slick';

export default function Skills() {
  const { theme } = useAppContext();

  // State variable to track the screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update screen width when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderSkillsGrid = () => {
    return (
      <Container className="text-center">
        <div className="grid-skills">
          {skillData.map((skills) => (
            <div key={skills.id} className="skill-item">
              <figure>
                {skills.skill}
                <figcaption>{skills.name}</figcaption>
              </figure>
            </div>
          ))}
        </div>
        {resume && (
          <a href={resume}>
            <Button
              size="lg"
              variant={theme === "light" ? "outline-dark" : "outline-light"}
              className="mt-5"
            >
              Résumé
            </Button>
          </a>
        )}
      </Container>
    );
  };

  function NextArrow(props) {
    const { onClick, style } = props;
    return (
      <figure>
        <Icon icon="bxs:right-arrow" width="32" height="32" style={{ ...style, right: "auto", left: "10px", position: "relative" }} className={'s-prev'}
          onClick={onClick} />
      </figure>
    );
  }

  function PrevArrow(props) {
    const { onClick, style } = props;
    return (
      <figure>
        <Icon icon="bxs:left-arrow" width="32" height="32" style={{ ...style, right: "10px", left: "auto" , position: "relative"}} className={'s-next'}
          onClick={onClick} />
      </figure>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Skills</h2>
            <div className="underline"></div>
          </Title>
          {screenWidth <= 576 ? (
          renderSkillsGrid()
        ) : (
          <Slider {...settings} className="mt-3 align-items-center" style={{display:"flex"}}>
            {skillData.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Slider>
        )}
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
}
