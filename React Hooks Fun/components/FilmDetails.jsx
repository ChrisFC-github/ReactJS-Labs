import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import "./card.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilmDetails = () => {
// let { id }  = useParams() //use this as simple way to get ID
  const unfilteredurlId = window.location.pathname;
  const filteredurl1 = unfilteredurlId.replace("/films/", "");
  const filteredurl2 = filteredurl1.replace("/details", "");
  const urlId = filteredurl2;
  console.log(urlId);
  //used to retrieve the generated urlID from the route with text filters NOTE: THIS CAN BE UNNECESSARY IF I FOUND A BETTER WAY

  const [film, setdetailFilms] = useState([]);
  const getFilmdetails = async () => {
      let resolve = await fetch(`https://ghibliapi.herokuapp.com/films/${urlId}`);
      let detailfilms = await resolve.json();
      setdetailFilms(detailfilms);
    };

  useEffect(() => {
    getFilmdetails();
  }, []); // [] creates a dependency preventing the useEffect from running an infinity loop

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
          <Card.Text>
            <h2>Description: {film.description}</h2>
          </Card.Text>
          <Card.Text>
            <h2>Year Released: {film.release_date}</h2>
          </Card.Text>
          <Card.Text>
            <h2>Director: {film.director}</h2>
          </Card.Text>
          <Card.Text>
            <h2>Producer: {film.producer}</h2>
          </Card.Text>
          <Link to="/FilmPage"><button>Go back to Films</button></Link>
        </Card.Body>
      </Card>
    </div>
  );
  // });

}

export default FilmDetails;
