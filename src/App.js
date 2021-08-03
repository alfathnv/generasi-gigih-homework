import store from './redux/store'
import { Provider } from 'react-redux'
import Routing from './pages/Routing'

function App() {
    return (
        <Provider store={store}>
            <Routing />
        </Provider>
    )
}

export default App
