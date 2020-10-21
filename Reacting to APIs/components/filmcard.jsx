import React, { Component } from 'react';
import './card.css';
import { Card } from 'react-bootstrap';


export default function FilmCard(props) {
    return (
        <Card className="box">
                    <Card.Body>
                        <Card.Title><h1>{props.data.title}</h1></Card.Title>
                        <Card.Text><h2>{props.data.description}</h2></Card.Text>
                        <Card.Text><h2>{props.data.release_date}</h2></Card.Text>
                    </Card.Body>
        </Card>
    )
}

