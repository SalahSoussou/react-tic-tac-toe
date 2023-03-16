import Cell from "./components/Cell";
import { useState, useEffect } from "react";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("X");
  const [winer, setWiner] = useState(null);

  const reStart = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("X");
    setWiner(null);
  };

  useEffect(() => {
    const winCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winCombo.forEach((arr) => {
      const o = arr.every((e) => cells[e] === "cercle");
      if (o) {
        setWiner("O is the winer");
        return;
      }
      const x = arr.every((e) => cells[e] === "cross");
      if (x) {
        setWiner("X is the winer");
        return;
      }
    });
  }, [cells]);

  const grid = cells.map((e, i) => {
    return (
      <Cell
        key={i}
        id={i}
        cell={e}
        setCells={setCells}
        cells={cells}
        go={go}
        setGo={setGo}
        winer={winer}
      />
    );
  });
  const messag = `it is now (${go})'s go !`;
  return (
    <div className="app">
      <div className="board">{grid}</div>
      <p>{winer || messag}</p>
      {winer && <button onClick={reStart}>restart</button>}
    </div>
  );
}

export default App;
