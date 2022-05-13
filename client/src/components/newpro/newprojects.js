import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./newcard";
import { PROJECTS } from "../../Constants";

function newprojects() {
  return (
    <Container fluid className="project-section">
      <Container>
        {/* <h1 className="project-heading">
          Meet <strong className="purple">Mentors </strong>
        </h1>
        <p style={{ color: "Black" }}>
          Want to Learn Something New?
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((newproject, index) => (
            <Col md={4} className="new-card" key={index}>
              <newcard
                imgPath={newproject.image}
                technologyUsed={newproject.technologyUsed}
                isBlog={false}
                title={newproject.name}
                description={newproject.description}
                link={newproject.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default newprojects;