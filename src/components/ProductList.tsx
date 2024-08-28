import { useEffect, useState } from "react";

export default function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);
  /* if you leave the dependency as an empty array, react will execute the effect only once. 
  If dependency is set to category, any time the value of the category changes, react will re-execute the effect. */

  return <div>ProductList</div>;
}
