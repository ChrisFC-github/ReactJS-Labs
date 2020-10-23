import React, { Component } from "react";
import "./card.css";
import { Card } from "react-bootstrap";
import "isomorphic-fetch";
import "es6-promise";
import { Link } from "react-router-dom";

class FilmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((films) => this.setState({ films }))
      .catch((err) => console.log(err));
  }

  render(props) {
    return this.state.films.map((film) => {
      return (
        <div>
        <Card className="box">
          <Card.Body>
            <Card.Title>
              <h1>{film.title}</h1>
            </Card.Title>
            <Card.Title>
              <h1>Rotten Tomatoes Score: {film.rt_score}</h1>
            </Card.Title>
            <Link to={`/films/${film.id}`}>
              <button className="btn btn-primary">More Details</button>
            </Link>
          </Card.Body>
        </Card>
        </div>
      );
    });
  }
}

export default FilmPage;
