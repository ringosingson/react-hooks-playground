import React, { useState } from "react";

const App = () => {
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState("");

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <h3>{name}</h3>
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
    </div>
  );
};

export default App;
