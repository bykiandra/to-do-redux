import { Badge, Checkbox, Flex, Spacer } from '@chakra-ui/react'

import store from '../../app/store'

interface Props {
  todo: Todo
}

const TodoItem = ({ todo }: Props) => {
  return (
    <Flex
      bgColor='gray.50'
      w='100%'
      p={4}
      borderRadius='lg'
      _hover={{ bgColor: 'gray.100' }}
      onClick={() => store.dispatch({ type: 'todos/onToggle', payload: todo })}
    >
      <Checkbox
        isChecked={todo.isComplete}
        onFocus={() =>
          store.dispatch({ type: 'todos/onToggle', payload: todo })
        }
      >
        {todo.text}
      </Checkbox>
      <Spacer />
      <Badge
        colorScheme={todo.category.color}
        variant='solid'
        h='1.2rem'
        borderRadius='md'
        mt={1}
      >
        {todo.category.name}
      </Badge>
    </Flex>
  )
}

export default TodoItem
