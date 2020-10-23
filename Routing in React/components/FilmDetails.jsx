import React, { Component } from "react";
import "./card.css";
import { Card } from "react-bootstrap";
import "isomorphic-fetch";
import "es6-promise";
import { Link } from "react-router-dom";

class FilmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {}
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(film => this.setState({ film }))
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <Card className="box">
          <Card.Body>
            <Card.Title>
              <h1>{this.state.film.title}</h1>
            </Card.Title>
            <Card.Title>
              <h1>Rotten Tomatoes Score: {this.state.film.rt_score}</h1>
            </Card.Title>
            <Card.Text>
              <h2>Description: {this.state.film.description}</h2>
            </Card.Text>
            <Card.Text>
              <h2>Year Released: {this.state.film.release_date}</h2>
            </Card.Text>
            <Card.Text>
              <h2>Director: {this.state.film.director}</h2>
            </Card.Text>
            <Card.Text>
              <h2>Producer: {this.state.film.producer}</h2>
            </Card.Text>
            <Link to="/FilmPage"><button>Go back to Films</button></Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FilmDetails;
