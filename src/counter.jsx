import React from "react";
import useCounter from "./useCounter";
import { Link } from "react-router-dom";
import "./counter.css";

function Counter() {
  const [state, increment, decrement, reset, setValue] = useCounter();

  return (
    <div className="counter-wrapper">
      <div className="counter">
        <div className="value">
          <h1> {state.count} </h1>
        </div>

        <div className="button">
          <button onClick={increment}> increment</button>
          <button onClick={decrement}> decrement</button>
          <button onClick={reset}> reset</button>
          <input type='number' name="setValue" onChange={(e) => setValue(e)} /> 
        </div>

        <div className="link">
          <Link className="links" to="/">
            {" "}
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Counter;
