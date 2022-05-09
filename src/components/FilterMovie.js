import "../styles/layout/_filter_movie.scss";

function FilterMovie(props) {
  const handleChange = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };

  return (
    <>
      <label htmlFor="movie" className="text">
        Movie
      </label>
      <input
        className="input_filter"
        type="text"
        name="movie"
        id="movie"
        onChange={handleChange}
      ></input>
      <label className="filter__label" htmlFor="movie"></label>
    </>
  );
}
export default FilterMovie;
