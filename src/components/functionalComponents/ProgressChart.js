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


// styling for horizontal stepper when moving between steps
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

// style for each step => i.e. the change in display when a task is complete
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

// icons for stepper
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

  // returns indexed icon froms icons list
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

// steps in stepper
function getSteps() {
  return ["Apr. 2020: Complete Bachelor's Degree",  'Jun. 2020: Frontend Fundamentals',  'Jun. 2020: React/Git/NPM', "Jul-Sept. 2020: APIs and Express.js", 'Sept-Oct. 2020: Movie App Project', 'Nov-Dec. 2020: Digital Marketing Landing-Page', 'Jan. 2021: Next.js Projects', 'Feb. 2021: Data Structures and Algorithrms', 'Mar. 2021: EXP|CON App'];
}

// progress review content for each step
function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Double Major in Medical Science and Biology from the University of Western Ontario.';
    case 1:
      return 'HTML/CSS/Javascript ES6 best practices and syntax.';
    case 2:
        return 'Chose React.js as front-end framework and cover Git to commit projects as I go. NPM knowledge was required to progress further (e.g. npm scripts, dependencies, etc.).';
    case 3:
        return 'Used external data via ES6 fetch, and AJAX. Fetched API data and stored and manipulated user requests via Express.js and MongoDB.';
    case 4: 
        return 'First "fullstack" app with a back-end. Back-end stores user data and password in MongoDB for user authentication and dynanism.';
    case 5:
        return 'Create a landing-page clone of a digital marketing agency to practice consistent styling via grid/flexbox and styled components.';
    case 6: 
      return 'Implemented small projects using Next.js to practice SSR through react. Mini projects include lazy loading using the Intersection Observer API.'
    case 7: 
      return "Read books on data structures and algorithms such as 'Cracking the Coding Interview'.";
    case 8:  
      return "Fully developed from start to finish a multi-page React app, implementing UI/UX wireframes. Project highlights consistency in React modularization and component reusability."
    default:
      return 'Unknown step';
  }
}


export default function ProgressChart() {
  const classes = useStyles();
  // create state for current active step
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  // functions to handle forward, backward and indexed clicks for the stepper 
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
    // id given for scroll transition for coverpage journey button click
    <div className={classes.root} id='journey-stepper'>
      {/* progress stepper */}
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
      {/* caption for each step */}
      <div className='progress-caption'>
          <div>
            <Typography className={classes.instructions} id='step-caption-content'>
              <u><i>Progress Review</i></u> 
              <br></br>
              {getStepContent(activeStep)}
            </Typography>

            {/* conditional rendering for back and next depending on indexx of stepper */}
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
