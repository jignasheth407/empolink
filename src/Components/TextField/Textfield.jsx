import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx'

const TextBox = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      borderRadius: "10px"
    },
    textField: {
      width: props.width ? props.width : null,
      height: props.height ? props.height : null,
      [`& fieldset`]: {
        borderRadius: '10px',
        height: props.height ? props.height : null,

      },
    },
  }));
  const classes = useStyles();

  return (
    <div style={{padding:"0px",width:"100%"}}>
    <div className={classes.root}>
      <TextField
        required={props.required}
        label={props.label}
        defaultValue={props.defaultValue}
        variant="outlined"
        className={clsx(classes.textField)}
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        size={props.size}
        InputProps = {props.InputProps}
        multiline={!!props.multiline}
        {...props}
        error={props.error}
      />
    </div>
    </div>
  )
}
export default TextBox;
