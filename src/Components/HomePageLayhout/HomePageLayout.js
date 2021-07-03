import React from 'react'
import "./homepage.scss"
import { CssBaseline, Container, Paper, Box, Grid,Button, makeStyles } from "@material-ui/core";
import { LinaerStepper } from './LinearSteper/LinearStepper';
import { Typography } from '@material-ui/core';



 

export const HomePageLayout = () => {
 
    return (
       
 <>
  <div>
        
      
          <LinaerStepper/>
       
        </div>
  {/* <Box disableGutters={true}>
 <Grid container>
   <Grid lg={2} className="sm_bg_clr">
     <Box bgColor="primary" >
         
     </Box>

  
   </Grid>

   <Grid lg={10}>
     <Box color="secondary">
       <Typography  color="primary" align="center"> its shovjhfbj</Typography>
       </Box> 
  
   </Grid>


 </Grid>
    
  </Box> */}
 </>
          
   

    )
}


