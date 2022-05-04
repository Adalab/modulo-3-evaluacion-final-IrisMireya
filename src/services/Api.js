const getApiData = () => {
    return fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50')
      .then((response) => response.json())
      .then((data) => {
        const dataClean = data.results.map((user) => {
          return {
            poster: user.poster,
            movie: user.movie,
            full_line: user.full_line,
            year: user.year,
          };
        });

        return dataClean;
      });
  };

  export default getApiData;