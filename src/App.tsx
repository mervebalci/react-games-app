import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let cities = [
    "Toronto",
    "Cayo Santa Maria",
    "Frankfurt",
    "Heidelberg",
    "Strasbourg",
    "Baden Baden",
    "Paris",
  ];
  return (
    <div>
      <ListGroup
        items={cities}
        heading="My Vacation List"
        onSelectItem={() => {}}
      />
    </div>
  );
}

export default App;
