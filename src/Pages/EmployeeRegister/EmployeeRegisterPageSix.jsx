import React, { Component } from "react";
import "./EmployeeRegister.scss";
import TextBox from "../../Components/TextField/Textfield";
import Button from "../../Components/Button/Button";
import Stepper from "../../Components/Stepper/Stepper";
import { withRouter } from "react-router-dom";
import CheckboxComponent from "../../Components/CheckboxComponent/CheckboxComponent";
import { FormControlLabel, Switch, withStyles } from "@material-ui/core";

const GreenSwitch = withStyles({
  switchBase: {
    color: "#a4c772",
    "&$checked": {
      color: "#a4c772",
    },
    "&$checked + $track": {
      backgroundColor: "#a4c772",
    },
  },
  checked: {},
  track: {},
})(Switch);

class EmployeeRegisterPageSix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myRate: "",
      myRateError: false,
      isStudent: false,
      workInternationally: false,
      internationalRate: "",
      termsAndConditions: false,
      notificationEmail: false,
      notificationText: false,
      submitted: false,
      myLessRateError: false,
      internationalRateError: false
    };
  }
  onSubmitClicked() {
    this.props.handleRegisterData({
      myRate: this.state.myRate,
      isStudent: this.state.isStudent,
      workInternationally: this.state.workInternationally,
      internationalRate: this.state.internationalRate,
      termsAndConditions: this.state.termsAndConditions,
      notificationEmail: this.state.notificationEmail,
      notificationText: this.state.notificationText,
    });
    this.setState({ submitted: true });
  }
  onNextClicked() {
    if (this.state.myRate === "") {
      this.setState({ myRateError: true });
    } else {
      this.props.registerAccount();
    }
  }


  render() {
    return (
      <>
        <div style={{ width: "100%", height: "1080px", position: "absolute" }}>
          <div
            style={{
              background: "#a4c772",
              width: "24.16%",
              height: "100%",
              position: "absolute",
            }}
          >
            <h1 className="empolink-heading">EmpoLink</h1>
          </div>
          <div
            style={{
              float: "right",
              background: "white",
              height: "100%",
              width: "75.84%",
            }}
          >
            <div
              style={{
                marginLeft: "34.27%",
                marginRight: "34.27%",
                height: "100%",
                width: "31.46%",
              }}
            >
              <div>
                <div>
                  <h1 className="signUpHeading">Sign Up</h1>
                  <div
                    className="signUpSubHeading"
                    style={{ paddingBottom: "26px" }}
                  >
                    Personal Information
                  </div>
                </div>
                <div style={{ width: "100%", height: "100%" }}>
                  <p
                    style={{
                      color: "#9a9a9a",
                      marginLeft: "5px",
                      fontSize: "20px",
                      margin: "0",
                      paddingBottom: "18px",
                    }}
                  >
                    Specify below your desired rate in loal currency
                  </p>
                  <div style={{ paddingBottom: "18px" }}>
                    <TextBox
                      required={true}
                      label={"My rate"}
                      onChange={(event) => {
                        if(event.target.value < 5){
                          this.setState({
                            myRate: event.target.value,
                            myLessRateError: true
                          });
                        }
                        else{
                          this.setState({
                            myRate: event.target.value,
                            myLessRateError: false
                          });
                        }
                        // this.props.handleRegisterData(this.state)
                      }}
                      type="number"
                      value={this.state.myRate}
                      error={this.state.myRateError || this.state.myLessRateError}
                      width={"100%"}
                    />
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      paddingBottom: "18px",
                      width: "100%",
                    }}
                  >
                    <CheckboxComponent
                      checked={this.state.isStudent}
                      onChange={() => {
                        this.setState({ isStudent: !this.state.isStudent });
                        // this.props.handleRegisterData(this.state)
                      }}
                      name={"Is Student"}
                      label={"I am a student"}
                    />
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      paddingBottom: "18px",
                      width: "100%",
                    }}
                  >
                    <CheckboxComponent
                      checked={this.state.workInternationally}
                      onChange={() => {
                        this.setState({
                          workInternationally: !this.state.workInternationally,
                        });
                        // this.props.handleRegisterData(this.state)
                      }}
                      name={"Work Intentional"}
                      label={"I can work internationally"}
                    />
                  </div>
                  <div style={{ paddingBottom: "68px" }}>
                    <TextBox
                      required={true}
                      disabled={!this.state.workInternationally}
                      type="number"
                      label={"Specify your international rate in USD"}
                      onChange={(event) => {
                        if(event.target.value < 5){
                          this.setState({
                            internationalRate: event.target.value,
                            internationalRateError: true
                          });
                        }
                        else{
                          this.setState({
                            internationalRate: event.target.value,
                            internationalRateError: false
                          });
                        }
                        // this.props.handleRegisterData(this.state)
                      }}
                      value={this.state.internationalRate}
                      width={"100%"}
                      error={this.state.internationalRateError}
                    />
                  </div>
                  <p
                    style={{
                      color: "#9a9a9a",
                      marginLeft: "5px",
                      fontSize: "20px",
                      margin: "0",
                      paddingBottom: "18px",
                    }}
                  >
                    How would you like to receive notifications?
                  </p>
                  <div style={{ paddingBottom: "18px" }}>
                    <FormControlLabel
                      className="custom__switch"
                      control={
                        <GreenSwitch
                          // checked={this.state.notificationEmail}
                          checked={true}
                          onChange={() => {
                            this.setState({
                              notificationEmail: !this.state.notificationEmail,
                            });
                            // this.props.handleRegisterData(this.state)
                          }}
                        />
                      }
                      labelPlacement="start"
                      style={{
                        margin: "0",
                        color: "#707070",
                        fontSize: "20px",
                      }}
                      label="Email"
                    />
                  </div>
                  <div style={{ paddingBottom: "18px" }}>
                    <FormControlLabel
                      className="custom__switch"
                      control={
                        <GreenSwitch
                          // checked={this.state.notificationText}
                          checked={false}
                          onChange={() => {
                            this.setState({
                              notificationText: !this.state.notificationText,
                            });
                            // this.props.handleRegisterData(this.state)
                          }}
                        />
                      }
                      labelPlacement="start"
                      style={{
                        margin: "0",
                        color: "#707070",
                        fontSize: "20px",
                      }}
                      label="Text message"
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      paddingBottom: "18px",
                      justifyContent: "center",
                    }}
                  >
                    <CheckboxComponent
                      checked={this.state.termsAndConditions}
                      onChange={() => {
                        this.setState({
                          termsAndConditions: !this.state.termsAndConditions,
                        });
                        this.props.handleRegisterData(this.state);
                      }}
                      name={"Is Student"}
                      label={"I agree with the terms and conditions"}
                    />
                  </div>
                </div>
                <Button
                  text={"Agree and join"}
                  width={"100%"}
                  height="56px"
                  disabled={!this.state.termsAndConditions}
                  onClick={() => this.onNextClicked()}
                  color={["#a4c772", "#4e8400"]}
                  loading={this.props.registerLoading}
                />
                <h6 style={{ textAlign: "center", color: "red" }}>
                  {this.props.registerError && this.props.registerError}
                </h6>
                <div style={{ textAlign: "center", paddingTop: "47px" }}>
                  <Stepper steps={6} activeStep={5} color={"#a4c772"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(EmployeeRegisterPageSix);
