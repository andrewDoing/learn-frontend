import React from "react"


interface TodoCardProps {
  text: string
}

const TodoCard = (props:TodoCardProps) => {
  const { text } = props

  return (
    <div>
      {text}
    </div>
  )
}

export { TodoCard }
