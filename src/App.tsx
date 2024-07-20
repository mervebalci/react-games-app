import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Toronto", "Havana", "Montreal", "Seoul", "Frankfurt", "Paris"];

  function handleSelectItem(item: string) {
    console.log(item);
  }

  return (
    <div>
      <ListGroup
        items={cities}
        heading="My Vacation List"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
