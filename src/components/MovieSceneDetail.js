import "../styles/layout/_movie_scene_detail.scss";

function MovieSceneDetail(props) {
  return (
    <>
      <div className="card__container">
        <img
          className="card__picture"
          alt={props.movieDetail.movie}
          src={props.movieDetail.poster}
        />
        <h4 className="card__title">{props.movieDetail.movie}</h4>
        <p className="card__fullline">{props.movieDetail.full_line}</p>
        <p className="card__director">{props.movieDetail.director}</p>
        <audio controls className="card__audio" src={props.movieDetail.audio}>
        </audio>
        
      </div>
    </>
  );
}

export default MovieSceneDetail;
