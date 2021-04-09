/**
 * This project is a personal portfolio showcasing my journey, skills and projects that I have independently built 
 * This app is made by Bemnet Dejene from ON, Canada using styled components, react, and JS
 * 
 * Purpose of project: to show employer my ability to work independently, learn without supervision and present professionalism
 * Portfolio only includes self-developed projects, without the use of following step-by-step tutorials online
 * To see all my progress, check my github: https://github.com/bdejene19?tab=repositories
 */


//  all imports required
import React from 'react';
import './App.css';
import { CoverPage, BubblesContainer, Bubbles, JourneyDiv, ProjectsWrapper, PageLayout, VerticalStepperContainer} from './components/styledcomponents/styledComponents';
import Intro from './components/functionalComponents/Intro';
import ContactInfoDrawer from './components/functionalComponents/ContactInfoDrawer';
import { createMuiTheme, Typography } from '@material-ui/core';
import ProjectCard from './components/functionalComponents/ProjectCard';
import { ModalBoxContent } from './components/functionalComponents/ModalBoxContent';
import SkillsWrapper from './components/functionalComponents/SkillsWrapper';
import ProgressChart from './components/functionalComponents/ProgressChart';
import {ThemeProvider} from '@material-ui/core'
import VerticalStepper from './components/functionalComponents/VerticalStepper'

import './index.css'

