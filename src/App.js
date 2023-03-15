import Cell from "./components/Cell";
import { useState } from "react";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("X");
  const [winer, setWiner] = useState(null);

  const grid = cells.map((e, i) => {
    return (
      <Cell key={i} id={i} cell={e} setCells={setCells} go={go} setGo={setGo} />
    );
  });
  const messag = `it is now (${go})'s go !`;
  return (
    <div className="app">
      <div className="board">{grid}</div>
      <p>{messag}</p>
    </div>
  );
}

export default App;
