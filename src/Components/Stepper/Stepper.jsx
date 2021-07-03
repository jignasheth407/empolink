import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";

function Stepper(props) {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      background: "none",
      display: "inline-block",
      "& .MuiMobileStepper-dotActive": {
        background: props.color ? props.color : "#23286b",
      },
    },
    dot: {
      height: 26,
      width: 26,
      marginRight: 14,
    },
  });
  const classes = useStyles();
  return (
    <MobileStepper
      variant="dots"
      steps={props.steps}
      position="static"
      activeStep={props.activeStep}
      classes={{
        root: classes.root,
        dot: classes.dot,
      }}
    />
  );
}

export default Stepper;
