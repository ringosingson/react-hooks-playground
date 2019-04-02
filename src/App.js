//eslint-disable-next-line
import React, { useState, useEffect, useRef, createContext } from "react";
import Toggle from "./Toggle";
import { useTitleInput } from "./hooks/useTitleInput";
//useEffect run after every complete render(after mount and update)
export const UserContext = createContext();

const App = () => {
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput("");
  const ref = useRef();
  // useEffect(() => {
  //  document.title = name; //documeent is browser api, here the title is change
  // });

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add("new-fake-class")}>
          {/*when we click on h1 new class is added to it */}
          Level Up Dishes
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
    </UserContext.Provider>
  );
};

export default App;
