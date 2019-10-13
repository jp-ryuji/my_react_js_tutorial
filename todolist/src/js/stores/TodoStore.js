import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Bills",
        complete: false
      }
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false
    });

    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    console.log("TodoStore received an action", action);

  }
}

// NOTE: シングルトンにするために new してから export している。
const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

// NOTE: dispatcher.dispatch を console から確認するためのテストコード
window.dispatcher = dispatcher;

export default todoStore;