import { 
        Box, 
        Typography,
        AvatarGroup,
        Avatar,
        ImageList,
        ImageListItem,
        List,
        ListItem,
        Divider,
        ListItemAvatar,
        ListItemText
      } from '@mui/material'
import React from 'react' 
import person1 from '../assets/th (1).jpeg'
import person2 from '../assets/th (2).jpeg'
import person3 from '../assets/th (3).jpeg'
import person4 from '../assets/th (4).jpeg'
import person5 from '../assets/th (5).jpeg'
import person6 from '../assets/th (6).jpeg'
function Rightbar() {
  return (
    <Box 
      flex={2} 
      p={2}
      sx={{display: {xs: "none", sm: "block"}}}
    >
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>

        <AvatarGroup max={30}>
          <Avatar alt="Remy Sharp" src={person1} />
          <Avatar alt="Travis Howard" src={person2} />
          <Avatar alt="Cindy Baker" src={person3} />
          <Avatar alt="Agnes Walker" src={person4} />
          <Avatar alt="Trevor Henderson" src={person5} />
          <Avatar alt="Trevor Henderson" src={person6} />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              srcSet={`w=161&fit=crop&auto=format&dpr=2 2x`}
              src={person1}
              alt='person'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              srcSet={`w=161&fit=crop&auto=format&dpr=2 2x`}
              src={person2}
              alt='person'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              srcSet={`w=161&fit=crop&auto=format&dpr=2 2x`}
              src={person3}
              alt='person'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              srcSet={`w=161&fit=crop&auto=format&dpr=2 2x`}
              src={person4}
              alt='person'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              srcSet={`w=161&fit=crop&auto=format&dpr=2 2x`}
              src={person5}
              alt='person'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              srcSet={`w=161&fit=crop&auto=format&dpr=2 2x`}
              src={person6}
              alt='person'
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={person1} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src={person2} />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: 'text.primary', display: 'inline' }}
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={person3} />
            </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar