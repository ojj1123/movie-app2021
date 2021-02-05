import React from "react";
import PropTypes from "prop-types";

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <h2>{title}</h2>
      <h4>{year}</h4>
      <ul>
        {genres.map((genres, index) => (
          <li key={index}>{genres}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}
Movie.propTypes = {
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
