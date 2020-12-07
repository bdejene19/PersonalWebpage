import React from 'react'
import styled from 'styled-components'
import {Typography, createMuiTheme, ThemeProvider, Button} from '@material-ui/core'

const IntroDiv = styled.div`
    height: fit-content;
    text-align: center;
    padding-left: 10vw;
    padding-right: 10vw;  

    .button {
        margin-right: 5vw;
        margin-left: 5vw;
    }
`;

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0d47a1',
        },
        secondary: {
            main: '#e65100'
        },
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
                    <Button color="secondary" variant="contained" size="large" as="a" href="#my-journey" className="button"> See my journey </Button>
                    <Button color="primary" variant="contained" size="large" as="a" href="#projects" className="button"> View Projects </Button>
                </ThemeProvider>

            </IntroDiv>
            
        </div>
       


    )
}

export default Intro