import { createStore, action, thunk } from 'easy-peasy';

// easier and quicker implementation of redux using easy-peasy library
const store = createStore({
  todos: {
    data: [],
    status: "NO_ACTION"
  },

  setTodo: action((state, payload) => {
    state.todos = payload
    localStorage.setItem("todo", JSON.stringify(payload))
  }),

  addTodo: action((state, payload) => {
    state.todos.status = "PENDING"
    state.todos.data.push(payload);
    state.todos.status = "FULFILLED"
    localStorage.setItem("todo", JSON.stringify(state.todos))
  }),

  getTodo: action((state, payload) => {
    state.todos.status = "PENDING"
    const todo = JSON.parse(localStorage.getItem("todo") || [])
    state.todos.data.push(todo);
    state.todos.status = "FULFILLED"
  }),

  markComplete: thunk( async(actions, payload) => {
    const todo = JSON.parse(localStorage.getItem("todo") || [])
    const { id } = payload
    const newList = await todo?.data.map((obj) => {
      if (obj.id === id) {
        return { ...obj, status: "Completed"}
      }
      return obj
    })
    actions.setTodo({
      data: newList,
      status: "FULFILLED"
    })
  }),

  deleteItem: thunk (async (actions, payload) => {
    const todo = JSON.parse(localStorage.getItem("todo") || [])
    const { id } = payload
    const newList = await todo.data.filter((obj) => obj.id !== id)
    actions.setTodo({
      data: newList,
      status: "FULFILLED"
    })
  })
});

export default store;