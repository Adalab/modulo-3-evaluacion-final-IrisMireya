import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import "../styles/App.scss";
import getApiData from "../services/Api";
import MovieSceneDetail from "./MovieSceneDetail";
import { Routes, Route } from "react-router-dom";
import { matchPath, useLocation } from "react-router";
import Footer from "./Footer";

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setLoading(false);
      const orderedMovies = dataFromApi.sort((a, b) =>
        a.movie > b.movie ? 1 : a.movie < b.movie ? -1 : 0
      );
      return setDataMovies(orderedMovies);
    });
  }, []);

  const { pathname } = useLocation();
  const dataPath = matchPath("/movie/:movieDetail", pathname);

  const movieDetail = dataPath !== null ? dataPath.params.movieDetail : null;
  const movieFound = dataMovies.find(
    (item) => item.id === parseInt(movieDetail)
  );

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main loading={loading} dataMovies={dataMovies}/>} />
        <Route
          path="/movie/:movieDetail"
          element={<MovieSceneDetail movieDetail={movieFound} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
