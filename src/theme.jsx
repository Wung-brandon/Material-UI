import { createTheme } from "@mui/material";
import { green, purple, red } from "@mui/material/colors";


export const theme = createTheme({
    palette:{
        primary:{
            main: "#00559a",
            light: "#003e7f",
        },
        secondary:{
            // main: "#cd5701",
            // light: "#ae3d00",
            main: purple[800],
            light: purple[500],
        },
        success:{
            main: green[900],
            light: green[500],
        },
        error:{
            main: red[800],
            light: red[200]
        }

    }
})