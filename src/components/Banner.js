import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "../css/Banner.css";

const baseUrl = "https://image.tmdb.org/t/p/original"; // image base-url

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  // console.log(movie);

  function truncate(str, n) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    // Return str truncated with '...' concatenated to the end of str.

    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // truncate("wwwwwwwwwwwwwwww", 4);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover", // fit background image into display size
        backgroundImage: `url(${baseUrl}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {movie.name || movie.title || movie.original_name}
        </h1>

        {/* buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        {/* description */}
        {/* <h1 className="banner_discription">{movie.overview}</h1> */}
        <h1 className="banner_discription">
          {truncate(`${movie.overview}`, 150)}
        </h1>
      </div>

      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
