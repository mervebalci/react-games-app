import { MouseEvent } from "react";

function ListGroup() {
  let cities = ["Toronto", "Havana", "Montreal", "Seoul", "Frankfurt", "Paris"];

  // Event handler
  function handleClick(event: MouseEvent) {
    console.log(event);
  }

  return (
    <>
      <h1>My Vacation List</h1>
      {cities.length === 0 && <p>No City Found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li className="list-group-item" key={city} onClick={handleClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
