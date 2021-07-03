import React from 'react'
import MessageCard from '../../../Components/MessageCard/MessageCard'
import TextField from '../../../Components/TextField/Textfield'
import Button from '../../../Components/Button/Button'
import './EmployeeRegisterVerifyEmail.scss'

const EmployeeRegisterVerifyEmail = (props) => {
    return (
        <>
            <MessageCard
            secondary
                width={'47.08%'}
                height={'317px'}
                minWidth={'680px'}
                maxWidth={'1000px'}
                marginTop={'335px'}
                content={
                    <div>
                        <div className="verifyEmailHeadingWrapper">
                            <span className="verifyEmailHeading">You haven’t verified your email yet, please verify your email.</span>
                        </div>
                        <div>
                            <TextField
                                label={"Email Address"}
                                onChange={() => { }}
                                value={""}
                                width={"458px"}
                            />
                        </div>
                        <div style={{ paddingTop: '37px'}}>
                            <Button
                                text='Resend verification link '
                                width={"458px"}
                                height='56px'
                                onClick={() => console.log("Button Clicked")}
                                color = {["#a4c772", "#4e8400"]}
                            />
                        </div>
                    </div>
                } />
        </>
    );
}

export default EmployeeRegisterVerifyEmail;
