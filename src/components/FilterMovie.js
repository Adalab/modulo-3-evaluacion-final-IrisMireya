function FilterMovie(props) {
  const handleChange = (ev) => {
    props.handleFilterMovie(ev.targer.value);
  };

  return (
    <>
    <label htmlFor="filter1" className="text">Movie</label>
      <input
        className="input_filter"
        type="text"
        name="movie"
        id="movie"
      ></input>
      <label className="filter__label" htmlFor="movie">
        
      </label>
    </>
  );
}

export default FilterMovie;
