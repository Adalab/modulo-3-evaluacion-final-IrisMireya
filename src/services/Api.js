const getApiData = () => {
  return fetch(
    "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50"
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((item, index) => {
        return {
          poster: item.poster,
          movie: item.movie,
          full_line: item.full_line,
          year: `${item.year}`,
          director: item.director,
          audio: item.audio,
          character: item.character,
          id: index,
        };
      });
      return cleanData;
    });
};

export default getApiData;
