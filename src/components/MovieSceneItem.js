import "../styles/layout/_movie_scene_item.scss";
import { Link } from "react-router-dom";

function MovieSceneItem(props) {
  return (
    <>
      <Link className="movie__list" to={`/movie/${props.moviesList.id}`}>
        <section className="movie__container">
          <img
            className="movie__picture"
            alt={props.moviesList.poster}
            title="Movie Picture"
            src={props.moviesList.poster}
          />
          <h2 className="movie__title">{props.moviesList.movie} </h2>
          <p className="movie__quote">{props.moviesList.full_line} </p>
          <p className="movie__year">{props.moviesList.year} </p>
        </section>
      </Link>
    </>
  );
}
export default MovieSceneItem;
