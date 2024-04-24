import { configureStore } from "@reduxjs/toolkit";
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

   if (action.type === "INCREMENTBY5") {
     return {
       counter: state.counter + 5,
     };
   }

   if (action.type === "DECREMENTBY5") {
     return {
       counter: state.counter - 5,
     };
   }


  return state;
};

const store = configureStore({
  reducer: counterReducer,
});

export default store;
