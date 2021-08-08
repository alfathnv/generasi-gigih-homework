import { useState } from "react";
import { createPlaylist } from "../assets/spotify";
import Modal from "./Modal";
import { useAppSelector } from "../redux/hooks";
import { Box, Button } from "@chakra-ui/react";

const CreatePlaylist = () => {
  const { token, tracks } = useAppSelector((state) => state.playlist);
  const [isOpen, setIsOpen] = useState(false);
  let showButton;

  if (tracks.length !== 0) {
    showButton = (
      <Button
        onClick={() => setIsOpen(true)}
        position="fixed"
        bottom="50px"
        right="50px"
        bg="#ff0266"
        color="white"
        d="inline-block"
        fontSize="20px"
        size="lg"
        cursor="pointer"
        opacity="0.8"
        transition="all 0.25"
        borderRadius="10px"
        _hover={{ opacity: 1 }}
      >
        Create
      </Button>
    );
  }

  const handleCreate = (e: any) => {
    console.log(e.target.title.value);
    console.log(e.target.desc.value);
    e.preventDefault();
    const request: { name: string; description: string; public: boolean } = {
      name: e.target.title.value,
      description: e.target.desc.value,
      public: false,
    };
    if (request.name !== "" && request.description !== "") {
      createPlaylist(token, tracks, request);
      setIsOpen(false);
    } else {
      alert("Masukan Title dan Deskripsi");
    }
  };
  return (
    <Box>
      {showButton}
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onCreate={handleCreate}
      ></Modal>
    </Box>
  );
};

export default CreatePlaylist;
