import { useState } from "react";

function DrinkMenu() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  function handleClick() {
    setDrink({ ...drink, price: 6 });
  }

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click to Order</button>
    </div>
  );
}

export default DrinkMenu;
