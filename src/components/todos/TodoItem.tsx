import { EditIcon, SmallCloseIcon } from '@chakra-ui/icons'
import {
  Button,
  Checkbox,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spacer,
  useDisclosure,
  Input,
} from '@chakra-ui/react'
import { useState } from 'react'

import store from '../../app/store'

interface Props {
  todo: Todo
}

const TodoItem = ({ todo }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [input, setInput] = useState<string>('')

  const handleInputChange: HandleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <>
      <Flex
        bgColor='gray.50'
        w='100%'
        p={4}
        borderRadius='lg'
        _hover={{ bgColor: 'gray.100' }}
        onClick={() =>
          store.dispatch({ type: 'todos/onToggle', payload: todo })
        }
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
        <Button
          colorScheme='blue'
          variant='link'
          h={6}
          onClick={() => {
            store.dispatch({ type: 'todos/onToggle', payload: todo })
            setInput(todo.text)
            onOpen()
          }}
        >
          <EditIcon h={4} />
        </Button>
        <Button
          colorScheme='red'
          variant='link'
          h={6}
          onClick={() =>
            store.dispatch({ type: 'todos/removeTodo', payload: todo })
          }
        >
          <SmallCloseIcon h={4} />
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit To Do</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={input} onChange={handleInputChange} />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='blue'
              variant='ghost'
              mr={3}
              onClick={() => {
                store.dispatch({
                  type: 'todos/editTodo',
                  payload: { id: todo.id, text: input },
                })
                setInput('')
                onClose()
              }}
            >
              Edit
            </Button>
            <Button colorScheme='red' variant='ghost' onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TodoItem
