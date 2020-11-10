import { Link, useLocation } from "wouter";
import { useState } from "react";
import { useGifs } from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";

const POPULARS_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"];

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();
  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword} />
      </form>
      <h3 className="App-title">Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title"> Los gifs mas populares</h3>
      <ul>
        {POPULARS_GIFS.map((popularGif) => {
          return (
            <li key={popularGif}>
              <Link to={`/search/${popularGif}`}> Gifs de {popularGif}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
