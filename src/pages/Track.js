import React from "react";
import { auth } from "../components/auth";
import Search from "../components/Search";
import Login from "../components/Login";

const Track = () => {
    return (
        <div>
            <Login url={auth()} name="Login"></Login>
            <Search></Search>
        </div>
    );
};

export default Track;
