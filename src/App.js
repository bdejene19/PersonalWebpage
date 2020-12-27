import React from 'react';
import './App.css';
import { CoverPage, BubblesContainer, Bubbles, JourneyDiv, ProjectsWrapper, PageLayout} from './components/styledcomponents/styledComponents';
import Intro from './components/functionalComponents/Intro';
import ContactInfoDrawer from './components/functionalComponents/ContactInfoDrawer';
import { Typography } from '@material-ui/core';
import ProjectCard from './components/functionalComponents/ProjectCard';
import { ModalBoxContent } from './components/functionalComponents/ModalBoxContent';
import SkillsWrapper from './components/functionalComponents/SkillsWrapper';
import ProgressChart from './components/functionalComponents/ProgressChart';

import './index.css'

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
      <header>
        <nav>
          <ContactInfoDrawer>
          </ContactInfoDrawer>
        </nav>
      </header>

      <main>
        <article>
          <section>
            <CoverPage>
              <BubblesContainer>
                <Bubbles src={process.env.PUBLIC_URL + '/bubble.png'} alt="bubbles"></Bubbles>        
                <Bubbles src={process.env.PUBLIC_URL + '/bubble.png'} alt="bubbles"></Bubbles>        
                <Bubbles src={process.env.PUBLIC_URL + '/bubble.png'} alt="bubbles"></Bubbles>        
                <Bubbles src={process.env.PUBLIC_URL + '/bubble.png'} alt="bubbles"></Bubbles>        
                <Bubbles src={process.env.PUBLIC_URL + '/bubble.png'} alt="bubbles"></Bubbles>        
                <Bubbles src={process.env.PUBLIC_URL + '/bubble.png'} alt="bubbles"></Bubbles>        
              </BubblesContainer>  
              <Intro></Intro>
              <ModalBoxContent></ModalBoxContent>
            </CoverPage>
          </section>
        </article>
        
        <article>
          <section>
            <JourneyDiv id="my-journey">
              
              <ProgressChart></ProgressChart>

              <div>
                {/* <img src={process.env.PUBLIC_URL + "/roadmap.png"} alt="roadmap"></img> */}
              </div>
            </JourneyDiv>

          </section>
        </article>
              
        <article>
          <ProjectsWrapper>
            <Typography variant="h3" id='projects'>Personal projects</Typography>      
            <section> 
              <ProjectCard 
              projectTitle='Digital Marketing Landing-Page' 
              skillsInvolved={LandingPageSkills}
              idValue='landing-page'
              projectGif='/dmpagegif.mp4'
              projDescrip='Created landing-page clone of a digital marketing, making it fully responsive to be viewable on all monitors'
              skillsLearned={NewLandingPageSkills}
              improveNotes={LandingPageImprovements}
              gitLink='https://github.com/bdejene19/DigitalMarketingLandPage'
              ></ProjectCard>
            </section>
          
            <section>
              <ProjectCard
                projectTitle='Movie Pop App'
                skillsInvolved={MoviePopSkills}
                idValue='movie-app'
                projectGif='movieappgif.mp4'
                projDescrip='Built own API for server using Express.js as backend, and persisted users using MongoDb. Movie/show data fetched from TMDb API.'
                skillsLearned={newMoviePopSkills}
                improveNotes={moviePopImprovements}
                gitLink='https://github.com/bdejene19/MovieApp'
              ></ProjectCard>
            </section>

            <section>
              <ProjectCard
                projectTitle="Arsenal Soccer Fans Page"
                skillsInvolved={ArsenalFansSkills}
                idValue='arsenal-fanpage'
                projectGif='arsenalfansgif.mp4'
                projDescrip="My first front-end project: a single-page app meant to showcase the past, present and future of the soccer club, Arsenal. Is a static HTML site, however, has dynanism through state management."
                skillsLearned={newArsenalSkills}
                improveNotes={arsenalImprovements}
                gitLink='https://github.com/bdejene19/ArsenalSoccerFansPage'
              ></ProjectCard>
            </section>   
          </ProjectsWrapper>
        </article>
      </main>

      <footer>
        <br></br>
        <br></br>
        <br></br>

        <SkillsWrapper></SkillsWrapper>
      </footer>
    </PageLayout>
  );
}

export default App;
