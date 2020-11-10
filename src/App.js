import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <div> App</div>
        <Link to="/gif/venezuela"> Venezuela</Link>
        <Link to="/gif/rana"> Rana</Link>
        <Link to="/gif/mochilero"> Mochilero</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
