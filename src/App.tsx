import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./components/theme";
import Routing from "./pages/Routing";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Routing></Routing>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
