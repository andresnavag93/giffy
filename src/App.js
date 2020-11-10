import "./App.css";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SerchResults from "./pages/SearchResults";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <figure className="App-logo">
            <img alt="Giffy logo" src="/logo.png" />
          </figure>
        </Link>
        <Route component={Home} path="/" />
        <Route component={Detail} path="/gif/:id" />
        <Route component={SerchResults} path="/search/:keyword" />
      </section>
    </div>
  );
}

export default App;
