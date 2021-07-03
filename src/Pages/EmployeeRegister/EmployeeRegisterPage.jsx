import React, { Component } from 'react';
import './EmployeeRegisterPage.scss'
import TextBox from '../../Components/TextField/Textfield'
import Button from '../../Components/Button/Button'
import Stepper from '../../Components/Stepper/Stepper';

class EmployeeRegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            companyName: "",
            mobileNumber: "",
            languages: "",
        }
    }

    render() {
        // const classes = useStyles();
        return (
            <>
                <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                    <div style={{ background: '#23286b', width: '24.16%', height: '100%', position: 'absolute' }}>
                        <h1 className="empolink-heading">EmpoLink</h1>
                    </div>
                    <div style={{ float: 'right', background: 'white', width: '100%', height: '100%', width: '75.84%' }} >
                        <div style={{ marginLeft: '34.27%', marginRight: '34.27%', height: '100%', width: '31.46%' }}>
                            <div>
                                <div>
                                    <h1 className="signUpHeading">Sign Up</h1>
                                    <div className="signUpSubHeading">Business Information</div>
                                </div>
                                <div style={{ width: "100%", height: "100%" }}>
                                    <div style={{ paddingBottom: '18px' }}>
                                        <TextBox
                                            label={"First Name"}
                                            onChange={() => { }}
                                            value={""}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '18px' }} >
                                        <TextBox
                                            label={"Last Name"}
                                            onChange={() => { }}
                                            value={""}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '18px' }} >
                                        <TextBox
                                            label={"Company/BusinessName"}
                                            onChange={() => { }}
                                            value={""}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '18px' }} >
                                        <TextBox
                                            label={"Mobile number"}
                                            onChange={() => { }}
                                            value={""}
                                            width={"100%"}
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '18px' }} >
                                        <TextBox
                                            label={"Language(s)"}
                                            onChange={() => { }}
                                            value={""}
                                            width={"100%"}
                                        />
                                    </div>
                                </div>                                <Button
                                    text='Next'
                                    width={"100%"}
                                    height='56px'
                                    onClick={() => console.log("Button Clicked")}
                                    color={["#2699fb", "#134d7e"]}
                                />
                                <div style={{ textAlign: 'center', paddingTop: '4.351%' }}>
                                    <Stepper steps={1} activeStep={1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default EmployeeRegisterPage;