import { useState } from "react";

function ListGroup() {
  let cities = ["Toronto", "Havana", "Montreal", "Seoul", "Frankfurt", "Paris"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>My Vacation List</h1>
      {cities.length === 0 && <p>No City Found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
