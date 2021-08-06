import store from './redux/store'
import { Provider } from 'react-redux'
import Routing from './pages/Routing'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

function App() {
  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
  // 3. extend the theme
  const theme = extendTheme({ config })
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Routing />
      </ChakraProvider>
    </Provider>
  )
}

export default App
