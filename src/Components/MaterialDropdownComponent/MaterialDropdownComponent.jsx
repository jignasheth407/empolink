import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import Card from '@material-ui/core/Card';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const BootstrapInput = withStyles((theme) => ({
    root: {
        width:"17.70vw",
        "label + &": {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid white",
        fontSize: "0.83333vw",
        padding: "0.520vw 1.354vw 0.520vw 0.625vw"
        // Use the system font instead of the default Roboto font.
    }
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1)
    },
    icon: {
        left: "16.66vw",
        top: "1.04166vw",
        display:"none"
    }
}));

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

export default function CustomizedSelects() {
    const classes = useStyles();
    const cardClasses = useStylesCard();
    const [age, setAge] = React.useState("");
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <Card className={cardClasses.root}>
                <FormControl className={classes.margin}>
                    <div className="specialityDropdownLabel">All Speciality</div>
                    <div className="arrowDropdownIcon">
                    <ArrowDropDownIcon/>
                    </div>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        labelWidth={0}
                        value={age}
                        onChange={handleChange}
                        classes={{ icon: classes.icon }}
                        input={<BootstrapInput />}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Card>

        </div>
    );
}
