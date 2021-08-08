import React from "react";
import { Input, Flex } from "@chakra-ui/react";

interface Props {
  handle: (e: any) => void;
}

const Search: React.FC<Props> = ({ handle }) => {
  return (
    <form onSubmit={handle}>
      <Flex alignItems="center" justifyContent="center">
        <Input
          name="query"
          variant="flushed"
          placeholder="Search..."
          p="20px"
          width="30%"
          mt="40px"
        ></Input>
      </Flex>
    </form>
  );
};

export default Search;
