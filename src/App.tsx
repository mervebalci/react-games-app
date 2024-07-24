import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert children="My Alert" onClose={() => setShowAlert(false)} />
      )}
      <Button color="success" onClick={() => setShowAlert(true)}>
        Click Me!
      </Button>
    </div>
  );
}

export default App;
