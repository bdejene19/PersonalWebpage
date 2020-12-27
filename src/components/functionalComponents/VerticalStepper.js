import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));
  
function getSteps() {
    return ['Mar. 2020: Code python as hobby', "Apr. 2020: Complete Bachelor's Degree",  'Jun. 2020: Frontend Fundamentals',  'Jun. 2020: React.js/Git/NPM', 'Jul 2020: First Static Webpage', "Jul-Sept. 2020: APIs and Backend-Frameworks", 'Sept-Oct. 2020: Movie App Project', 'Nov. 2020: Responsive Design', 'Current Project: MERN Stack Chat App'];
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
            return 'Used external data via ES6 fetch, and AJAX. Used API data to store manipulate user requests via Express.js and MongoDB.';
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

export default function VerticalLinearStepper() {
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
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel onClick={() => handleIndexed(label)} style={{pointerEvents: 'cursor'}}>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>

      </div>
    );
  }
  