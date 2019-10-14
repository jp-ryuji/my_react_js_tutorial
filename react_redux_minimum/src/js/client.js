import { applyMiddleware, createStore } from "redux";

const reducer = (state={}, action) => {
  return state;
};

const middleware = applyMiddleware();
const store = createStore(reducer, middleware);

store.dispatch({type: "FOO"});