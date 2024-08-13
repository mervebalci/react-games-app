import { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  function handleClick() {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    console.log(cart);
  }

  return (
    <div>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default ShoppingCart;
