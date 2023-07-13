import { useEffect } from "react";
import "../App.css";
import { getMovieList, searchMovie } from "../config/Api";
import { useState } from "react";
import moment from "moment";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      let urlPath = import.meta.env.VITE_APP_BASEIMGURL + "/" + movie.poster_path;
      return (
        <div className="Movie-wrapper" key={i}>
          <img className="Movie-image" src={`${movie.poster_path == null ? "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" : urlPath}`} />
          <div className="Movie-title">{movie.title.length > 25 ? movie.title.substring(0, 25) + "..." : movie.title}</div>
          <div className="Movie-date">{moment(movie.release_date).format("DD MMM YYYY")}</div>
          <div className="Movie-rate">{movie.vote_average.toFixed(1)}</div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      await searchMovie(q).then((res) => {
        setPopularMovies(res);
      });
    }
  };

  useEffect(() => {
    getMovieList().then((res) => {
      setLoading(false);
      setPopularMovies(res);
    });
  }, []);

  return (
    <>
      <h1>Dicky Movie</h1>
      <input placeholder="Cari film kesayangan" className="Movie-search" onChange={({ target }) => search(target.value)} />
      <div className="Movie-container">{loading ? "load data" : popularMovies.length == 0 ? "Data tidak ditemukan" : <PopularMovieList />}</div>
    </>
  );
};

export default App;
