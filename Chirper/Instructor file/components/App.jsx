import React, { Component, Fragment } from "react";
import Timeline from "./Timeline";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      text: "",
      chirpArr: [
        { name: "Thomas", text: "I'm ready to get wild and crazy" },
        {
          name: "Bridgette",
          text: "I'm gonna go to a big populated area without a maks",
        },
        { name: "Third Person", text: "Thidrdpri  jtoo aphoeusnix spuuerosn" },
      ],
    };
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleText = (e) => {
    this.setState({ text: e.target.value });
  };

  submitInfo() {
    let newChirp = {
      name: this.state.name,
      text: this.state.text,
    };

    this.setState({ chirpArr: [...this.state.chirpArr, newChirp] });
  }

  render() {
    return (
      <Fragment>
        <h1 className="bg-primary">Chirpr</h1>

        <input
          type="text"
          className="name mx-4"
          placeholder="What name"
          onChange={(e) => this.handleName(e)}
          value={this.state.name}
        />
        <input
          type="text"
          className="text mx-4"
          placeholder="WHat's your dumb opinion"
          onChange={(e) => this.handleText(e)}
          value={this.state.text}
        />
        <button onClick={() => this.submitInfo()}>Chirp</button>

        <Timeline chirps={this.state.chirpArr} />
      </Fragment>
    );
  }
}

export default App;