import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../interfaces/Todo'

// Define a type for the slice state
interface TodoState {
  todos: Todo[]
}

// Define the initial state using that type
const initialState: TodoState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [action.payload, ...state.todos]
    },
    deleteTodos: (state, action: PayloadAction<string[]>) => {
      const filteredTodos = state.todos.filter(todo => {
        return !action.payload.includes(todo.id)
      })
      state.todos = filteredTodos
    }
  }
})

export const { addNewTodo, deleteTodos } = todoSlice.actions
export default todoSlice.reducer
