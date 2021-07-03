import React, { useState } from 'react'
import MessageCard from '../../Components/MessageCard/MessageCard'
import TextField from '../../Components/TextField/Textfield'
import Button from '../../Components/Button/Button'
import './ForgotPassword.scss'
import { LIVE } from '../../utils/Urls'
import axios from 'axios'

const ForgotPassword = (props) => {
    const [email,setEmail]=useState("")
    const [emailError,setEmailError]=useState(false)
    const [error,setError]=useState(undefined)
    const [isSuccess, setSuccess] = useState(false)
    const resendResetLink=async ()=>{
        if(email!=="")
        {axios.post(`${LIVE}/api/auth/forgot-password-link`,{email,link:`http://localhost:3000/update-password?email=${email}`})
                .then(response=>{
                    console.log('response');
                    console.log(response)
                  if(response.data['status']===1){
                    // alert("Email send")
                    setSuccess(true)                
                  } 
                }).catch(err=>{
                    setEmailError(true)
                    setError(err.response.data['message'])
                })
            } else {
                setEmailError(true)
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
                heading={"Forgotten your password?"}
                content={
                    <div>
                        <div style={{ textAlign: 'center' }}>
                            <div className="forgotPasswordCardContentHeading">
                                No worries,<br />We have your back!
                            </div>
                            <div className="forgotPasswordContentSubtext">
                                Enter the email address associated with your account,<br />and we will email you a link to reset your password.
                            </div>
                            <div style={{ marginTop: '21px' }}>
                                <TextField
                                    label={"Email Address"}
                                    onChange={e => {
                                        setEmailError(false)
                                        setError(undefined)
                                        setEmail(e.target.value)
                                     }}
                                    value={email}
                                    error={emailError}
                                    helperText={error&&error}
                                    width={"458px"}
                                />
                            </div>
                            <div className="val-success">{isSuccess ? "Email sent successfully" : null}</div>
                            <div style={{ marginTop: '103px' }}>
                                <Button
                                    text='Send reset link'
                                    width={"458px"}
                                    height='56px'
                                    onClick={() => resendResetLink()}
                                    color={["#2699fb", "#134d7e"]}
                                />
                            </div>
                        </div>
                    </div>
                } />
        </>
    );
}

export default ForgotPassword;
