import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import Typography from '@material-ui/core/Typography';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ReorderIcon from '@material-ui/icons/Reorder';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <FavoriteIcon/>,
    2: <EmojiEmotionsIcon />,
    3: <VideoLabelIcon/>,
    4: <VideoLabelIcon/>,
    5: <CheckCircleOutlineIcon/>,
    6: <MergeTypeIcon></MergeTypeIcon>,
    7: <CheckCircleOutlineIcon/>,
    8: <CheckCircleOutlineIcon/>,
    9: <ReorderIcon></ReorderIcon>
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  
}));

function getSteps() {
  return ['Mar. 2020: Code python as hobby', "Apr. 2020: Complete Bachelor's Degree",  'Jun. 2020: Frontend Fundamentals',  'Jun. 2020: React.js/Git/NPM', 'Jul 2020: First Static Webpage', "Jul-Sept. 2020: Fetch/AJAX and Express.js/MongoDB", 'Sept-Oct. 2020: Movie App Project', 'Nov. 2020: Responsive Design', 'Current Project: MERN Stack Chat App'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (`Libraries: MatplotLib, Pandas, skLearn, TensforFlow. Also practiced basic algorithms (BFS, DFS) and data structures (Stacks, Queues, Recursion and Binary Trees).`);
    case 1:
      return 'Double Major in Medical Science and Biology from the University of Western Ontario.';
    case 2:
      return 'HTML/CSS/Javascript ES6 best practices.';
    case 3:
        return 'Chose React.js as front-end framework and cover Git to commit projects as I go. NPM knowledge was required to progress further (e.g. npm scripts, dependencies, etc.).';
    case 4: 
        return 'Build Arsenal Fans Webpage project using skills to date: HTML, CSS, JS and React.js.';
    case 5:
        return 'Learned how to fetch and manipulate data from an API. Used Express.js and MongoDB to begin making basic CRUD apps.';
    case 6: 
        return 'First "fullstack" app with a backend. Backend stores user data and password in MongoDB for user authentication and dynanism.';
    case 7:
        return 'Create a landing-page clone of a digital marketing agency to practice consistent styling via grid/flexbox and styled components.';
    case 8: 
        return 'Full stack app that has a more complex backend to make a more Progessive Web App, including the use of websockets and conditional push-notifications for a real life time chat feel.';
    default:
      return 'Unknown step';
  }
}

export default function ProgressChart() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleIndexed = (label) => {
      let mySteps = steps;
      for (var x = 0; x < steps.length; x++) {
          if (mySteps[x] === label) {
              setActiveStep(x);
          }
      }
  }

  return (
    <div className={classes.root} id='journey-stepper'>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} id='stepper'>
        {steps.map((label) => (
          <Step key={label} id={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon} id='stepper-label-icon' onClick={() => handleIndexed(label)}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <br></br>
      <br></br>
      <br></br>
      <div className='progress-caption'>
          <div >
            <Typography className={classes.instructions} id='step-caption-content'><u><i>Progress Review</i></u> <br></br>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                disabled={activeStep === steps.length - 1}
              >
                  Next
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
}
