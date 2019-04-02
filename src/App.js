//eslint-disable-next-line
import React, { useState, useEffect, useRef, useMemo } from "react";

import Toggle from "./Toggle";
import { useTitleInput } from "./hooks/useTitleInput";
//useEffect run after every complete render(after mount and update)

const App = () => {
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput("");
  const ref = useRef();
  // useEffect(() => {
  //  document.title = name; //documeent is browser api, here the title is change
  // });

  const reverseWord = word => {
    return word
      .split("")
      .reverse()
      .join("");
  };
  //const title = "Level Up Dishes";

  const TitleReversed = useMemo(() => reverseWord(name), [name]);

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add("new-fake-class")}>
        {/*when we click on h1 new class is added to it */}
        {TitleReversed}
      </h1>
      <Toggle />

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
