import React from 'react';
import './App.css';
import { CoverPage, BubblesContainer, Bubbles, JourneyDiv, ProjectsWrapper, PageLayout} from './components/styledcomponents/styledComponents';
import Intro from './components/functionalComponents/functionalComponents';
import ContactInfoDrawer from './components/functionalComponents/ContactInfoDrawer';
import { Typography } from '@material-ui/core';
import ProjectCard from './components/functionalComponents/ProjectCard';
import { ModalBoxContent } from './components/functionalComponents/ModalBoxContent';
import SkillsWrapper from './components/functionalComponents/SkillsWrapper';


function App() {
  let LandingPageSkills = ['React', 'Material-UI','Responsive Design'];
  let MoviePopSkills = ['Express', 'MongoDB', 'JS', 'Handlebars'];
  let ArsenalFansSkills = ["React", 'HTML', "CSS", "JS"];
  return (
    <PageLayout>
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
        <ModalBoxContent></ModalBoxContent>
        
      </CoverPage>
      
      <JourneyDiv id="my-journey">
        <SkillsWrapper></SkillsWrapper>

        <div>
          <img src="/roadmap.png" alt="roadmap"></img>
        </div>
      </JourneyDiv>      

      <Typography variant="h3" color="primary" id='projects'>Personal projects</Typography>      
      <ProjectsWrapper>
        <ProjectCard 
          projectTitle='Digital Marketing Landing-Page' 
          projectGif='/bubble.png'
          skillsInvolved={LandingPageSkills}
          idValue='landing-page'
          ></ProjectCard>
        <ProjectCard
          projectTitle='Movie Pop App'
          skillsInvolved={MoviePopSkills}
          idValue='movie-app'
        ></ProjectCard>
        <ProjectCard
          projectTitle="Arsenal Soccer Fans Page"
          skillsInvolved={ArsenalFansSkills}
          idValue='arsenal-fanpage'
        ></ProjectCard>
      </ProjectsWrapper>
    </PageLayout>
  );
}

export default App;
