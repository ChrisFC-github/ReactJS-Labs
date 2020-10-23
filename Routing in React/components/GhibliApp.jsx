import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PeoplePage from "./PeoplePage";
import FilmPage from "./FilmPage";
import "./card.css";


class App extends Component {
   render() {
    return (
      <Router>
      <Fragment>
        <div className="grid">
          <img
            className="button"
            src="https://i.ibb.co/ZNy9jfs/logo.png"
            alt="Ghibli Studios"
            width="350"
            height="168"
          ></img>
        </div>
        <div className="grid">
          <div className="button">
            <Link to="/FilmPage"><button>Load Films</button></Link>
            <Link to="/PeoplePage"><button>Load People</button></Link>
            <Switch>
            <Route exact path="/FilmPage" component={FilmPage}/>
            <Route exact path="/PeoplePage" component={PeoplePage}/>
            </Switch>
          </div>
        </div>
      </Fragment>
      </Router>
    );
  }
}

export default App;
