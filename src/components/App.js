import { useState, useEffect } from "react";
import Header from "./Header";
import "../styles/App.scss";
import getApiData from "../services/Api";
import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYears, setFilterYears] = useState('');

  useEffect(() => {
    if (dataMovies.length === 0) {
      getApiData().then((dataFromApi) => {
        console.log(dataFromApi);
        setDataMovies(dataFromApi);
      });
    }
  });

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const handleFilterYear =(value) =>{
    if (filterYears.includes(value)){
    }
  }

  return (
    <>
    <div>
      <Header />

      <Filters
        handleFilterMovie={handleFilterMovie}
        handleFilterYear={handleFilterYear}
      />
      
      <MovieSceneList />
    </div>
    </>
  );
}

export default App;
