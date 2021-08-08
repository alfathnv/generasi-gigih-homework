import React from "react";
import { Link } from "@chakra-ui/react";

interface Props {
  text: string;
  url: string;
}

const LoginButton: React.FC<Props> = ({ text, url }) => {
  return (
    <Link
      href={url}
      bg="#1d1d1d"
      color="white"
      fontSize="2.5vh"
      p="15px 30px"
      borderRadius="10px"
      transition="all 0.25s"
      _hover={{ bg: "#ff0266", color: "#121212" }}
    >
      {text}
    </Link>
  );
};

export default LoginButton;
