import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './Login'
import Navbar from './Navbar'
import Playlist from './Playlist'

const Routing = () => {
    const { isAuth } = useSelector((state) => state.playlist)
    return (
        <Router>
            <Navbar />
            <Switch>
                {console.log(isAuth)}
                <Route path="/createplaylist">
                    {isAuth ? <Playlist /> : <Redirect to="/" />}
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routing
