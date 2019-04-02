//eslint-disable-next-line
import React, { useState, useEffect, useRef } from "react";
import { useTitleInput } from "./hooks/useTitleInput";
//useEffect run after every complete render(after mount and update)

const App = () => {
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput("");
  const ref = useRef();
  // useEffect(() => {
  //  document.title = name; //documeent is browser api, here the title is change
  // });

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add("new-fake-class")}>
        {/*when we click on h1 new class is added to it */}
        Level Up Dishes
      </h1>

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
