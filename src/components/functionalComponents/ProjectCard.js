/** Project card component holds name, videos and languages/technologeis used for each project */

import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


// project card footer for representing skills
const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  width: 80%;
  text-align: center;
  margin-left: 10%;
  margin-top: 7.5%;
 
  
  div {
    border-top: solid lightgrey 2px;
    &:nth-child(1) {
      border-top: none;
    }
  }
`;

// rotation factors for each of the project cards
// NOTE: if i had more project cards i would create a function that takes in the key to create separate rotation factors ratehr than hard coding each variable

let rotateFactorP1 = 0;
let rotateFactorP2 = 0;
let rotateFactorP3 = 0;
let rotateFactorP4 = 0;
let rotateFactorP5 = 0;

const turnCard = (idValue) => {
  let cardChosen = document.getElementById(idValue);

  if (idValue === 'landing-page') {
    rotateFactorP1 += 1;
    cardChosen.style.transform = `rotateY(${rotateFactorP1 * 180}deg)`;
    cardChosen.style.transition = 'all 0.6s';
  } 

  else if (idValue === 'movie-app') {
    rotateFactorP2 += 1;
    cardChosen.style.transform = `rotateY(${rotateFactorP2 * 180}deg)`;
    cardChosen.style.transition = 'all 0.6s';
  } 

  else if (idValue === 'arsenal-fanpage') {
    rotateFactorP3 += 1;
    cardChosen.style.transform = `rotateY(${rotateFactorP3 * 180}deg)`;
    cardChosen.style.transition = 'all 0.6s';
  }

  else if (idValue === 'student-scores') {
    rotateFactorP4 += 1;
    cardChosen.style.transform = `rotateY(${rotateFactorP4 * 180}deg)`;
    cardChosen.style.transition = 'all 0.6s';
  }

  else if (idValue === 'expcon-concert') {
    rotateFactorP5 += 1;
    cardChosen.style.transform = `rotateY(${rotateFactorP5 * 180}deg)`;
    cardChosen.style.transition = 'all 0.6s';
  }
}

export default function ProjectCard(props) {
  const skillsInvolved = props.skillsInvolved;
  const thingsLearned = props.skillsLearned;
  const improvements = props.improveNotes;

  // intialize empty arrays since i could not use higher order array functions while passing lists through as props  
  let mySkills = [];
  let newSkills = []
  let myImprovements = [];
  for ( let index in skillsInvolved) {
    mySkills.push(skillsInvolved[index]);
  }

  for (let index in thingsLearned) {
    newSkills.push(thingsLearned[index]);
  }

  for (let index in improvements) {
    myImprovements.push(improvements[index]);
  }


  return (
        // flip card has 2 sides with each's position being absolute
        // when mouse is hovering over video portion of card, video plays for each completed project
        <div className='flipcard-inner' id={props.idValue} onClick={() => turnCard(props.idValue)}>
          <div className='flipcard-front'>
            {/* title */}
              <CardHeader style={{height: 75}}
                title={props.projectTitle}
              />

            {/* media content => project video => play onMouseEnter, pause onMouseLeave */}
              <CardMedia
                component='video'
                id='vid-gif'
                image={process.env.PUBLIC_URL + '/' + props.projectGif}
                onMouseEnter={(e) => e.target.play()} 
                onMouseLeave={(e) => e.target.pause()}
                pause 
                muted
              />


              {/* skills footer of front of poject card */}
              <CardActions disableSpacing>
                <SkillsWrapper>
                  {mySkills.map(skills => <div><Typography variant='body2' color='inherit'>{skills}</Typography></div>)}
                </SkillsWrapper>
              </CardActions>
          </div>    

          <div className='flipcard-back'>
              <CardHeader style={{height: 50, color: "slateblue"}}
              title='About'/>

             {/* content of the project card backside 
              - has project description
              - things learned while doing the project
              - improvements that could be made
             */} 
            <div className='flipcard-back-content'>
              <Typography variant='subtitle1' className='project-description'>{props.projDescrip}</Typography>
                <div className='skills-acquired'>
                  <Typography variant='subtitle2' className='subtitle'><b>What I Learned</b></Typography>
                    <ul>
                      {newSkills.map(skill => <li>{skill}</li>)}
                    </ul>
                </div>


                <div className='skills-acquired'>
                  <Typography variant='subtitle2' className='subtitle'><b>What/How I would improve</b></Typography>
                    <ul>
                      {myImprovements.map(improvement => <li>{improvement}</li>)}
                    </ul>
                </div>
              </div>
              
              {/* wrapper for button links
              - links are to github source code and the actual webapp itself
              */}
              <div className='button-flipcard-back'>
                <Button 
                  variant='contained' 
                  className='btn-backSide' 
                  style={{backgroundColor: 'slateblue', color: 'white'}} 
                  href={props.gitLink}>Source</Button>

                <Button
                  variant='contained'
                  style={{backgroundColor: '#d84315', color: 'white'}} 
                  href={props.webLink}
                  className='btn-backSide'
                >Webpage</Button>
              </div>
          </div>
          
        </div>
  );
}
