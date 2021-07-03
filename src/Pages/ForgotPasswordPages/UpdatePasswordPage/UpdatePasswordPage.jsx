import React, { useState } from 'react'
import MessageCard from '../../../Components/MessageCard/MessageCard'
import TextField from '../../../Components/TextField/Textfield'
import Button from '../../../Components/Button/Button'
import './UpdatePasswordPage.scss'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { LIVE } from '../../../utils/Urls'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const UpdatePasswordPage = (props) => {
    const search= useLocation().search;
    const email= new URLSearchParams(search).get("email")
    const [newPassword,setNewPassword]=useState("")
    const [newPasswordError,setNewPasswordError]=useState(false)
    const [confirmNewPassword,setConfirmNewPassword]=useState("")
    const [confirmNewPasswordError,setConfirmNewPasswordError]=useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const resetPassword=async ()=>{
        if(newPassword===""||newPassword.length<6||newPassword!==confirmNewPassword){
            setNewPasswordError(true)
        } 
        if(confirmNewPassword===""||newPassword.length<6||newPassword!==confirmNewPassword){
            setConfirmNewPasswordError(true)
        }
        if(email!==""&&newPassword!==""&&newPassword===confirmNewPassword&&newPassword.length>=6)
        {
            axios.post(`${LIVE}/api/auth/update-password-bylink`,{email,new_password:newPassword})
                .then(response=>{
                    if(response.data['status']===1){
                        // alert("Email send")
                        setSuccess(true)
                      }
                 console.log(response)
                }).catch(err=>console.log(err))
            } 
      }
    return (
        <>
            <MessageCard
                width={'35%'}
                height={'578px'}
                minWidth={'500px'}
                maxWidth={'720px'}
                marginTop={'251px'}
                heading={"Update password"}
                onClose = {()=>{console.log("onClose")}}
                content={
                    <div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ display:'inline-block'}}>
                                <div className="updatePasswordText">
                                    Must include at least 6 characters.
                                </div>
                            </div>
                            <div>
                                <TextField
                                    label={"New password"}
                                    type={showPassword ? 'text' : "password"}
                                    onChange={e => { 
                                        setNewPasswordError(false)
                                        setNewPassword(e.target.value)
                                    }}
                                    value={newPassword}
                                    error={newPasswordError}
                                    width={"458px"}
                                    InputProps={{ // <-- This is where the toggle button is added.
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>
                            <div style = {{ marginTop:'20px'}}>
                                <TextField
                                    label={"Re-enter new password"}
                                    type={showConfirmPassword ? 'text' : "password"}
                                    onChange={e => {
                                        setConfirmNewPasswordError(false)
                                        setConfirmNewPassword(e.target.value)
                                     }}
                                    value={confirmNewPassword}
                                    error={confirmNewPasswordError}
                                    width={"458px"}
                                    InputProps={{ // <-- This is where the toggle button is added.
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                                />
                            </div>
                            <div className="val-success">{isSuccess ? "password updated successfully" : null}</div>
                            <div style = {{ marginTop:'141px'}}>
                                <Button
                                    text='Update'
                                    width={"458px"}
                                    height='56px'
                                    onClick={() => resetPassword()}
                                    color={["#2699fb", "#134d7e"]}
                                />
                            </div>
                        </div>
                    </div>
                } />
        </>
    );
}

export default UpdatePasswordPage;
