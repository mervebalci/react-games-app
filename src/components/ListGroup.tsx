function ListGroup() {
  let cities = ["Toronto", "Havana", "Montreal", "Seoul", "Frankfurt", "Paris"];

  cities = [];

  return (
    <>
      <h1>My Vacation List</h1>
      {cities.length === 0 && <p>No City Found</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
