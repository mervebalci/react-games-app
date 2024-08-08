import { useState } from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";

function Shopping() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default Shopping;
