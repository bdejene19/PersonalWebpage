import React from 'react'
import styled from 'styled-components'
import {Typography, createMuiTheme, ThemeProvider, Button} from '@material-ui/core'
import { red, lightGreen, orange } from '@material-ui/core/colors'

const IntroDiv = styled.div`
    height: fit-content;
    text-align: center;
    padding-left: 10vw;
    padding-right: 10vw;  

    .button {
        margin-right: 5vw;
        margin-left: 5vw;
    }
`

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: orange,
        background: lightGreen
    },
});

function Intro() {

    return (
        <div>
            <IntroDiv>
                <Typography variant="h3" align="center" color="textSecondary" >
                    Hi, I'm Bemnet Dejene - a front-end software developer who's primary focus is in React JS. 
                </Typography> 

                <br></br>

                <ThemeProvider theme={theme}>
                    
                   <Button color="primary" variant="outlined" size="large" as="a" href="#projects" className="button"> View Projects </Button>
                   <Button color="secondary" variant="outlined" size="large" as="a" href="#my-journey" className="button"> See my journey </Button>
                </ThemeProvider>

            </IntroDiv>
            
        </div>
       


    )
}

export default Intro