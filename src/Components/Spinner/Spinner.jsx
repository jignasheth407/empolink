import { CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";

const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "grid",
    placeItems: "center",
  },
  bottom: {
    color: "#000",
    opacity: 0.5,
  },
  top: {
    color: "#fff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

function Spinner(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </div>
  );
}
export default Spinner;
