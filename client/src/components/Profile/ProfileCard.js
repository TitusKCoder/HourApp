import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Wecome To <span className="purple">Hour </span>
            Meet <span className="purple"> Mentors</span>
            <br />
           Skills
            <br />
           Bio
            <br />
           Education
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Add something
            </li>
            <li className="about-activity">
              <ImPointRight /> Add something
            </li>
            <li className="about-activity">
              <ImPointRight /> Add something
            </li>
            <li className="about-activity">
              <ImPointRight /> Add something
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
