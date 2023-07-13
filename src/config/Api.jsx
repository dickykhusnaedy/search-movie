import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BASEURL;
const token = import.meta.env.VITE_APP_TOKEN;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${baseUrl}/search/movie?query=${q}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return search.data.results;
};
