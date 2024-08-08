import { useState } from "react";

function Info() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  function handleClick() {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
    console.log(customer);
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default Info;
