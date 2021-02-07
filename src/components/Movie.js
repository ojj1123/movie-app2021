import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <h2 className="movie__title">{title}</h2>
        <h4 className="movie__year">{year}</h4>
        <ul>
          {genres.map((genres, index) => (
            <li key={index}>{genres}</li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </Link>
  );
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
