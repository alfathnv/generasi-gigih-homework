import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Playlist from "./Playlist";
import Login from "./Login";

const Routing = () => {
  const isAuth = useAppSelector((state) => state.playlist.isAuth);
  return (
    <Router>
      <Grid templateColumns="78px 1fr" bg="#121212" minHeight="100vh">
        <GridItem>
          <Navbar></Navbar>
        </GridItem>
        <GridItem>
          <Switch>
            <Route path="/createplaylist">
              {isAuth ? <Playlist /> : <Redirect to="/" />}
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </GridItem>
      </Grid>
    </Router>
  );
};

export default Routing;
