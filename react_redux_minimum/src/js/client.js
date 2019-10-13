import { createStore } from "redux";

const reducer = () => {
  console.log("reducer has been called.");
}

// NOTE: createStore() 初期化
const store = createStore(reducer, 1);

// NOTE: store.subscribe() Storeが変更された時に呼ばれる
store.subscribe(() => {
  console.log("store changed", store.getState());
});

// NOTE: store.dispatch() StoreにAction を送信する
store.dispatch({type: "INC"});