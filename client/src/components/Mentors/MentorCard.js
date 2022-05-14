import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

export default function MentorCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.name}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} className="purple">Bio:&nbsp;{props.bio}</Card.Text>
        <Button href={props.link} target="_blank"className="download-button">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Chat"}
        </Button>
      </Card.Body>
    </Card>
  );
}

