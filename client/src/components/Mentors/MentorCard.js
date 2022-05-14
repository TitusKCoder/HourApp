import React from "react";
import Card from "react-bootstrap/Card";
import { BiLinkExternal } from "react-icons/bi";

export default function MentorCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.name}</Card.Title>
        <Card.Text className="purple">Interests: &nbsp; {props.skills}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

