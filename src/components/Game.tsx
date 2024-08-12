import { useState } from "react";

function Game() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  function handleClick() {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
    console.log(game);
  }

  return (
    <div>
      <button onClick={handleClick}>Game</button>
    </div>
  );
}

export default Game;
