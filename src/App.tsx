import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import './App.css'
import { ChakraProvider, Grid, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Grid minW='100vw' align='center' p={3}>
        <ColorModeSwitcher justifySelf='flex-end' />
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <Counter />
          </header>
        </div>
        </Grid>
    </ChakraProvider>
  )
}

export default App
