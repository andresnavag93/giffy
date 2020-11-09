import "./App.css";
import { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  const [keyword, setKeyword] = useState("panda");
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword={keyword} />
        <button onClick={() => setKeyword("mapache")}>Cambiar keyword</button>
      </section>
    </div>
  );
}

export default App;
