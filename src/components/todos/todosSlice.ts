import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

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
    editTodo: (state, action) => {
      const todo = state.todos.find(item => item.id === action.payload.id)
      if (todo !== undefined) {
        const index = state.todos.indexOf(todo)
        state.todos[index] = action.payload
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    onToggle: (state, action) => {
      const todo = state.todos.find(item => item.id === action.payload.id)
      if (todo) {
        todo.isComplete = !todo.isComplete
      }
    }
  }
})

export const selectTodos = (state: RootState) => state.todos.todos
export default todosSlice.reducer