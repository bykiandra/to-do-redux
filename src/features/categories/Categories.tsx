import { ChevronDownIcon, SmallAddIcon } from "@chakra-ui/icons"
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

const Categories = () => {
  return (
    <Menu>
      <MenuButton as={Button} w='14rem' rightIcon={<ChevronDownIcon />}>
        Categories
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Box mr={2} w='1rem' h='1rem' />
          All
        </MenuItem>
        <MenuItem>
          <Box
            bgColor='blue.500'
            borderRadius='lg'
            mr={2}
            w='1rem'
            h='1rem'
          />
          Home
        </MenuItem>
        <MenuItem>
          <Box
            bgColor='teal.500'
            borderRadius='lg'
            mr={2}
            w='1rem'
            h='1rem'
          />
          Work
        </MenuItem>
        <MenuItem>
          <SmallAddIcon /> New Category
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default Categories