import { configureStore } from '@reduxjs/toolkit'

import todoReducer, { TodoState } from './feature/todoList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'
export interface RootState {
  todoList: TodoState
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