const { createStore } = Redux;

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const step =
        typeof action.step === "number" ? action.step : Number(action.step);
      return { count: state.count + step };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};

const store = createStore(counter);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  step: 5
});

store.dispatch({
  type: "DECREMENT"
});
