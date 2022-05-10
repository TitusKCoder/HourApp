import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

import Auth from "../utils/auth";

import { MdDeveloperMode } from "react-icons/md";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/chat"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument  style={{ marginBottom: "2px" }} /> Chat
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
               as={Link}
               to="/searchProfile"
               onClick={() => updateExpanded(false)}
              >
                 <AiOutlineSearch
                  style={{ marginBottom: "2px" }}
                />{" "}
               Search
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Mentors
              </Nav.Link>
            </Nav.Item>

            {Auth.loggedIn() ? (
            <><Nav.Item>
            <Nav.Link
              as={Link}
              to="/profiles/:profileId"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineUser style={{ marginBottom: "2px" }} /> View Profile
            </Nav.Link>
          </Nav.Item>            <Nav.Item><button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button></Nav.Item></>

          ) : (
            <><Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/login"
                    onClick={() => updateExpanded(false)}
                  >
                    <AiOutlineUser style={{ marginBottom: "2px" }} /> Login
                  </Nav.Link>
                </Nav.Item><Nav.Item>
                    <Nav.Link
                    as={Link}
                    to="/signup"
                    onClick={() => updateExpanded(false)}
                    >
                      <ImBlog style={{ marginBottom: "2px" }} /> Sign Up
                    </Nav.Link>
                  </Nav.Item></>
          )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
