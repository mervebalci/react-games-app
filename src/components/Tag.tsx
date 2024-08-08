import { useState } from "react";

function Tag() {
  const [tags, setTags] = useState([
    "happy",
    "lucky",
    "ambitious",
    "productive",
  ]);

  function handleClick() {
    // Add an item
    setTags([...tags, "excited"]);
    console.log(tags);

    // Remove an item
    setTags(tags.filter((tag) => tag !== "happy"));
    console.log(tags);

    // Update an item
    setTags(tags.map((tag) => (tag === "ambitious" ? "successful" : tag)));
    console.log(tags);
  }

  return (
    <div>
      <button onClick={handleClick}>Tags</button>
    </div>
  );
}

export default Tag;
