import { Fab, Tooltip, Modal, Box, styled, Avatar, Typography, TextField, Stack, Button, ButtonGroup } from "@mui/material"
import {Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange} from "@mui/icons-material"
import { useState } from "react"
import person1 from '../assets/th (1).jpeg'

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
})
function Add() {
    const [open, setOpen] = useState(false)

    function handleOpen(){
        setOpen(true)
    }
    function handleClose(){
        setOpen(false)
    }
  return (
    <>
     <Tooltip 
        onClick={handleOpen}
        title="Add Post"
        sx={{
            position: "fixed",
            bottom: 20,
            left: {xs: "calc(50% - 25px)", md:30},
            
        }}
    >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} p={3} borderRadius={5} bgcolor={"background.default"} color={'text.primary'}>
            <Typography color="gray" variant="h6" textAlign='center'>Create Post</Typography>
            <UserBox>
                <Avatar 
                    src={person1}
                    sx={{width:30, height:30}}
                />
                <Typography fontWeight={500} variant="span">John Doe</Typography>
            </UserBox>
            <TextField
                id="standard-multiline-static"
                sx={{width:'100%'}}
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
            />
            <Stack direction='row' gap={1} mt={2} mb={3}>
                <EmojiEmotions color="primary"/>
                <Image color='secondary' />
                <VideoCameraBack color='success' />
                <PersonAdd color='error' />
            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
                <Button>Post</Button>
                <Button sx={{width:'100px'}}><DateRange /></Button>
            </ButtonGroup>
        </Box>
    </Modal>
    
    </>
  )
}

export default Add