import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

interface props {
  name: string;
  url: string;
}

const UserProfile: React.FC<props> = ({ name, url }) => {
  return (
    <Box
      d="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      right="20px"
      top="20px"
      zIndex="1000"
      opacity="10%"
      cursor="default"
      transition="all .20s"
      _hover={{ opacity: "100%" }}
    >
      <Heading as="h5" size="sm" color="white">
        {name}
      </Heading>
      <Box
        ml="10px"
        w="75px"
        h="75px"
        position="relative"
        overflow="hidden"
        borderRadius="50%"
        border="4px solid #0d0d0d"
      >
        <Image
          src={url}
          d="inline"
          margin="0 auto"
          h="100%"
          width="auto"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default UserProfile;
