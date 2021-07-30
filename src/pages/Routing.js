import Login from './Login'
import Track from './Track'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom'
import { useState, useEffect } from 'react'

const Routing = () => {
    const [isLogin, setIsLogin] = useState(false)

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/createplaylist">Create Playlist</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/createplaylist">
                        <Track />
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routing
