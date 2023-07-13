import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BASEURL;
const token = import.meta.env.VITE_APP_TOKEN;

export const getMovies = async (type) => {
  const movie = await axios.get(`${baseUrl}/movie/${type}?language=en-US&page=1`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${baseUrl}/search/movie?query=${q}&language=en-US&page=1`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return search.data.results;
};
