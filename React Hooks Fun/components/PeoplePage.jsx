import React, { useState, useEffect } from "react";
import "./card.css";
import { Card } from "react-bootstrap";

const PeoplePage = () => {
  const [allPeople, setPeople] = useState([]);

  const getPeople = async () => {
    let resolve = await fetch(`https://ghibliapi.herokuapp.com/people/`);
    let allPeople = await resolve.json();
    setPeople(allPeople);
  };

  useEffect(() => {
    getPeople();
  }, []); // [] creates a dependency preventing the useEffect from running an infinity loop

  return allPeople.map((peopleData) => {
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
};

export default PeoplePage;
