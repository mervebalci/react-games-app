import { useState } from "react";

function Pizza() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  function handleClick() {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    console.log(pizza);
  }

  return (
    <div>
      <button onClick={handleClick}>Pizza</button>
    </div>
  );
}

export default Pizza;
