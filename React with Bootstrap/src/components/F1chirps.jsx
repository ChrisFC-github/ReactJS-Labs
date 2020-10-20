import React from 'react';
import './card.css';
import { Card } from 'react-bootstrap';


const ChirperTimeline = () => {
    const chirpInfo = [
        { image: "https://i.ibb.co/GsmcQb9/image16x9-img-1536-high-19.jpg", title: "Lando Norris", text1:"MCLAREN F1", text2: "Going after Lewis" },
        { image: "https://i.ibb.co/W611v9g/kimi-raikkonen-speaks-at-a-press-conference-1040x572.jpg", title: "Kimi Raikkonen", text1:"FERARRI", text2: "Bwoaaaaah" },
        { image: "https://i.ibb.co/FBPDFRy/1185001.jpg", title: "Daniil Kyvat", text1: "TORO ROSSO", text2: "Got a podium in 2020" },
        { image: "https://i.ibb.co/TgK0s7d/image16x9-img-1536-high.jpg", title: "Lewis Hamilton", text1: "MERCEDES-AMG", text2: "I always have pole" }
    ];

    const renderCard = (card, index) => {
        return(
                <Card style={{ width: '18rem' }} key={index} className="box">
                    <Card.Img variant="top" src={card.image} className="cardIMG"/>
                    <Card.Body>
                        <Card.Title><h1>{card.title}</h1></Card.Title>
                        <Card.Text><h3>Racing Team: {card.text1}</h3></Card.Text>
                        <Card.Text><h3>F1 Chirp: "{card.text2}"</h3></Card.Text>
                    </Card.Body>
                </Card>
        );
    };

return <div className="grid">{chirpInfo.map(renderCard)}</div>
};

export default ChirperTimeline;