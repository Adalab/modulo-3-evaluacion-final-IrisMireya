import { useState, useEffect } from 'react';
import Header from "./Header";
import "../styles/App.scss";
import getApiData from '../services/Api';

function App() {
  
  const [dataFilms, setDataFilms] = useState([]);

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      console.log(dataFromApi)
      const orderedFilms = dataFromApi.sort((a,b)=>
      a.movie > b.movie ? 1: a.movie < b.movie ? -1 :0);
       return setDataFilms(orderedFilms)
    });
  }, []);

return (
<>
<Header/>

</>
);
}


export default App;