import ReactDom from "react-dom";
import { Box, Input, Textarea, Button } from "@chakra-ui/react";
import { Grid, GridItem, Flex } from "@chakra-ui/react";

const Modal = ({ open, onCreate, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <Box
        position="fixed"
        bg="rgba(0,0,0,.7)"
        zIndex="1000"
        top="0"
        right="0"
        bottom="0"
        left="0"
      ></Box>
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg="#121212"
        color="black"
        p="30px"
        zIndex="1000"
        width="450px"
        height="300px"
        borderRadius="20px"
      >
        <form onSubmit={onCreate}>
          <Grid
            h="200px"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={1} colSpan={2}>
              <Input
                name="title"
                placeholder="Title"
                size="lg"
                focusBorderColor="#ff7597"
                color="white"
                minLength={10}
              />
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
              <Textarea
                name="desc"
                rows={4}
                minLength={20}
                focusBorderColor="#ff7597"
                color="white"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Flex align="center" justify="center">
                <button
                  style={{
                    fontWeight: "bold",
                    marginTop: "15px",
                    color: "#ff7597",
                  }}
                >
                  Submit
                </button>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex align="center" justify="center">
                <Button
                  mt="5px"
                  onClick={onClose}
                  color="#ff7597"
                  colorScheme="none"
                  variant="solid"
                >
                  Close
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </form>
      </Box>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
