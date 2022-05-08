import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <Container fluid className="project-section">

{Auth.loggedIn() ? (
              <Container>
              <h1 className="project-heading">
                Meet <strong className="purple">Mentors </strong>
              </h1>
              <p style={{ color: "Black" }}>
                Want to Learn Something New?
              </p>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {PROJECTS.map((project, index) => (
                  <Col md={4} className="project-card" key={index}>
                    <ProjectCard
                      imgPath={project.image}
                      technologyUsed={project.technologyUsed}
                      isBlog={false}
                      title={project.name}
                      description={project.description}
                      link={project.url}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
      ) : (
        <p>
          You need to be logged in to view mentors. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}



    </Container>
  );
}

export default Projects;
