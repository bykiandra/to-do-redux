import { Badge, Checkbox, Flex, Spacer } from '@chakra-ui/react'

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
    >
      <Checkbox isChecked={todo.isComplete}>{todo.text}</Checkbox>
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