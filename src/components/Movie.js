import React, { useEffect, useState } from "react";
import axios from "axios";

import "../assets/css/Movie.css";

function Movie() {
  const [movie, setMovie] = useState([]);

  const getData = async () => {
    const Parameter = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    };
    await axios
      .post(`https://hoblist.com/api/movieList`, Parameter)
      .then((res) => {
        console.log(res.data.result);
        setMovie(res.data.result);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        {movie.map((item, index) => {
          return (
            <div className="col-md-6 col-sm-6 my-2" key={index}>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex-column my-5">
                      <button className="triangle-up "></button>
                      <div className="flex-column text-center">
                        {item.voting}
                      </div>
                      <button className="triangle-down "></button>
                    </div>
                    <div className="flex-column mx-2">
                      <img
                        src={item.poster}
                        alt={item.poster}
                        style={{ width: 130, height: 210 }}
                        className="mx-2"
                      />
                    </div>
                    <div className="flex-column mx-2">
                      <h5>{item.title}</h5>
                      <p className="m-0">
                        Generic :-<span>{item.genre}</span>
                      </p>
                      <p className="m-0">
                        Director :-<span>{item.director}</span>
                      </p>
                      <p className="m-0">
                        Starting :-<span>{item.stars}</span>
                      </p>
                      <p className="m-0 ">
                        <span>Min </span> | <span>English</span> | <span>Apr 2</span>
                      </p>
                      <p className="m-0 text-primary">
                        <span>Views {item.pageViews}</span> |{" "}
                        <span>Voted by {item.voting} people</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ width: 500 }}
                    >
                      Watch Trailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movie;
