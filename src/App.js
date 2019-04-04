//eslint-disable-next-line
import React, { useState, useEffect, useRef } from "react";
import useAbortableFetch from "use-abortable-fetch";
import { useSpring, animated } from "react-spring";
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
  //eslint-disable-next-line
  const { data, loading } = useAbortableFetch(
    "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"
  );

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="main-wrapper" ref={ref}>
      <animated.h1
        style={props}
        onClick={() => ref.current.classList.add("new-fake-class")}
      >
        {/*when we click on h1 new class is added to it */}
        Level up Hooks
      </animated.h1>
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
      {data &&
        data.map(dish => (
          <article className="dish-card dish-card--withImage">
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className="ingredients">
              {dish.ingredients.map(ingredient => (
                <span>{ingredient}</span>
              ))}
            </div>
          </article>
        ))}
    </div>
  );
};

export default App;
