import { ChevronDownIcon, SmallAddIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  theme,
  VStack,
} from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Grid minW='100vw' align='center' p={5}>
        <Heading>To Do App</Heading>
        <Container maxW='container.sm'>
          <InputGroup h='2.5rem' my={6}>
            <Input />
            <Button w='6rem' mx={2}>
              Add
            </Button>
            <Divider orientation='vertical' mr={2} />
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
          </InputGroup>
          <VStack>
            <Flex
              bgColor='gray.50'
              w='100%'
              p={4}
              borderRadius='lg'
              _hover={{ bgColor: 'gray.100' }}
            >
              <Checkbox>Finish big project</Checkbox>
              <Spacer />
              <Badge
                colorScheme='teal'
                variant='solid'
                h='1.2rem'
                borderRadius='md'
                mt={1}
              >
                Work
              </Badge>
            </Flex>
            <Flex
              bgColor='gray.50'
              w='100%'
              p={4}
              borderRadius='lg'
              _hover={{ bgColor: 'gray.100' }}
            >
              <Checkbox>Prepare for meeting</Checkbox>
              <Spacer />
              <Badge
                colorScheme='teal'
                variant='solid'
                h='1.2rem'
                borderRadius='md'
                mt={1}
              >
                Work
              </Badge>
            </Flex>
            <Flex
              bgColor='gray.50'
              w='100%'
              p={4}
              borderRadius='lg'
              _hover={{ bgColor: 'gray.100' }}
            >
              <Checkbox>Buy milk</Checkbox>
              <Spacer />
              <Badge
                colorScheme='blue'
                variant='solid'
                h='1.2rem'
                borderRadius='md'
                mt={1}
              >
                Home
              </Badge>
            </Flex>
          </VStack>
          <Divider mt={4} mb={2} />
          <Text fontSize='sm'>
            Built using{' '}
            <Link href='https://reactjs.org/' color='blue.500' isExternal>
              React
            </Link>{' '}
            and{' '}
            <Link
              href='https://react-redux.js.org/'
              color='blue.500'
              isExternal
            >
              Redux
            </Link>
            .
          </Text>
          <Text fontSize='sm'>
            See the code on{' '}
            <Link
              href='https://github.com/crownedfoxes/to-do-redux'
              color='blue.500'
              isExternal
            >
              GitHub
            </Link>
            .
          </Text>
        </Container>
      </Grid>
    </ChakraProvider>
  )
}

export default App
