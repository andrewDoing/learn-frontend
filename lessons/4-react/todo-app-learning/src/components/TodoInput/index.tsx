import React from 'react'
import './styles.css'

interface TodoInputProps {
  text: string

  onChangeText: (text: string) => void
  onTodoSave: () => void
}

const TodoInput = (props: TodoInputProps) => {
  return (
    <div className='todoContainer'>
      <input
        className='todoInput'
        onChange={e => props.onChangeText(e.target.value)}
        placeholder='Create New Todo'
        value={props.text}
      />
      <button
        className='todoButton'
        onClick={props.onTodoSave}
      >
        Save Todo
      </button>
    </div>
  )
}

export { TodoInput }