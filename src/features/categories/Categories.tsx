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
} from '@chakra-ui/react'
import { useState } from 'react'

interface Props {
  title: string
  showAll: boolean
}

const Categories = ({ title, showAll }: Props) => {
  const [visibleText, setVisibleText] = useState<string | string[]>(title)

  const menuDefault = showAll ? 'All' : 'None'

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {visibleText}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          defaultValue={menuDefault}
          onChange={(e) => setVisibleText(e)}
        >
          <MenuItemOption value={menuDefault}>
            <Flex align='center'>
              <Box mr={2} w='1rem' h='1rem' />
              {menuDefault}
            </Flex>
          </MenuItemOption>
          <MenuItemOption value='Home'>
            <Flex align='center'>
              <Box
                bgColor='blue.500'
                borderRadius='lg'
                mr={2}
                w='1rem'
                h='1rem'
              />
              Home
            </Flex>
          </MenuItemOption>
          <MenuItemOption value='Work'>
            <Flex align='center'>
              <Box
                bgColor='teal.500'
                borderRadius='lg'
                mr={2}
                w='1rem'
                h='1rem'
              />
              Work
            </Flex>
          </MenuItemOption>
          <MenuItemOption value='New'>
            <SmallAddIcon /> New Category
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

export default Categories
