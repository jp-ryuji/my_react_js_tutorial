import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch(action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
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
store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "DEC"});