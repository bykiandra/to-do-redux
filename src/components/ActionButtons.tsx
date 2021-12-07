import {
  Button,
  Divider,
  Input,
  InputGroup,
} from '@chakra-ui/react'

import Categories from '../features/categories/Categories'

const ActionButtons = () => {
  return (
    <InputGroup h='2.5rem' my={6}>
      <Input />
      <Button w='6rem' mx={2}>
        Add
      </Button>
      <Divider orientation='vertical' mr={2} />
      <Categories />
    </InputGroup>
  )
}

export default ActionButtons
