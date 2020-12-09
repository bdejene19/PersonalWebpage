import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  width: 80%;
  text-align: center;
  margin-left: 10%;
 
  
  div {
    border-top: solid lightgrey 2px;
    &:nth-child(1) {
      border-top: none;
    }
  }
`;

let rotateFactorP1 = 0;
let rotateFactorP2 = 0;
let rotateFactorP3 = 0;

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
}

export default function ProjectCard(props) {
  const classes = useStyles();
  const skillsInvolved = props.skillsInvolved;
  const thingsLearned = props.skillsLearned;
  const improvements = props.improveNotes;

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
        <div className='flipcard-inner' id={props.idValue} onClick={() => turnCard(props.idValue)}>
          <div className='flipcard-front'>
              <CardHeader style={{height: 75}}
                title={props.projectTitle}
              />

              <CardMedia
                className={classes.media}
                image="/bubble.png"
                im
                title="Paella dish"
              />
            
              <CardActions disableSpacing>
                <SkillsWrapper>
                  {mySkills.map(skills => <div><Typography variant='body2' color='inherit'>{skills}</Typography></div>)}

                </SkillsWrapper>
              </CardActions>
          </div>    

          <div className='flipcard-back'>
              <CardHeader style={{height: 50}}
              title='About'/>
            <div className='flipcard-back-content'>
              <Typography variant='subtitle1'>{props.projDescrip}</Typography>
                <div className='skills-acquired'>
                  <Typography variant='subtitle2'><b>What I Learned</b></Typography>
                    <ul>
                      {newSkills.map(skill => <li>{skill}</li>)}
                    </ul>
                </div>


                <div className='skills-acquired'>
                  <Typography variant='subtitle2'><b>What/How I would improve</b></Typography>
                    <ul>
                      {myImprovements.map(improvement => <li>{improvement}</li>)}
                    </ul>
                </div>
              </div>
              
              <div className='button-flipcard-back'>
                  <Button variant='contained' className='button-viewGit' style={{backgroundColor: 'slateblue', color: 'white'}} href={props.gitLink}>View source code</Button>
                </div>
          </div>
          
        </div>
  );
}
