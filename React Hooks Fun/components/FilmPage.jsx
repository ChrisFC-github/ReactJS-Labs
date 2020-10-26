import React, { useState, useEffect } from "react";
import "./card.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilmPage = () => {
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    let resolve = await fetch(`https://ghibliapi.herokuapp.com/films/`);
    let films = await resolve.json();
    setFilms(films);
  };

  useEffect(() => {
    getFilms();
  }, []); // [] creates a dependency preventing the useEffect from running an infinity loop

  return films.map((film) => {
    return (
      <div>
        <Card className="box">
          <Card.Body>
            <Card.Title style={{ display: "flex", justifyContent: "center" }}>
            <h1>{film.title}</h1>
            </Card.Title>
            <Card.Title style={{ display: "flex", justifyContent: "center" }}>
            <h1>Rotten Tomatoes Score: {film.rt_score}</h1>
            </Card.Title>
            <div style={{display: "flex", justifyContent: "center"}}>
              <Link to={`/films/${film.id}/details`}>
                <button className="btn btn-primary">More Details</button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  });
};

export default FilmPage;
