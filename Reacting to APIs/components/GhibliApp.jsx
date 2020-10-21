import React, { Component , Fragment } from 'react';
import './card.css';
import { Card } from 'react-bootstrap';
import 'isomorphic-fetch';
import 'es6-promise';
import FilmCard from './filmcard';
import PeopleCard from './peoplecard';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            people: [],
            filmLoadState: false,
            peopleLoadState: false,
        }

    }

    componentDidMount() {
        this.setState({filmLoadState: false})
        this.setState({peopleLoadState: false})
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(data => this.setState({films: data, people: data}))
        .catch(err => console.log(err))
    }

    handleClickFilm = () => {
        this.setState({ filmLoadState: !this.state.filmLoadState })
    }

    handleClickPeople = () => {
        this.setState({ filmLoadState: !this.state.peopleLoadState })
    }

    render() {
        //Phase 1 return this.state.films.map((specificFilm, index) => <FilmCard data={specificFilm} key={index}/>);
        if (this.state.filmLoadState === true) {
            return this.state.films.map((specificFilm, index) => <FilmCard data={specificFilm} key={index}/>);
        } else
            if (this.state.peopleLoadState === true) {
                return this.state.people.map((specificPeople, index) => <PeopleCard data={specificPeople} key={index}/>);
            } else {
            return (
                <Fragment>
                    <div className="grid">
                        <img className="button" src="https://i.ibb.co/ZNy9jfs/logo.png" alt="Ghibli Studios" width="350" height="168"></img>
                    </div>
                    <div className="grid">
                        <div className="button">
                        <button onClick={this.handleClickFilm}>Load Films</button>
                        <button onClick={this.handleClickPeople}>Load People</button>
                        </div>
                    </div>
                </Fragment>
            )
        }
    }
};

export default App;