function App() {
  // Lists for sections of project cards to loop through => future reference might be easier to make an 
  let expconSkills = ['React', 'Material-UI', 'JS', 'CSS'];
  let newExpconSkills = ['Wireframe Implementation', 'React-router', 'Page layout design patterns'];
  let expconImprove = ['Responsive Design', 'Introduction of backend via Express.js or Django to process OAuth digital payments'];
  
  let studentTestSkills = ['React', 'CSS', 'JS'];
  let newStudentSkills = ['Search-Bar Filter', 'React Hooks', 'Hook Life-cycles']
  let studentImprovements = ['Tag-filter', 'Views based on authentication']

  let LandingPageSkills = ['React', 'Material-UI','Responsive Design'];
  let NewLandingPageSkills = ['Styled-components responsive design', 'Power and flexibility of grid/flexbox combination'];
  let LandingPageImprovements = ['Learn how to use Figma editor/SVGs for controlled styling', 'Audio or video background window effects'];
  
  let MoviePopSkills = ['Express', 'MongoDB', 'JS', 'Handlebars'];
  let newMoviePopSkills = [ 'Server Side Rendering (SSR)', 'Non-relational Databases', 'Routing', 'CRUD API'];
  let moviePopImprovements = ['Add React components', 'Add bcrypt/OAuth security measures', 'Use CSS-frameworks to "prettify"'];
  
  let ArsenalFansSkills = ["React", 'HTML', "CSS", "JS"];
  let newArsenalSkills = ["React States", "React Life-Cycles", "DOM manipulation"]
  let arsenalImprovements = ['Fetch data from API', 'Add grid/flexbox layout for consistency/efficiency']


  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Merriweather'
    }
  })
  return (
    // bring in ThemeProvider for material-ui style manipulation
    <ThemeProvider theme={theme}>
      <PageLayout>
        <header>
          {/* Nav bar with contact drawer component -> contains basic contact info and downloadab CV */}
          <nav>
            <ContactInfoDrawer>
            </ContactInfoDrawer>
          </nav>
        </header>

        <main>
          <article>
            {/* Landing-screen:
              - contains animations, introduction, and DOM manipulated modalbox from contact drawer "why programming" button 
              - intro component has scroll animation to journey and project sections 
              - 
            */}
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
          
          {/* Journey Section resembling progress as self-taught programmer
            - contains stepper with time lapses of skills acquired and projects built 
            - progress stepper is horizontal or vertical depending on screen max-widths
          */}
          <article>
            <section id="my-journey">
              <VerticalStepperContainer >
                <VerticalStepper></VerticalStepper>


              </VerticalStepperContainer>
              <JourneyDiv >
                <ProgressChart></ProgressChart>
              </JourneyDiv>

            </section>
          </article>

          {/* Projets section of portfolio
          - display set up in grid format
          - project cards contain titles, video and technologies used for each project built 
          - onClick, have card-flip animation that gives description, skills learned and improvements for each project
          */}
          <article>
            <ProjectsWrapper>
              <Typography variant="h3" id='projects'>Personal projects</Typography>       


              <section>
                <ProjectCard 
                  projectTitle="EXP|CON Concert"
                  skillsInvolved={expconSkills}
                  idValue='expcon-concert'
                  projectGif='EXP_CON.mp4'
                  projDescrip='Implemented UX wireframes and built multipage react desktop app, that acts as the frontline for ticket sales and digitally presents the concert experience.'
                  skillsLearned={newExpconSkills}
                  improveNotes={expconImprove}
                  gitLink='https://github.com/bdejene19/ConcertWebpage'
                  webLink='https://focused-heyrovsky-378c47.netlify.app/'
                  ></ProjectCard>
              </section>

              <section>
                <ProjectCard
                  projectTitle="Student Test Scores"
                  skillsInvolved={studentTestSkills}
                  idValue='student-scores'
                  projectGif='/studentScores.mp4'
                  projDescrip="Implement RESTful API call, presenting the data in an expandable view. Also provides ability to search by student name."
                  skillsLearned={newStudentSkills}
                  improveNotes={studentImprovements}
                  gitLink='https://github.com/bdejene19/SearchStudents-AddTags'
                  webLink='https://boring-banach-788d03.netlify.app/'
                ></ProjectCard>
              </section> 
              
                 
              <section>
                <ProjectCard 
                projectTitle='Digital Marketing Landing-Page' 
                skillsInvolved={LandingPageSkills}
                idValue='landing-page'
                projectGif='/dmpagegif.mp4'
                projDescrip='Created landing-page clone of a digital marketing agency, making it fully responsive to be viewable on all devices.'
                skillsLearned={NewLandingPageSkills}
                improveNotes={LandingPageImprovements}
                gitLink='https://github.com/bdejene19/DigitalMarketingLandPage'
                webLink='https://bdejene19.github.io/DigitalMarketingLandPage/'
                ></ProjectCard>
              </section>
            
              <section>
                <ProjectCard
                  projectTitle='Movie Pop App'
                  skillsInvolved={MoviePopSkills}
                  idValue='movie-app'
                  projectGif='movieappgif.mp4'
                  projDescrip='Built API using Express.js as backend, and persisted users via MongoDb. Movie/show data fetched from TMDb API to create multipage app.'
                  skillsLearned={newMoviePopSkills}
                  improveNotes={moviePopImprovements}
                  gitLink='https://github.com/bdejene19/MovieApp'
                  webLink=''
                ></ProjectCard>
              </section>

              <section>
                <ProjectCard
                  projectTitle="Arsenal Soccer Fans Page"
                  skillsInvolved={ArsenalFansSkills}
                  idValue='arsenal-fanpage'
                  projectGif='arsenalfansgif.mp4'
                  projDescrip="First front-end project: a single-page app meant to showcase the past, present and future of the soccer club, Arsenal. Is a static HTML site, however, has dynanism through use of state."
                  skillsLearned={newArsenalSkills}
                  improveNotes={arsenalImprovements}
                  gitLink='https://github.com/bdejene19/ArsenalSoccerFansPage'
                  webLink='https://bdejene19.github.io/ArsenalSoccerFansPage/'
                ></ProjectCard>
              </section>   
            </ProjectsWrapper>
          </article>
        </main>
        
        {/* Summary of skills:
          - proficient languages
          - frameworks and technologies
          - soft skills
        */}
        <footer>
          <br></br>
          <br></br>
          <br></br>
          <SkillsWrapper></SkillsWrapper>
        </footer>
      </PageLayout>
    </ThemeProvider>

  );
}

export default App;
