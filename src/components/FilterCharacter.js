function FilterCharacter(props) {
  const handleChange = (ev) => {
    props.handleFilterCharacter(ev.target.value);
  };

  return (
    <>
      <label htmlFor="character" className="text">
        Character
      </label>
      <input
        className="input_filter"
        type="text"
        name="character"
        id="character"
        onChange={handleChange}
      ></input>
      <label className="filter__label" htmlFor="character"></label>
    </>
  );
}
export default FilterCharacter;
