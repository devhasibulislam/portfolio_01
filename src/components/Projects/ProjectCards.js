import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  const [readMore, setReadMore] = useState(false);
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "500px",
          objectFit: "cover"
        }}
      />
      <Card.Body>
        <Card.Title><span className="purple">{props.title}</span></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {
            !readMore
              ?
              props?.description.slice(0, 100) + " ..."
              :
              props?.description
          }
          <span className={`purple ${readMore && 'd-none'}`} role='button' onClick={()=>setReadMore(true)}>read more</span>
        </Card.Text>
        <Button
          variant="primary"
          href={props.link}
          target="_blank"
        >
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
