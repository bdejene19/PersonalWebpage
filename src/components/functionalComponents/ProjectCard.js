import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import styled from 'styled-components'

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

  let mySkills = [];
  for ( let index in skillsInvolved) {
    mySkills.push(skillsInvolved[index]);
  }

  return (
      <Card className='flipcard' id={props.idValue} onClick={() => turnCard(props.idValue)}>
        <div className='flipcard-inner'>
          <div className='flipcard-front'>
              <CardHeader style={{height: 75}}
                title={props.projectTitle}
              />

              <CardMedia
                className={classes.media}
                image="/bubble.png"
                title="Paella dish"
              />
            
              <CardActions disableSpacing>
                <SkillsWrapper>
                  {mySkills.map(skills => <div><Typography variant='body2' color='inherit'></Typography>{skills}</div>)}

                </SkillsWrapper>
              </CardActions>
          </div>    

          <div className='flipcard-back'>
              <CardHeader style={{height: 75}}
              title='About'/>
              <Typography variant='subtitle1'>{props.projDescrip}</Typography>

              <div className='skills-acquired'>
                <Typography variant='body2'>What I Learned</Typography>
                <Typography variant='p'>{props.skillsLearned}</Typography>
              </div>


              <div className='skills-acquired'>
                <Typography variant='body2'>What/How I would improve</Typography>
                <Typography variant='p'>{props.skillsLearned}</Typography>
              </div>
          </div>
        </div>
    </Card>    
  );
}
