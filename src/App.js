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
  let NewLandingPageSkills = ['Responsive web design - using styled components in particular', 'Power and flexibility of grid/flexbox combination'];
  let LandingPageImprovements = ['Learn how to use Figma editor/SVGs to give an even more modern look'];
  
  let MoviePopSkills = ['Express', 'MongoDB', 'JS', 'Handlebars'];
  let newMoviePopSkills = [ 'Server Side Rendering (SSR)', 'Non-relational Databases', 'Routing', 'CRUD API'];
  let moviePopImprovements = ['Add React: to make code component based', 'Add bcrypt/OAuth security measures', 'Use CSS-frameworks to "prettify" more'];
  
  let ArsenalFansSkills = ["React", 'HTML', "CSS", "JS"];
  let newArsenalSkills = ["React States", "React Life-Cycles", "DOM manipulation"]
  let arsenalImprovements = ['Fetch data from API', 'Add grid/flexbox layout for consistency/efficiency']
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
          projDescrip='Created landing-page clone of a digital marketing, making it fully responsive to be viewable on all monitors'
          skillsLearned={NewLandingPageSkills}
          improveNotes={LandingPageImprovements}
          gitLink='https://github.com/bdejene19/DigitalMarketingLandPage'
          ></ProjectCard>
        <ProjectCard
          projectTitle='Movie Pop App'
          skillsInvolved={MoviePopSkills}
          idValue='movie-app'
          projDescrip='Built own API for server using Express.js as backend, and persisted users using MongoDb. Movie/show data fetched from TMDb API.'
          skillsLearned={newMoviePopSkills}
          improveNotes={moviePopImprovements}
          gitLink='https://github.com/bdejene19/MovieApp'
        ></ProjectCard>
        <ProjectCard
          projectTitle="Arsenal Soccer Fans Page"
          skillsInvolved={ArsenalFansSkills}
          idValue='arsenal-fanpage'
          projDescrip="My first front-end project: a single-page app meant to showcase the past, present and future of the soccer club, Arsenal. Is a static HTML site, however, has dynanism through state management."
          skillsLearned={newArsenalSkills}
          improveNotes={arsenalImprovements}
          gitLink='https://github.com/bdejene19/ArsenalSoccerFansPage'
        ></ProjectCard>
      </ProjectsWrapper>
    </PageLayout>
  );
}

export default App;
