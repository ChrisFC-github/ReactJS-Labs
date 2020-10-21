import React, { Component } from "react";
import "./card.css";
import { Card } from "react-bootstrap";

export default function PeopleCard(props) {
  return (
    <Card className="box">
      <Card.Body>
        <Card.Title>
          <h1>{props.data.name}</h1>
        </Card.Title>
        <Card.Text>
          <h2>{props.data.age}</h2>
        </Card.Text>
        <Card.Text>
          <h2>{props.data.gender}</h2>
        </Card.Text>
        <Card.Text>
          <a href={props.data.url}>
            <button>More Info</button>
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
