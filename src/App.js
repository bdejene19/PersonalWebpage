import React from 'react';
import './App.css';
import { CoverPage, BubblesContainer, Bubbles, JourneyDiv } from './components/styledcomponents/styledComponents';
import Intro from './components/functionalComponents/functionalComponents';
import ContactInfoDrawer from './components/functionalComponents/ContactInfoDrawer';
import { Typography } from '@material-ui/core';


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
      </CoverPage>
      <JourneyDiv id="my-journey">
        <Typography variant="h3" color="primary">A closer look at my coding journey...</Typography>

      </JourneyDiv>      

      <JourneyDiv>
        <Typography variant="h3" color="primary">Personal projects</Typography>
      </JourneyDiv>
    </div>
  );
}

export default App;
