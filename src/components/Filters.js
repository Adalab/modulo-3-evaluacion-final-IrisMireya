import FilterMovie from "./FilterMovie";
import FilterYear from "./FilterYear";
import "../styles/layout/_filters.scss";
import FilterCharacter from "./FilterCharacter";

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="filters_container">
      <form onSubmit={handleSubmit}>
        <FilterMovie handleFilterMovie={props.handleFilterMovie} />
        <FilterYear
          movies={props.movies}
          handleFilterYear={props.handleFilterYear}
        />
        <FilterCharacter handleFilterCharacter={props.handleFilterCharacter} />
      </form>
    </section>
  );
}
export default Filters;
