import React from "react";

let OneChirp = (props) => {
  return (
    <React.Fragment>
      <div className="card mx-4 my-4 shadow">
        <div className="card-body">
          <h5 className="card-title">{props.chirp.name}</h5>
          <p className="card-text">{props.chirp.text}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OneChirp;