import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import {QUERY_PROFILES} from '../../utils/queries';

function Projects() {

const {data, loading, error} = useQuery(QUERY_PROFILES);

if (loading) return <h1>Loading...</h1>;
if (error) return <h1>An error occurred</h1>;

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
            {data.profiles.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                {...project}
                  isBlog={false}
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
