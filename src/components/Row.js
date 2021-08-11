import React, { useState, useEffect } from "react";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "../css/Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original";
const API_KEY = "743ce8a1e25b0f66525497e38a60422c";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which runs based on a specific condition
  // useEffect Hook :- https://reactjs.org/docs/hooks-effect.html

  useEffect(() => {
    // if [], run once when the row loads , and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      // baseUrl + requests :- "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213"

      // console.log(request);
      // console.log(request.data.results);

      setMovies(request.data.results);
      return request;
    }
    fetchData();

    //Below use fetchUrl variable in "[]", because  we depended on this and it's outside  of the useEffect block.
  }, [fetchUrl]);

  // console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // fetching trailer using TMDB movie video request
  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerUrl = await axios.get(
        `/movie/${movie.id}/videos?api_key=${API_KEY}`
      );
      setTrailerUrl(trailerUrl.data.results[0].key);
    }
  };

  // fetching trailer using movie-trailer module
  /*const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // url =>  https://www.youtube.com/watch?v=7F7VGCfsasE
      movieTrailer(movie.name || movie.title || "") // include "" because sometimes movie.name undefined
        .then((url) => {
          //https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
          const urlParams = new URLSearchParams(new URL(url).search);
          //https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get
          setTrailerUrl(urlParams.get("v")); // v = 7F7VGCfsasE from url
        })
        .catch((error) => console.log(error));
    }
  }; */

  return (
    <div className="row">
      {/* title of category */}
      <h2>{title}</h2>

      <div className="row_posters">
        {/* row__posters */}

        {movies.map((movie) =>
          //poster_path is property in fetching data object to grab posters

          //only render if there is isLargeRow is true and poster_path exist or
          // isLargeRow is false and backdrop_path is exist.
          (isLargeRow && movie.poster_path) ||
          (!isLargeRow && movie.backdrop_path) ? (
            <>
              <img
                key={movie.id}
                className={`row_poster ${
                  isLargeRow ? "row_posterLarge" : null
                }`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title}
                onClick={() => handleClick(movie)}
              ></img>
              {/* <div className="playButton">
                <span class="glyphicons_v2 play invert svg"></span>
              </div> */}
            </>
          ) : null
        )}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
