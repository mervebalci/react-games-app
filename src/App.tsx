import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Toronto", "Havana", "Montreal", "Seoul", "Frankfurt", "Paris"];

  return (
    <div>
      <ListGroup items={cities} heading="My Vacation List" />
    </div>
  );
}

export default App;
