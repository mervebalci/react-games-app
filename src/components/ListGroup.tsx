function ListGroup() {
  const cities = [
    "Toronto",
    "Havana",
    "Montreal",
    "Seoul",
    "Frankfurt",
    "Paris",
  ];

  return (
    <>
      <h1>My Vacation List</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
