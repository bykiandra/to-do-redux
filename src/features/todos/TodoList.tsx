import { VStack } from '@chakra-ui/react'

import TodoItem from './TodoItem'

const TodoList = () => {
  const initialList: Todo[] = [
    {
      id: 23194576,
      text: 'Finish big project',
      category: {
        name: 'Work',
        color: 'teal'
      },
      isComplete: false
    },
    {
      id: 49376947,
      text: 'Prepare for meeting',
      category: {
        name: 'Work',
        color: 'teal'
      },
      isComplete: false
    },
    {
      id: 95047197,
      text: 'Buy milk',
      category: {
        name: 'Home',
        color: 'blue'
      },
      isComplete: false
    }
  ]

  return (
    <VStack>
      {initialList.map(todo => <TodoItem todo={todo} />)}
    </VStack>
  )
}

export default TodoList
