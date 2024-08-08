import "./App.css";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import Message from "./components/Message";
import DrinkMenu from "./components/DrinkMenu";
import Info from "./components/Info";
import Tag from "./components/Tag";

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
    <>
      <div>
        <ListGroup
          items={cities}
          heading="My Vacation List"
          onSelectItem={() => {}}
        />
        <Button children="Click Me!" onClick={() => {}}></Button>
      </div>
      <Like onClick={() => console.log("Clicked!")} />

      <Message />
      <Message />
      <Message />

      <DrinkMenu />

      <Info />

      <Tag />
    </>
  );
}

export default App;
