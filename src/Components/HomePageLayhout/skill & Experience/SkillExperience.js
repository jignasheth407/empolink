import React from 'react'
import "./skillexperience.scss"
import CustomChip from '../../Chip/Chip'
import {Box} from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DummyList } from '../DummyList/DummyList';


export const SkillExperience = () => {
    return (
        <Box className="spc_exp_both_side">
            <h6 className="skill_hdng"> skills & Experience </h6> 
      
        <Box width={330}>
     


<Autocomplete
        id="free-solo-demo"
        freeSolo
        options={DummyList.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="App, Softwear Development & Web Design" margin="normal" variant="outlined" />
        )}
      />
             
            </Box>                  
               <CustomChip  />
            </Box>
    )
}
