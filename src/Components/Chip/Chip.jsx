import { Chip, withStyles } from '@material-ui/core';
import React from 'react'
const GreenChip=withStyles({
    root: {
      color: '#fff',
      backgroundColor:"#a4c772",
      marginLeft:"3px",
      marginTop:"3px",
      // paddingTop:"17px",
      // paddingBottom:"17px",
      // paddingLeft:"12px",
      // borderRadius:"20px"
    },
  })(Chip);
const OutlinesChip=withStyles({
    root: {
      color: '#707070',
      backgroundColor:"#fff",
      // border:"1px solid gray",
      marginLeft:"3px",
      marginTop:"3px",
      // paddingTop:"17px",
      // paddingBottom:"17px",
      // paddingLeft:"12px",
      // borderRadius:"20px"
    },
  })(Chip);
const CustomChip = (props) => {
    return (
        <>
           { props.outlined==="true"?<OutlinesChip {...props}  size={props.size} label={props.label} onDelete={props.onDelete}/>
        :   <GreenChip {...props} size={props.size} label={props.label} onDelete={props.onDelete}/>
        }                   
        </>
    )
}

export default CustomChip
