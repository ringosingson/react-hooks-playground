//eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { useTitleInput } from "./hooks/useTitleInput";
//useEffect run after every complete render(after mount and update)

const App = () => {
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput("");

  // useEffect(() => {
  //  document.title = name; //documeent is browser api, here the title is change
  // });

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>

      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
