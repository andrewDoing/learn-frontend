import React, {  useEffect, useState } from 'react'
import { v1 as uuidv1 } from 'uuid'
import { TodoInput } from '../components/TodoInput'
import { TodoItem } from '../components/TodoItem'
import { Todo } from '../interfaces/Todo'
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addNewTodo, deleteTodos } from '../redux/todo/todoSlice'
import './styles.css'

interface RemovalObject { [key: string]: boolean }

const ReduxTodo = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todo.todos)

  const [isTodosToRemove, setIsTodosToRemove] = useState(false)
  const [removalObject, updateRemovalObject] = useState<RemovalObject>({})
  const [text, onChangeText] = useState<string>('')
  

  const addTodo = (text: string) => {
    const todoId = uuidv1().toString()
    const todo: Todo = {
      id: todoId,
      text
    }
    dispatch(addNewTodo(todo))
    clearText()
  }

  const toggleItemInRemoveCandidate = (id: string) => {
    const currentStatus = removalObject[id] || false
    updateRemovalObject(previousRemovalObject => ({
      ...previousRemovalObject,
      [id]: !currentStatus,
    }))
  }

  const removeTodos = (removalObject: RemovalObject) => {
    const todoIds = Object.keys(removalObject)
    const todoIdsToRemove = todoIds.filter(function(id) {
      return removalObject[id]
    })
    dispatch(deleteTodos(todoIdsToRemove))
  }

  useEffect(() => {
    const todoIds = Object.keys(removalObject)
    const todoIdsToRemove = todoIds.filter(function(id) {
      return removalObject[id]
    })
    setIsTodosToRemove(todoIdsToRemove.length > 0)
  }, [removalObject])

  const clearText = () => onChangeText('')

  return (
    <div className="container">
      <h3>
        You currently have {todos.length} Todo(s) outstanding
      </h3>
      <TodoInput
        text={text}
        onChangeText={(text: string) => onChangeText(text)}
        onTodoSave={() => addTodo(text)}
      />
      <button
        className="removeTodosButton"
        disabled={!isTodosToRemove}
        onClick={() => removeTodos(removalObject)}
      >
        Delete Selected Todos
      </button>
      <div>
        <ul className='todoListContainer'>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              removalCandidate={removalObject[todo.id] || false}
              text={todo.text}
              toggleItemInRemoveCandidate={() => toggleItemInRemoveCandidate(todo.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export { ReduxTodo }