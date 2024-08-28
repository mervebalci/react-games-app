// useEffect( () => {} )
// To execute a piece of code AFTER a component is rendered

import { useEffect, useRef } from "react";

export default function App() {
  const ref = useRef<HTMLInputElement>(null);

  // Function inside will be called after each render
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}
