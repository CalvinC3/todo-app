import { createStore, action, thunk } from 'easy-peasy';

const store = createStore({
  todos: {
    data: [],
    status: "NO_ACTION"
  },
  setTodo: action((state, payload) => {
    state.todos = payload
  }),
  addTodo: action((state, payload) => {
    state.todos.status = "PENDING"
    state.todos.data.push(payload);
    state.todos.status = "FULFILLED"
    localStorage.setItem("todo", JSON.stringify(state.todos))
  }),
  getTodo: action((state, payload) => {
    state.todos.status = "PENDING"
    const storage = JSON.parse(localStorage.getItem("todo") || [])
    state.todos.data.push(storage);
    state.todos.status = "FULFILLED"
  })
});

export default store;