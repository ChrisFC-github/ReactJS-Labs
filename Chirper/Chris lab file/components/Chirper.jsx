import React, { Component, Fragment } from 'react';
import './card.css';
import { Card } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.name,
            inputText: '',
            placeholder: 'Write a new Chirp post here',
            savedChirps: []
        }
    }

    handleAddPost = () => {
        // const newChirp = this.setState({ inputText: this.state.inputText });
        // this pulls the previous values or data in the savedChirps array PLUS the new state of the inputText in the text box
        this.setState({ savedChirps: [...this.state.savedChirps, this.state.inputText ]});
    }

    // changes the state of the inputText to the current text in the box
    handleChange = (e) => this.setState({ inputText: e.target.value });

    render() {
            return (
                <Fragment>
                    <h1>{this.props.name}</h1>
                    <input type="text" placeholder={this.state.placeholder} value={this.state.inputText} onChange={(e) => { this.handleChange(e) }} />
                    <button onClick={this.handleAddPost}>Post Chirp</button>

                        {this.state.savedChirps.map((value, index) =>
                            <Card style={{ width: '18rem' }} key={index} className="box">
                            <Card.Body>
                                <Card.Title><h1>Chirp:</h1></Card.Title>
                                <Card.Text><h3>{value}</h3></Card.Text>
                            </Card.Body>
                        </Card>
                            )}

                </Fragment>
            )
    }
}

export default App;
