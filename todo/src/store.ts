import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'

const saveToLocalStorage = (state: RootState) => {
const appState = JSON.stringify(state)
localStorage.setItem('appState', appState)
}

export const store = configureStore({
  reducer: {
    todoList: todoReducer
  },
})

store.subscribe(() => saveToLocalStorage(store.getState()))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch