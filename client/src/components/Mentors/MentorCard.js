import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

export default function MentorCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.name}</Card.Title>
        <Card.Text className="purple">Skills: &nbsp; {props.skills}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button href={props.link} target="_blank"className="download-button">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Book"}
        </Button>
      </Card.Body>
    </Card>
  );
}

