import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch(action.type) {
    case "INC":
      return state + action.payload;
    case "DEC":
      return state - action.payload;
  }
  return state;
}

// NOTE: createStore() 初期化
const store = createStore(reducer, 1);

// NOTE: store.subscribe() Storeが変更された時に呼ばれる
store.subscribe(() => {
  console.log("store changed", store.getState());
});

// NOTE: store.dispatch() StoreにAction を送信する
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 2});
store.dispatch({type: "INC", payload: 22});
store.dispatch({type: "INC", payload: 222});
store.dispatch({type: "DEC", payload: 1000});