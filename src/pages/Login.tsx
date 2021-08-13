import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import LoginButton from "../components/LoginButton";
import { Flex } from "@chakra-ui/react";
import { authLink, getAccessToken } from "../assets/auth";
import { login } from "../redux/playlistSlice";

const Login = () => {
  const { isAuth, token } = useAppSelector((state) => state.playlist);
  const dispatch = useAppDispatch();
  let loginMessage;

  if (!isAuth) {
    loginMessage = <LoginButton url={authLink()} text="Login"></LoginButton>;
  } else {
    loginMessage = (
      <div style={{ fontSize: "30px", color: "white" }}>Already Login...</div>
    );
  }

  useEffect(() => {
    if (!isAuth && window.location.hash) {
      console.log("not auth");
      dispatch(login(getAccessToken()));
    }
  }, [dispatch, isAuth, token]);

  return (
    <Flex alignItems="center" justifyContent="center" minHeight="100vh">
      {loginMessage}
    </Flex>
  );
};

export default Login;
