import { Box, Typography } from '@mui/material'

function Rightbar() {
  return (
    <Box 
      bgcolor="skyblue" 
      flex={2} 
      p={2}
      sx={{display: {xs: "none", sm: "block"}}}
    >
      <Typography variant='h4'>Rightbar</Typography>
    </Box>
  )
}

export default Rightbar