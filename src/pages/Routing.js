import CreatePlaylist from "./CreatePlaylist";
import Track from "./Track";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { getAccessToken } from "../components/access";

const Routing = () => {
    const [token, setToken] = useState(getAccessToken);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (token === null) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [token]);

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
                        {isLogin ? <CreatePlaylist /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/">
                        <Track />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Routing;
