import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.name}</Card.Title>
        <Card.Text style={{fontWeight: "bold"}}>{props.email}</Card.Text>

        <Card.Text className="purple" style={{ textAlign: "justify" }}>Bio:{props.bio}</Card.Text>
        <Button variant="primary" target="_blank"className="download-button">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Chat"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
