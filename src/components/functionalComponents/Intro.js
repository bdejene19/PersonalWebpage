import React from 'react'
import styled from 'styled-components'
import {Typography, createMuiTheme, ThemeProvider, Button} from '@material-ui/core'

const IntroDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding-left: 10vw;
    padding-right: 10vw;  

    .myName {
        grid-column: 1/3;
        text-align: left;
        grid-row: 1;
    }

    .coverPage-descrip {
        grid-column: 1/4;
        grid-row: 2;
        text-align: center;
    }

    .btns-coverPage {
        display: flex;
        grid-column: 2;
        grid-row: 3;
        .cover-btn {
            width: 15vw;
            margin-left: 5vw;
            margin-right: 5vw;
            color: white;
        }
    }
 

    .journey-btn {
        color: white;
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
                <Typography variant="h3" align="center" color="textSecondary" className='myName'>
                    Hi, I'm Bemnet Dejene  
                </Typography>

                <Typography variant="h4" align='center' color='textSecondary' className='coverPage-descrip'>a Software Developer specializing in React.js and Python</Typography> 

                <div className='btns-coverPage'>
                    <ThemeProvider theme={theme}>
                        <Button style={{backgroundColor: '#d84315'}} variant="contained" size="large" as="a" href="#my-journey" className="cover-btn"> See my journey </Button>
                        <Button color="primary" variant="contained" size="large" href="#projects" className='cover-btn'> View Projects </Button>
                    </ThemeProvider>

                </div>
                

            </IntroDiv>
            
        </div>
       


    )
}

export default Intro