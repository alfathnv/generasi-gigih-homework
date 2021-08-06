import ReactDom from 'react-dom'
import { Input, Textarea, Button } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#121212',
  color: 'black',
  padding: '30px',
  zIndex: 1000,
  width: '450px',
  height: '300px',
  borderRadius: '20px',
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 1000,
}

const Modal = ({ open, onCreate, onClose }) => {
  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
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
                minLength="10"
              />
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
              <Textarea
                name="desc"
                rows="4"
                minLength="20"
                focusBorderColor="#ff7597"
                color="white"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Flex align="center" justify="center">
                <button
                  style={{
                    fontWeight: 'bold',
                    marginTop: '15px',
                    color: '#ff7597',
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
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
