import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        width: "13.2vw",
        marginLeft: "2.5vw"
    },
});

function valuetext(value) {
    return `$${value}`;
}

const useStylesCard = makeStyles({
    root: {
        width: "18.80vw",
        height: "4.791vw",
      backgroundColor: '#ffffff',
      borderRadius:"1.041vw",

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function RangeSlider(props) {
    const classes = useStyles();
    const cardClasses = useStylesCard();
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        console.log("newValue");
        console.log(newValue);
        console.log("event")
        console.log(event)
        setValue(newValue);
    };

    return (
        <>
        <Card className={cardClasses.root}>
        <div style={{display:"inline-block"}} className="specialityDropdownLabel">{props.heading}</div> 
        <div style={{display:"inline-block"}}>{props.rangeDisplay}</div>
            <div className={classes.root}>
                <Slider
                    value={props.value}
                    onChange={props.handleChange}
                    onChangeCommitted={(event,two) => console.log("changeCommitted" + event,two)}
                    // valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    marks={props.marks}
                    min={props.min}
                    max={props.max}
                />
            </div>
        </Card></>
    );
}
