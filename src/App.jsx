import { useState } from "react";
import { CardMovieList } from "./components";
import { useDebounce } from "./utils";
import "./assets/App.css";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouceSearchValue = useDebounce(searchValue, 1000);

  return (
    <>
      <h1>Search Movie</h1>
      <input placeholder="Cari film kesayangan" className="Movie-search" onChange={({ target }) => setSearchValue(target.value)} />
      <div className="Movie-container">
        <CardMovieList search={debouceSearchValue} />
      </div>
    </>
  );
};

export default App;
