/* eslint-disable react/prop-types */
import { useState } from "react";
import { getMovies, searchMovie } from "../../../config/Api";
import moment from "moment";
import { useEffect } from "react";
import { Loading } from "../../atoms";

const CardMovieList = ({ search }) => {
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);

  const searchData = async (q) => {
    setLoading(true);
    if (q.length > 3) {
      await searchMovie(q).then((res) => {
        setLoading(false);
        setPopularMovies(res);
      });
    }
  };

  const getMovieData = () => {
    setLoading(true);
    getMovies("popular").then((res) => {
      setLoading(false);
      setPopularMovies(res);
    });
  };

  useEffect(() => {
    setLoading(true);
    getMovieData();
  }, []);

  useEffect(() => {
    if (search.length > 3) {
      searchData(search);
      return;
    }
    if (search.length == 0 && search.length < 3) {
      getMovieData();
      return;
    }
  }, [search]);

  if (loading) return <Loading />;
  if (popularMovies.length == 0) return <p>Data tidak ditemukan</p>;

  return popularMovies.map((movie, i) => {
    let urlPath = import.meta.env.VITE_APP_BASEIMGURL + "/" + movie.poster_path;
    return (
      <div className="Movie-wrapper" key={i}>
        <img className="Movie-image" src={`${movie.poster_path == null ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==" : urlPath}`} />
        <div className="Movie-title">{movie.title.length > 25 ? movie.title.substring(0, 25) + "..." : movie.title}</div>
        <div className="Movie-date">{movie.release_date != "" ? moment(movie.release_date).format("DD MMM YYYY") : "Coming soon"}</div>
        <div className="Movie-rate">{movie.vote_average.toFixed(1)}</div>
      </div>
    );
  });
};

export default CardMovieList;
