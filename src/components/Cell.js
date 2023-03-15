import React from "react";

function Cell({ id, cell, setCells, go, setGo }) {
  const handleClick = (e) => {
    const box = document.getElementById(id);
    const taken =
      box.firstChild.classList.contains("cercle") ||
      box.firstChild.classList.contains("cross");

    if (!taken) {
      if (go === "X") {
        box.firstChild.classList.add("cross");
        setGo("O");
      } else if (go === "O") {
        box.firstChild.classList.add("cercle");
        setGo("X");
      }
    } else if (taken) {
      return;
    }
  };
  return (
    <div className="cell" id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
}

export default Cell;
