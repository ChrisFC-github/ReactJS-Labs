import React, { Component } from "react";
import "./card.css";
import { Card } from "react-bootstrap";
import "isomorphic-fetch";
import "es6-promise";

class PeoplePage extends Component {

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
    .then((response) => response.json())
    .then((data) => this.props.match({ people: data }))
    .catch((err) => console.log(err));
  }

render() {
  return this.props.match.films.map((specificFilm, index) => (
    <Card className="box">
      <Card.Body>
        <Card.Title>
          <h1>{this.props.match.data.name}</h1>
        </Card.Title>
        <Card.Text>
          <h2>{this.props.match.data.age}</h2>
        </Card.Text>
        <Card.Text>
          <h2>{this.props.match.data.gender}</h2>
        </Card.Text>
        <Card.Text>
          <a href={this.props.match.data.url}>
            <button>More Info</button>
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
    ));
}
}

export default PeoplePage;
