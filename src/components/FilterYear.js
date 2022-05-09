import "../styles/layout/_filter_year.scss";

function FilterYear(props) {
  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  const years = props.movies.map((movie) => {
    return movie.year;
  });
  const uniq = [...new Set(years)].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  return (
    <>
      <label htmlFor="filter2" className="text">
        Year
      </label>
      <select onChange={handleChange} className="filter_select">
        <option className="filter2" value="all">
          All
        </option>
        {uniq.map((year, index) => {
          return (
            <option value={year} key={index}>
              {year}
            </option>
          );
        })}
      </select>
    </>
  );
}
export default FilterYear;
