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
import styles from './pages.module.css'

const Routing = () => {
    const { isAuth } = useSelector((state) => state.playlist)
    return (
        <div className={styles.container}>
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
        </div>
    )
}

export default Routing
