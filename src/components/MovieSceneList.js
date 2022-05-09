import React from "react";
import MovieSceneItem from "./MovieSceneItem";
import "../styles/layout/_movie_scene_list.scss";

function MovieSceneList(props) {
  const moviesElements = props.movies.map((movie, id) => {
    return (
      <li className="movies__card" key={id}>
        <MovieSceneItem moviesList={movie} />
      </li>
    );
  });
  return (
    <section className="movies__section">
      <ul className="movies__ul">{moviesElements}</ul>
    </section>
  );
}

export default MovieSceneList;
