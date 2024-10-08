import { 
    Typography,
    Card,
    Avatar,
    CardContent,
    CardHeader,
    CardActions,
    CardMedia,
    IconButton,
    Checkbox 
  } from '@mui/material'
import {
Favorite,
MoreVert,
Share,
FavoriteBorder
} from "@mui/icons-material"
import imageFood from "../assets/th.jpeg"
function Post() {
    return (
       
        <Card sx={{margin:5}}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVert />
                </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
            />
            <CardMedia
            component="img"
            height="20%"
            image={imageFood}
            alt="Paella dish"
            />
            <CardContent>
            <Typography sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} color='error' checkedIcon={<Favorite />}/>
            </IconButton>
            <IconButton aria-label="share">
                <Share />
            </IconButton>
            
            </CardActions>
        </Card>
        
        )
}

export default Post