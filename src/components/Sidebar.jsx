import { Box, Typography } from '@mui/material'


function Sidebar() {
  return (
    <Box 
      bgcolor="teal" 
      flex={1} 
      p={2}
      sx={{display: {xs: "none", sm: "block"}}}
    >
      <Typography variant='h4'>Sidebar</Typography>
    </Box>
  )
}

export default Sidebar