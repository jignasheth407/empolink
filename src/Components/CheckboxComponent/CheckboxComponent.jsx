import { Checkbox, FormControlLabel } from '@material-ui/core'
import React from 'react'

const CheckboxComponent = (props) => {
    return (
        <>
            <FormControlLabel
                control={<Checkbox
                    style={{
                        color: "#c7c7c7",
                    }}
                    checked={props.checked} onChange={props.onChange} name={props.name}/>}
                label={<div style={{color:"#9a9a9a"}} className="rememberMe"> {props.label} </div>}
            />
        </>
    )
}

export default CheckboxComponent
