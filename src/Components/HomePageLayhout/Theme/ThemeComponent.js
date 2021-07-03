import { Paper,createMuiTheme,vertical } from "@material-ui/core";
import { PureComponent } from "react";


export const Themecompoennt = createMuiTheme({
    MuiStepper:{
        vertical:{
            MuiStepperVertical:{
                orientation:"vertical"
            }
        }
       
    }
})
