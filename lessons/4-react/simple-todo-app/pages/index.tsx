import type { NextPage } from 'next'
import { useState } from 'react'
import { TodoItem } from '../interfaces/TodoItem'
import { v4 as uuid } from 'uuid'
import { TodoCard } from '../components/todoCard'

const Home: NextPage = () => {
  const [text, setText] = useState('')
  const [todoItems, setTodoItems] = useState<TodoItem[]>([])

  const addTodoItem = (text: string) => {
    const id = uuid()
    const todoItem: TodoItem = {
      id,
      text
    }

    setTodoItems(previousTodoItems => [todoItem, ...previousTodoItems])
    setText('')
  }

  return (
    <div>
      <input
        onChange={e => setText(e.target.value)}
        type="text"
        value={text}
      />
      <button onClick={() => addTodoItem(text)}>
        Add Todo
      </button>
      <div>
        {todoItems.map(todoItem => (
          <TodoCard text={todoItem.text} key={todoItem.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
