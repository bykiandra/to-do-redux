import {
  Button,
  Divider,
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
  Spacer,
} from '@chakra-ui/react'
import { useState } from 'react'
import store from '../app/store'

import Categories from '../features/categories/Categories'

const ActionButtons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [input, setInput] = useState<string>('')
  const [category, setCategory] = useState<Category>({
    name: 'None',
    color: 'gray',
  })

  const handleInputChange: HandleChange = (e) => {
    setInput(e.target.value)
  }

  const handleCategoryChange: HandleChange = (e) => {
    setCategory(e)
  }

  const handleSubmit: HandleSubmit = () => {
    if (input) {
      const newTodo = {
        type: 'todos/addTodo',
        payload: {
          id: Date.now(),
          text: input,
          category: category,
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
        <Divider orientation='vertical' mr={2} />
        <Categories
          title='Filter by category'
          showAll={true}
          handleCategoryChange={handleCategoryChange}
        />
      </InputGroup>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
            <Categories
              title='Select a category'
              showAll={false}
              handleCategoryChange={handleCategoryChange}
            />
            <Spacer />
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
