import React, { Component } from 'react';
import './card.css';
import { Card } from 'react-bootstrap';
import "isomorphic-fetch";
import "es6-promise";

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
    .then((data) => this.setState({ films: data }))
    .catch((err) => console.log(err));
}

render(props
    ) {
    return this.state.films.map((specificFilm, index) => (
        <Card className="box">
                    <Card.Body>
                        <Card.Title><h1>{props.data.title}</h1></Card.Title>
                        <Card.Text><h2>{props.data.description}</h2></Card.Text>
                        <Card.Text><h2>{props.data.release_date}</h2></Card.Text>
                    </Card.Body>
        </Card>
    ));
}
}

export default FilmPage;
