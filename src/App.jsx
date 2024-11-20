import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleCountUp = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>This is mini app</h1>
      <p>{count}</p>
      <button onClick={handleCountUp}>Count Up</button>
    </div>
  );
}

export default App;
