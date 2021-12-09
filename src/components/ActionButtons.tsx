import {
  Button,
  InputGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from '@chakra-ui/react'
import { useState } from 'react'
import store from '../app/store'

const ActionButtons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [input, setInput] = useState<string>('')

  const handleInputChange: HandleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit: HandleSubmit = () => {
    if (input) {
      const newTodo = {
        type: 'todos/addTodo',
        payload: {
          id: Date.now(),
          text: input,
          isComplete: false,
        },
      }
      store.dispatch(newTodo)
    }

    onClose()
  }

  return (
    <>
      <InputGroup h='2.5rem'>
        <Button w='6rem' mx={2} onClick={onOpen}>
          Add
        </Button>
      </InputGroup>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New To Do</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              onChange={(e) => {
                handleInputChange(e)
              }}
              placeholder='New to do text'
              isRequired
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='blue'
              variant='ghost'
              mr={3}
              onClick={() => handleSubmit()}
            >
              Add
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

export default ActionButtons
