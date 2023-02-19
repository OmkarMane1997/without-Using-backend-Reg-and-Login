import React, { useState } from "react";
import "../assets/css/Movie.css";
import ReactPlayer from "react-player";
function Movie() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="offset-md-3 col-md-4">
          <ReactPlayer url="https://youtu.be/6SSbCbudN3o" />
        </div>
      </div>
    </div>
  );
}

export default Movie;
