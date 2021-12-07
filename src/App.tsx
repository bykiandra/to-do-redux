import {
  ChakraProvider,
  Container,
  Grid,
  Heading,
  theme,
} from '@chakra-ui/react'

import ActionButtons from './components/ActionButtons'
import TodoList from './features/todos/TodoList'
import Footer from './components/Footer'

const App = () => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Grid minW='100vw' align='center' p={5}>
        <Heading>To Do App</Heading>
        <Container maxW='container.sm'>
          <ActionButtons />
          <TodoList />
          <Footer />
        </Container>
      </Grid>
    </ChakraProvider>
  )
}

export default App
