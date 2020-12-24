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
        color: white;
        
    }

    .coverPage-descrip {
        grid-column: 1/4;
        grid-row: 2;
        text-align: center;
        padding-bottom: 1em;
        color: lightgrey;

    }

    .btns-coverPage {
        display: flex;
        grid-column: 2;
        grid-row: 3;
        height: 12.5vh;
        width: fit-content;


        .cover-btn {
            width: 15vw;
            height: 10vh;
            margin-left: 5vw;
            margin-right: 5vw;
            color: white;
        }
    }

    .journey-btn {
        color: white;
    }

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        height: 60vh;
        margin-top: -10vh;  

        .btns-coverPage {
            width: 100%;
            text-align: center;
            justify-content: center;
            
            .cover-btn {
                width: 25vw;
            
            }
        }
    }


    @media screen and (max-width: 550px) {

        .myName {
            font-size: 40px;
            width: max-content;
            padding-bottom: 2vh;
        }

        .coverPage-descrip {
            font-size: 28px;
            text-align: left;
            padding-bottom: 5vh;
        }

        .btns-coverPage {
            width: 100%;

            .cover-btn {
                width: 30vw;
            }
        }
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
                        <Button style={{backgroundColor: '#d84315'}} variant="contained" href="#my-journey" className="cover-btn">My Journey</Button>
                        <Button color="primary" variant="contained"  href="#projects" className='cover-btn'>Projects</Button>
                    </ThemeProvider>
                </div>
            </IntroDiv> 
        </div>
       


    )
}

export default Intro