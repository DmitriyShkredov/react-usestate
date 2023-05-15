import React, { useState } from "react";

function App() {
  const [state, setState] = useState({ value: 1, count: 10 });

  const updateState = (key) => {
    setState(() => {
      const newState = { ...state };
      newState[key] += 1;
      return newState;
    });
  };

  return (
    <div className="App">
      <div>Value: {state.value}</div>
      <div>Count: {state.count}</div>
      <button onClick={() => updateState("value")}>Add value</button>
      <button onClick={() => updateState("count")}>Add count</button>
    </div>
  );
}

export default App;
