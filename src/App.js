import Login from './components/Login'
import Playlist from './components/Playlist'
function App() {
    let page
    console.log(window.location.href)
    if (window.location.href === 'http://localhost:3000/') {
        page = <Login />
    } else {
        page = <Playlist />
    }
    return <div>{page}</div>
}

export default App
