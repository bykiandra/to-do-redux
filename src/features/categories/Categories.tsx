import { ChevronDownIcon, SmallAddIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
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
import { useSelector } from 'react-redux'
import store from '../../app/store'

import { selectCategories } from './categoriesSlice'

interface Props {
  title: string
  showAll: boolean
  handleCategoryChange: HandleChange
}

const Categories = ({ title, showAll, handleCategoryChange }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [visibleText, setVisibleText] = useState<string | string[]>(title)
  const [newCategoryName, setNewCategoryName] = useState<string>('')
  const [newCategoryColor, setNewCategoryColor] = useState<string>()

  const menuDefault = showAll ? 'All' : 'None'
  const colorDefault =
    newCategoryColor !== ''
      ? 'Colour'
      : newCategoryColor.charAt(0).toUpperCase() + newCategoryColor.slice(1)

  const handleChange: HandleChange = (e) => {
    setNewCategoryName(e.target.value)
  }

  const categories: Category[] = useSelector(selectCategories)

  const categoryList = categories.map((cat) => (
    <MenuItemOption key={cat.name} value={cat.name}>
      <Flex align='center'>
        <Box
          bgColor={cat.color + '.500'}
          borderRadius='lg'
          mr={2}
          w='1rem'
          h='1rem'
        />
        {cat.name}
      </Flex>
    </MenuItemOption>
  ))

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {visibleText}
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            defaultValue={menuDefault}
            onChange={(e) => {
              if (typeof e !== 'string') {
                e = e.join()
              }
              if (e !== 'New') {
                setVisibleText(e)
              }
              const selected = categories.filter(
                (category: Category) => category.name === e
              )
              handleCategoryChange(selected[0])
            }}
          >
            <MenuItemOption value={menuDefault}>
              <Flex align='center'>
                <Box mr={2} w='1rem' h='1rem' />
                {menuDefault}
              </Flex>
            </MenuItemOption>
            {categoryList}
            <MenuItemOption value='New' onClick={() => onOpen()}>
              <SmallAddIcon /> New Category
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              onChange={handleChange}
              placeholder='New category name'
              isRequired
            />
          </ModalBody>
          <ModalFooter>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {colorDefault}
              </MenuButton>
              <MenuList>
                <MenuOptionGroup
                  onChange={(e) => {
                    if (typeof e !== 'string') {
                      e = e.join()
                    }
                    setNewCategoryColor(e)
                  }}
                >
                  <MenuItemOption value='red'>
                    <Flex align='center'>
                      <Box
                        bgColor='red.500'
                        borderRadius='lg'
                        mr={2}
                        w='1rem'
                        h='1rem'
                      />
                      Red
                    </Flex>
                  </MenuItemOption>
                  <MenuItemOption value='orange'>
                    <Flex align='center'>
                      <Box
                        bgColor='orange.500'
                        borderRadius='lg'
                        mr={2}
                        w='1rem'
                        h='1rem'
                      />
                      Orange
                    </Flex>
                  </MenuItemOption>
                  <MenuItemOption value='yellow'>
                    <Flex align='center'>
                      <Box
                        bgColor='yellow.500'
                        borderRadius='lg'
                        mr={2}
                        w='1rem'
                        h='1rem'
                      />
                      Yellow
                    </Flex>
                  </MenuItemOption>
                  <MenuItemOption value='green'>
                    <Flex align='center'>
                      <Box
                        bgColor='green.500'
                        borderRadius='lg'
                        mr={2}
                        w='1rem'
                        h='1rem'
                      />
                      Green
                    </Flex>
                  </MenuItemOption>
                  <MenuItemOption value='teal'>
                    <Flex align='center'>
                      <Box
                        bgColor='teal.500'
                        borderRadius='lg'
                        mr={2}
                        w='1rem'
                        h='1rem'
                      />
                      Teal
                    </Flex>
                  </MenuItemOption>
                  <MenuItemOption value='blue'>
                    <Flex align='center'>
                      <Box
                        bgColor='blue.500'
                        borderRadius='lg'
                        mr={2}
                        w='1rem'
                        h='1rem'
                      />
                      Blue
                    </Flex>
                  </MenuItemOption>
                  <MenuItemOption value='cyan'>
                    <Flex align='center'>
                      <Box
                        bgColor='cyan.500'
                        borderRadius='lg'
                        mr={2}
                        w='1rem'
                        h='1rem'
                      />
                      Cyan
                    </Flex>
                  </MenuItemOption>
                  <MenuItemOption value='purple'>
                    <Flex align='center'>
                      <Box
                        bgColor='purple.500'
                        borderRadius='lg'
                        mr={2}
                        w='1rem'
                        h='1rem'
                      />
                      Purple
                    </Flex>
                  </MenuItemOption>
                  <MenuItemOption value='pink'>
                    <Flex align='center'>
                      <Box
                        bgColor='pink.500'
                        borderRadius='lg'
                        mr={2}
                        w='1rem'
                        h='1rem'
                      />
                      Pink
                    </Flex>
                  </MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
            <Spacer />
            <Button
              colorScheme='blue'
              variant='ghost'
              mr={3}
              onClick={() => {
                const newCat = {
                  type: 'categories/addCategory',
                  payload: {
                    name: newCategoryName,
                    color: newCategoryColor,
                  },
                }
                store.dispatch(newCat)
                onClose()
              }}
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

export default Categories
