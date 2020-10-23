import React, { Component } from "react";
import "./card.css";
import { Card } from "react-bootstrap";
import "isomorphic-fetch";
import "es6-promise";

class PeoplePage extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((people) => this.setState({ people }))
      .catch((err) => console.log(err));
  }

  render() {
    return this.state.people.map((peopleData) => {
      return (
        <Card className="box">
          <Card.Body>
            <Card.Title>
              <h1>{peopleData.name}</h1>
            </Card.Title>
            <Card.Text>
              <h2>{peopleData.age}</h2>
            </Card.Text>
            <Card.Text>
              <h2>{peopleData.gender}</h2>
            </Card.Text>
            <Card.Text>
              <a href={peopleData.url}>
                <button>More Info</button>
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });
  }
}

export default PeoplePage;
