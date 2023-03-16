import React from "react";

function Cell({ id, cell, cells, setCells, go, setGo, winer }) {
  const handleClick = (e) => {
    const box = document.getElementById(id);
    const taken =
      box.firstChild.classList.contains("cercle") ||
      box.firstChild.classList.contains("cross");

    if (!taken && !winer) {
      if (go === "X") {
        box.firstChild.classList.add("cross");
        handleCells("cross");
        setGo("O");
      }
      if (go === "O") {
        box.firstChild.classList.add("cercle");
        handleCells("cercle");
        setGo("X");
      }
    }
  };
  const handleCells = (className) => {
    const newCells = cells.map((e, i) => {
      if (i === id) {
        return className;
      } else {
        return e;
      }
    });
    setCells(newCells);
  };
  return (
    <div className="cell" id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
}

export default Cell;
