import "./App.css";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import Message from "./components/Message";
import DrinkMenu from "./components/DrinkMenu";
import Info from "./components/Info";
import Tag from "./components/Tag";
import Bug from "./components/Bug";
import Shopping from "./components/E-commerce/Shopping";
import Game from "./components/Game";
import Pizza from "./components/Pizza";
import ShoppingCart from "./components/ShoppingCart";
import ExpandableText from "./components/ExpandableText";

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

      <Bug />

      <div>
        <Shopping />
      </div>

      <Game />

      <Pizza />

      <ShoppingCart />

      <ExpandableText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quam
        dolores unde repellat. Doloribus dolore unde quisquam nobis ut
        doloremque aspernatur consequuntur? Eius quibusdam repellat ab, expedita
        architecto quis officia voluptates. Vero quos asperiores cupiditate
        labore nobis impedit magnam vitae tempore perspiciatis rem inventore,
        nulla aperiam rerum natus repudiandae consequuntur amet maiores fugit
        expedita, voluptatem beatae. Amet error ipsum aspernatur quas rem
        voluptate praesentium quasi saepe consequuntur numquam repellat,
        blanditiis aliquam odio expedita eum magnam dolore alias quis, accusamus
        adipisci id deserunt. Nostrum quia aspernatur illum earum nesciunt dicta
        a placeat. In magnam et modi laudantium facilis, labore fugiat dolores?
      </ExpandableText>
    </>
  );
}

export default App;
