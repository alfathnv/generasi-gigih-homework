import React from "react";
import Button from "../../../components/atoms/Button";
import { buildAuthLink } from "../../../assets/Spotify/auth";

const LoginButton = () => {
  return <Button url={buildAuthLink()} name="Login"></Button>;
};

export default LoginButton;
