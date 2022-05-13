import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainImg from "../../Assets/mainPic.png";
import Projects from "../Projects/Projects";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import NewProject from "../../components/newpro/newprojects"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome To HOUR!{" "}
              </h1>
              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={MainImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Grow, Learn and Connect</h1>
              <SocialMedia />
              <Projects />
              <NewProject />

            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
