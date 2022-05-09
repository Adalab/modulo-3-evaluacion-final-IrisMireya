import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";
import { useState } from "react";

function Main({ dataMovies, loading }) {
  const [filterMovie, setFilterMovie] = useState("");
  const [filterYears, setFilterYears] = useState("");
  const [filterCharacter, setFilterCharacter] = useState("");

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const handleFilterYear = (value) => {
    if (value === "all") {
      return setFilterYears("");
    }
    setFilterYears(value);
  };
  const handleFilterCharacter = (value) => {
    setFilterCharacter(value);
  };

  const dataFilter = dataMovies
    .filter((item) => {
      return item.movie.toLowerCase().includes(filterMovie.toLowerCase());
    })
    .filter((item) => {
      return item.year.includes(filterYears);
    })
    .filter((item) => {
      return item.character.toLowerCase().includes(filterCharacter.toLowerCase());
    });
  return (
    <div>
      <Filters
        handleFilterMovie={handleFilterMovie}
        handleFilterYear={handleFilterYear}
        handleFilterCharacter={handleFilterCharacter}
        movies={dataMovies}
      />
      <section>
        {loading ? (
          <div className="loading">
            <div class="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="loading_data">Loading</div>
          </div>
        ) : dataFilter.length === 0 ? (
          <h2 className="no_results">
            No matching movie {filterMovie}, try again if you dare
          </h2>
        ) : (
          <MovieSceneList movies={dataFilter} />
        )}
      </section>
    </div>
  );
}
export default Main;
