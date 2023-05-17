import React from "react";
import "../../scss/components/UI/Counter.scss";

type CounterProps = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

const Counter: React.FC<CounterProps> = ({ count, increase, decrease }) => {

  return (
    <div className="counter">
      <button className="counter__button" onClick={decrease}>
        <span>-</span>
      </button>
      <input type="text" className="counter__input" value={count} readOnly/>
      <button className="counter__button" onClick={increase}>
        <span>+</span>
      </button>
    </div>
  );
};

export default Counter;
