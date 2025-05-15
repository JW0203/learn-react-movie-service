import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, rating, genres, summary }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title} / Rate:{rating}
        </Link>
      </h2>
      <p>{summary}</p>
      <div>
        Genres :
        <ul>
          {genres.map((g, index) => (
            <li key={`${g} - ${index}`}>{g}</li>
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
}

Movie.prototypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
