import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        {/* <Card.Title style={{fontWeight: "bold"}}>{props.name}</Card.Title>
        <Card.Text className="purple">Skill: {props.skills.join(', ')}</Card.Text> */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.links} target="_blank"className="download-button">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Book"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
