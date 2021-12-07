import { createSlice } from '@reduxjs/toolkit'

interface TodoSlice {
  todos: Todo[]
}

const initialState: TodoSlice = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.todos.filter(todo => todo.id !== action.payload.id)
    },
    onToggle: (state, action) => {
      const todo = state.todos.find(item => item.id === action.payload.id)
      if (todo) {
        todo.isComplete = !todo.isComplete
      }
    }
  }
})

export const { addTodo } = todosSlice.actions
export default todosSlice.reducer