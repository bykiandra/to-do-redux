import { Divider, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer>
      <Divider mt={4} mb={2} />
      <Text fontSize='sm'>
        Built using{' '}
        <Link href='https://reactjs.org/' color='blue.500' isExternal>
          React
        </Link>{' '}
        and{' '}
        <Link href='https://react-redux.js.org/' color='blue.500' isExternal>
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
    </footer>
  )
}

export default Footer
