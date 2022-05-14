import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Projects/ProjectCards";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from '../utils/queries';

function SearchProfiles() {
    const { data, loading, error } = useQuery(QUERY_PROFILES);
    const [searchTerm, setSearchTerm] = useState("");

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>An error occurred</h1>;

    return (
        <Container fluid className="project-section">
            {Auth.loggedIn() ? (
                <Container>
                    <h1 className="project-heading">
                        Search <strong className="purple">Mentors </strong>
                    </h1>
                    <p style={{ color: "Black" }}>
                        Want to Learn Something New?
                    </p>

                    <input type="text" placeholder="search..." onChange={event => setSearchTerm(event.target.value)} />

                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        {data.profiles.filter((val) => {
                        if (searchTerm === '') {
                            return val;
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    }).map((project, index) => (
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
                    You need to be logged in to view and search Profiles. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}



        </Container>
    );
}

export default SearchProfiles;

