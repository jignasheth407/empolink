
import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Box,TextareaAutosize ,FormControlLabel
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import "./Linear.scss"
import { Themecompoennt } from "../Theme/ThemeComponent";
import { Autocomplete } from "@material-ui/lab";
import { JobDescription } from "../JobDescription/JobDescription";
import ContainedButtons from "../../Button/Button";


const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),

    // background:linearGradient(90deg, rgba(35,142,233,1) 0%, rgba(29,117,192,1) 35%, rgba(22,88,144,1) 100%);
  },
}));

function getSteps() {
  return [
    "Job Description",
    " Skills & Experience",
    "  Fee  & Payment",
     "Work Schedule",
    "Location"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
       <JobDescription/>
         
        
        </>
      );

    case 1:
      return (
        <>
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            name="emailAddress"
          />
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            name="phoneNumber"
          />
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            name="alternatePhone"
          />
        </>
      );
    case 2:
      return (
        <>
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            name="address1"
          />
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            name="address2"
          />
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            name="country"
          />
        </>
      );
    case 3:
      return (
        <>
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            name="cardNumber"
          />
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            name="cardMonth"
          />
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            name="cardYear"
          />
        </>
      );
      case 4:
        return (
          <>
            <TextField
              id="cardNumber"
              label="Card Number"
              variant="outlined"
              placeholder="Enter Your Card Number"
              fullWidth
              margin="normal"
              name="cardNumber"
            />
            <TextField
              id="cardMonth"
              label="Card Month"
              variant="outlined"
              placeholder="Enter Your Card Month"
              fullWidth
              margin="normal"
              name="cardMonth"
            />
            <TextField
              id="cardYear"
              label="Card Year"
              variant="outlined"
              placeholder="Enter Your Card Year"
              fullWidth
              margin="normal"
              name="cardYear"
            />
          </>
        );
    default:
      return "unknown step";
  }
}

 export const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

 



  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
     <>
        <Box>
    
 
          <Grid container>
            <Grid lg={12} className="Main_container">
                 <Box  className="sm_bg_clr" >
                 <Stepper alternativeLabel activeStep={activeStep}  >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}  className="" >
              <StepLabel {...labelProps}   >{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
                 </Box>

                <Box className="main_big_box-cls">
                  <Box px={10}>
                
  

  {activeStep === steps.length ? (
    <Typography variant="h3" align="center">
      Thank You 
    </Typography>
  ) : (
    <>

      <form className="container_hgtt">{getStepContent(activeStep)}</form>
       
        <div  className="main_big_box_cls"> 
        <div className="flx_class" > 
          <div  className="flx_classaa"> 
      <Button

        className={`back_btnn ${classes.button}`}
        disabled={activeStep === 0}
        onClick={handleBack}
        px={10}
      >
        back
      </Button>
      </div>

     <div className="Employer---Job-Post1-Job-Description">  
      <Button
        // className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleNext}
       
        className={`hh ${classes.button}`}
    
      >
        {activeStep === steps.length - 1 ? "Finish" : "Next"}
      </Button>
           {/* <ContainedButtons/> */}

      </div>
      </div>
      </div>
    </>
  )}

 
                      
                  </Box>
            </Box>


            </Grid>
            
          </Grid>
        </Box>


 
   
    
       
        
     
     </>
  );
};


