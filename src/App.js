import "./App.css";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SerchResults from "./pages/SearchResults";
import { Link, Route } from "wouter";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "andres",
        suscribeteAlCanal: true,
      }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src="/logo.png" />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={Detail} path="/gif/:id" />
            <Route component={SerchResults} path="/search/:keyword" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
