import { Link } from "wouter";

const POPULARS_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"];

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
