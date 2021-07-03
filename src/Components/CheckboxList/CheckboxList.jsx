import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 458,
    overflow: "auto",
    height: 372,
    borderRadius: 10,
    border: "solid 2px #c7c7c7",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    props.onNewSelected(newChecked);

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {!props.options
        ? null
        : props.options.map((item) => {
            const labelId = `checkbox-list-label-${item.label}`;

            return (
              <ListItem
                role={undefined}
                dense
                button
                onClick={handleToggle(item.label)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(item.label) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  style={{
                    borderBottom: "solid 1px #c7c7c7",
                    marginRight: "58px",
                  }}
                  id={labelId}
                  primary={`${item.label}`}
                />
              </ListItem>
            );
          })}
    </List>
  );
}
