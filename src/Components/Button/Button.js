import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Spinner from "../Spinner/Spinner";
const ContainedButtons = ({ ...props }) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        borderRadius: '0.52083vw',
        background: props.variant !== "outlined" ? `linear-gradient(180deg, ${props.color[0]} 0%, ${props.color[1]} 100%)`: null,
        height: props.height,
        width: props.width,
        textTransform: "none",
        fontFamily: "Libre Franklin",
        // fontSize: props.variant !== "outlined" ?"20px": "14px",
        fontSize: props.variant !== "outlined" ?"1.0416vw": "0.72916vw",
        fontWeight:props.variant !== "outlined" ?"bold": "normal",
      }
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button disabled={props.disabled} variant={props.variant ? 'outlined': 'contained'} color="primary" onClick={props.onClick}>
        <div>
          {props.loading ? <Spinner /> : props.text}
        </div>
      </Button>
    </div>
  );
}

export default ContainedButtons
