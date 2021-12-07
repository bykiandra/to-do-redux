import {
  ChakraProvider,
  Container,
  Flex,
  Grid,
  Heading,
  Spacer,
  theme,
} from '@chakra-ui/react'

import ActionButtons from './components/ActionButtons'
import TodoList from './features/todos/TodoList'
import Footer from './components/Footer'

const App = () => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Grid minW='100vw' align='center' p={5}>
        <Container maxW='container.sm'>
          <Flex my={6}>
            <Heading w='100%'>To Do App</Heading>
            <Spacer />
            <ActionButtons />
          </Flex>
          <TodoList />
          <Footer />
        </Container>
      </Grid>
    </ChakraProvider>
  )
}

export default App
