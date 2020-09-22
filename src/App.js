import React from 'react';
import './App.css';
import { CoverPage, BubblesContainer, Bubbles, JourneyDiv } from './components/styledcomponents/styledComponents';
import Intro from './components/functionalComponents/functionalComponents';
import ContactInfoDrawer from './components/functionalComponents/ContactInfoDrawer';
import { Typography } from '@material-ui/core';
import styled from 'styled-components'

const ModalBackground = styled.div`
  display: none;
  position: fixed;
  overflow: auto;
  width: 50%; 
  height: 50%;
  transform: translate(50%, -60%);
  border: solid lightskyblue 10px; 
  border-radius: 2.5%;
  margin: 0;
  padding: 0;
  background: lightskyblue;
`;

const ModalContent = styled.div`
  width: 100%;
  color: white;

  div {
        background: lightskyblue;
        color: whitesmoke;
    }

    .passion-content {
      padding: 5%;
      background: whitesmoke;
      color: black;
      height: 70%;
      width: 100%;
    }
`;

const CloseButton = styled.span`
  font-size: 28px;
  float: right;
  height: 10vh;
  margin: 0;
  padding: 0;
  transform: translate(-2vw, -1.5vh);

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;



function App() {

  return (
    <div className="App">
      <ContactInfoDrawer></ContactInfoDrawer>

      <CoverPage>
        <BubblesContainer>
          <Bubbles src="/bubble.png" alt="bubbles"></Bubbles>        
          <Bubbles src="/bubble.png" alt="bubbles"></Bubbles>        
          <Bubbles src="/bubble.png" alt="bubbles"></Bubbles>        
          <Bubbles src="/bubble.png" alt="bubbles"></Bubbles>        
          <Bubbles src="/bubble.png" alt="bubbles"></Bubbles>        
          <Bubbles src="/bubble.png" alt="bubbles"></Bubbles>        
        </BubblesContainer>
        
        <Intro></Intro>
        <ModalBackground id="modal">
          <ModalContent>
            <div>
              <CloseButton onClick={() => document.getElementById("modal").style.display = "none"}>&times;</CloseButton>
             <i><h2>Why I chose coding</h2></i> 
            </div>
            <div className="passion-content">
              <p>From the moment I hit 'run program', I felt an immediate strike in balance between creativity and logistics. An algorithm requires logic, however, the optimal solution often takes lots of creativity.</p>

              <p>From a young age, there has always been an internal power struggle between the logistic and creative aspects of my brain. The result of the two is man who plays piano, self teaches himself guitar, and a Double Major in Medical Sciences from the University of Western Ontario (UWO). I felt fulfillment, but didnt have happiness. This all changed from my first "hello world" algorithm.</p>

            </div>
          </ModalContent>
      </ModalBackground>
      </CoverPage>

      <JourneyDiv id="my-journey">
        <Typography variant="h3" color="primary">A closer look at my coding journey...</Typography>
        <div>
          <img src="/roadmap.png" alt="roadmap"></img>

        </div>
      </JourneyDiv>      


      <JourneyDiv>
        <Typography variant="h3" color="primary">Personal projects</Typography>
      </JourneyDiv>
    </div>
  );
}

export default App;
