import { configureStore } from '@reduxjs/toolkit'

import todoReducer, { TodoState } from './feature/todoList'
export interface RootState {
  todoList: TodoState
}

const saveToLocalStorage = (state: RootState) => {
  const appState = JSON.stringify(state)
  localStorage.setItem('appState', appState)
}

const loadFromLocalStorage = () => {
  const appState = localStorage.getItem('appState')
  if (!appState) return undefined
  return JSON.parse(appState)
}

export const store = configureStore({
  reducer: {
    todoList: todoReducer
  },
  preloadedState: loadFromLocalStorage() as RootState
})

store.subscribe(() => saveToLocalStorage(store.getState()))
// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch