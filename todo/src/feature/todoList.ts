import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../models/todo-item'

export interface TodoState {
  todos: ToDo[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action) => {
      const newToDo: ToDo = {
        id: state.todos.length,
        text: action.payload,
        isDone: false
    }
    state.todos = [...state.todos, newToDo]
  
      
    },
    updateAction: (state) => {
      
    },
    deleteAction: (state, action: PayloadAction<number>) => {
      
    },
  },
})


export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer