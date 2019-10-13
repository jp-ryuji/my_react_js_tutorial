import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
  /* TODO: */
}

// NOTE: シングルトンにするために new してから export している。
const todoStore = new TodoStore;

export default todoStore;