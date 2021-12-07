import { VStack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import TodoItem from './TodoItem'

import { selectTodos } from './todosSlice'

const TodoList = () => {
  const todosList = useSelector(selectTodos)
  
  return (
    <VStack>
      {todosList.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </VStack>
  )
}

export default TodoList
