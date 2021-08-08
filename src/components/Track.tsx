import React from "react";
import { Heading, Box, Image } from "@chakra-ui/react";

interface Props {
  handle: () => void;
  url: string;
  name: string;
  artist: string;
  album: string;
  select: string;
}

const Track: React.FC<Props> = (props) => {
  return (
    <button onClick={props.handle}>
      <Box
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg={props.select}
        width="100%"
        height="350px"
        transition="all .1s"
        _hover={{ bg: "#0d0d0d" }}
        _active={{ bg: "#ff0266" }}
        borderRadius="20px"
      >
        <Image src={props.url} alt={props.name} boxSize="200px"></Image>
        <Box
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt="5px"
        >
          <Heading as="h1" size="md" color="#ff7597" pb="5px">
            {props.name}
          </Heading>
          <Heading as="h2" size="xs" color="white" opacity="87%" pb="5px">
            {props.artist}
          </Heading>
          <Heading as="h2" size="sm" color="#ff7597">
            {props.album}
          </Heading>
        </Box>
      </Box>
    </button>
  );
};

export default Track;
