import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Grid,
  Heading,
  theme,
} from '@chakra-ui/react'

import ActionButtons from './components/ActionButtons'
import TodoList from './components/todos/TodoList'
import Footer from './components/Footer'

const App = () => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Grid minW='100vw' align='center' p={5}>
        <Container maxW='container.sm'>
          <Flex my={6}>
            <Heading w='100%'>To Do App</Heading>
            <Box>
              <ActionButtons />
            </Box>
          </Flex>
          <TodoList />
          <Footer />
        </Container>
      </Grid>
    </ChakraProvider>
  )
}

export default App
