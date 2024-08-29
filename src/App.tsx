// useEffect( () => {} )
// To execute a piece of code AFTER a component is rendered

import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

function connect() {
  console.log("Connecting");
}

function disconnect() {
  console.log("Disconnecting");
}

export default function App() {
  const [category, setCategory] = useState("");

  useEffect(() => {
    connect();

    // Clean up function is optionally returned. It should stop or undo whatever the effect was doing.
    return () => disconnect();
  });

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>

      <ProductList category={category} />
    </div>
  );
}
