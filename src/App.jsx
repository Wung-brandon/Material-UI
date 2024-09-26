
import './App.css'
import Button from '@mui/material/Button';
import { Typography, IconButton, styled, Fab } from '@mui/material';
import { DeleteOutlineRounded } from '@mui/icons-material';
import { Add, Edit } from '@mui/icons-material';
import { EditNoteOutlined, AddAPhotoOutlined, DeleteOutlineOutlined } from '@mui/icons-material';

function App() {
  
  const BlueButton = styled(Button)({
    backgroundColor:"skyblue", 
    color:"#888", 
    margin:5,
    '&:hover':{
      backgroundColor: 'lightblue'
    }
  })

  return (
    <>
    <Typography variant='h1'>hello world</Typography>
    <Button variant='text' color='primary' size='large' startIcon={<AddAPhotoOutlined />}>Text</Button>
    <Button startIcon={<DeleteOutlineRounded />} variant='contained' color='secondary'>contained</Button>
    <Button variant='outlined' color='error' endIcon={<EditNoteOutlined />}>outlined</Button>
    <IconButton size='large'>
      <DeleteOutlineOutlined color='error' />
    </IconButton>
    <Button color='success' variant='contained' startIcon={<Add />}>Add Post</Button>
    <Button color='primary' variant='contained' endIcon={<Edit />}>Edit Post</Button>
    <BlueButton variant='contained' color='otherColor'>My Unique Button</BlueButton>
    <BlueButton variant='text'>My Another Button</BlueButton>
    <Fab color='primary' aria-label='add'>
      <Add />
    </Fab>
    </>
  )
}

export default App
