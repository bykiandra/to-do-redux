import { createStore, combineReducers } from 'redux'
import todosReducer from '../features/todos/todosSlice'
import categoriesReducer from '../features/categories/categoriesSlice'

const rootReducers = combineReducers({
  todos: todosReducer,
  categories: categoriesReducer
})

const saveToLocalStorage = (state: RootState) => {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('cf-todoReduxState', serialisedState)
  } catch(err) {
    console.log(err)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem('cf-todoReduxState')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch(err) {
    console.log(err)
    return undefined
  }
}

const store = createStore(rootReducers, loadFromLocalStorage())
store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>

export default store