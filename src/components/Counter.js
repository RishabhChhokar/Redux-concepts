import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter);
   const incrementHandler = () => {
     dispatch({ type: "increment" });
   };

   const decrementHandler = () => {
     dispatch({ type: "decrement" });
   };
   
   const incrementBy5Handler = () => {
     dispatch({ type: "INCREMENTBY5" });
   };

   const decrementBy5Handler = () => {
     dispatch({ type: "DECREMENTBY5" });
   };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy5Handler}>Increment By 5</button>
        <button onClick={decrementBy5Handler}>Decrement By 5</button>
      </div>
    </main>
  );
};

export default Counter;
