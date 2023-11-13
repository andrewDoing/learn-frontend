import React from 'react'
import './styles.css'

interface TodoItemProps {
  removalCandidate: boolean
  text: string

  toggleItemInRemoveCandidate: () => void
}

const TodoItem = (props: TodoItemProps) => {
  let itemContainerClasses = props.removalCandidate ? 'todoItemContainerDeleteCandidate' : ''
  itemContainerClasses = `todoItemContainer ${itemContainerClasses}`.trim()
  return (
    <li className='todoListItemContainer'>
      <button
        className='todoItemButtonContainer'
        onClick={props.toggleItemInRemoveCandidate}
      >
        <div className={itemContainerClasses}>
          <p className='todoItemText'>{props.text}</p>
        </div>
      </button>
    </li>
  )
}

export { TodoItem }