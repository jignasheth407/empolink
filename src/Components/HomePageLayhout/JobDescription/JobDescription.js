import React from 'react'
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
  import { Themecompoennt } from "../Theme/ThemeComponent";
  import { Autocomplete } from "@material-ui/lab";
  import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyle= makeStyles({

  box1:{
      backgroundColor:"red"
  }

})
  

export const JobDescription = () => {
     const classes = useStyle()
  return (
       <>
      <Typography variant="h4" className="heading_h4 heading_main">Job Description</Typography>
        <Box> <TextField
            className="first_name form-group"
            id="first-name"
            label="Job Title"
            variant="outlined"
            placeholder="Job Title"         
           
            margin="normal"
            name="firstName"
           
            rows={12}
          /></Box>
          {/* <TextField
          className="last_name"
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
            
          /> */}
          <Box> <TextareaAutosize 
          aria-label="minimum height" 
          rowsMin={5} mt={10}
          fullWidth
          placeholder=" Job Description" 
          className="form-control" />
          </Box>
         
          {/* <TextField
            id="nick-name"
            label=" Additional instrucations"
            variant="outlined"
            placeholder=" Additional Instructions (optional)"
            fullWidth
            margin="normal"
            name="nickName"
          /> */}
          <Box>
           Attachments (optional)
          <Box className="last_name_additional"> 
          <Typography 
          align="center"
          fullWidth
          >Drag and drop or Upload a maximum of 3 files up to 10MB each</Typography>
             <CloudDownloadIcon className="cloud_icon_item"  />
          </Box>
          </Box>
           <Box> <TextareaAutosize 
           aria-label="minimum height" 
           rowsMin={5} 
           placeholder=" Additional Instructions (optional)" 
           className="form-control"
           fullWidth
            />
           </Box>
       </>
    )
}
