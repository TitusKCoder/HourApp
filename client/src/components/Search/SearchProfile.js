import React from "react";
import { Container,  } from "react-bootstrap";
// import ProjectCard from "../Projects/ProjectCards";
// import { PROJECTS } from "../Projects/Projects";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

export default function SearchProfile() {
  return (
    <Container fluid className="project-section">

{Auth.loggedIn() ? (
              <Container>

              <p style={{ color: "Black" }}>
                Search page
              </p>
            </Container>
      ) : (
        <p>
          You need to be logged in to search mentors. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}



    </Container>
  );
}


