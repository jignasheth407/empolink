import React, { Component } from "react";
import "./EmployeeRegister.scss";
import TextBox from "../../Components/TextField/Textfield";
import Button from "../../Components/Button/Button";
import Stepper from "../../Components/Stepper/Stepper";
import { withRouter } from "react-router-dom";
import CheckboxComponent from "../../Components/CheckboxComponent/CheckboxComponent";

class EmployeeRegisterPageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      firstNameError: false,
      lastName: "",
      lastNameError: false,
      preferredName: "",
      mobileNumber: "",
      mobileNumberError: "",
      languages: "",
      showFirstLetterOfLastName: false,
    };
  }

  componentDidMount() {
    console.log("this.props.googleApiData");
    // console.log(this.props.googleApiData);
    // if (this.props.googleApiData !== {}) {
    //   this.setState({
    //     firstName: this.props.googleApiData.profileObj?.givenName,
    //     lastName: this.props.googleApiData.profileObj?.familyName,
    //   });
    // }
  }

  render() {
    const onNextClicked = () => {
      if (!this.state.firstName || this.state.firstName === "") {
        this.setState({ firstNameError: true });
      }
      if (!this.state.lastName || this.state.lastName === "") {
        this.setState({ lastNameError: true });
      }
      if (!this.state.mobileNumber || this.state.mobileNumber === "") {
        this.setState({ mobileNumberError: true });
      }
      if (
        !(!this.state.firstName || this.state.firstName === "") &&
        !(!this.state.lastName || this.state.lastName === "") &&
        !(!this.state.lastName || this.state.mobileNumber === "")
      ) {
        this.props.setCurrentPage();
        this.props.handleRegisterData(this.state);
      }
    };
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
                    style={{ paddingBottom: "80px" }}
                  >
                    Personal Information
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: "29px",
                  }}
                >
                  <div style={{ paddingBottom: "18px" }}>
                    <TextBox
                      required={true}
                      label={"First Name"}
                      onChange={(event) => {
                        this.setState({ firstNameError: false });
                        this.setState({ firstName: event.target.value });
                      }}
                      value={this.state.firstName}
                      error={this.state.firstNameError}
                      width={"100%"}
                    />
                  </div>
                  <div style={{ paddingBottom: "18px" }}>
                    <TextBox
                      label={"Preffered Name"}
                      onChange={(event) => {
                        this.setState({ preferredName: event.target.value });
                      }}
                      value={this.state.preferredName}
                      width={"100%"}
                    />
                  </div>
                  <div style={{ paddingBottom: "18px" }}>
                    <TextBox
                      required={true}
                      label={"Last Name"}
                      onChange={(event) => {
                        this.setState({ lastNameError: false });
                        this.setState({ lastName: event.target.value });
                      }}
                      value={this.state.lastName}
                      error={this.state.lastNameError}
                      width={"100%"}
                    />
                  </div>
                  <div
                    style={{ display: "inline-block", paddingBottom: "18px" }}
                  >
                    <CheckboxComponent
                      checked={this.state.showFirstLetterOfLastName}
                      onChange={() => {
                        this.setState({
                          showFirstLetterOfLastName:
                            !this.state.showFirstLetterOfLastName,
                        });
                      }}
                      name={"Only show first letter of my last name"}
                      label={"Only show first letter of my last name"}
                    />
                  </div>
                  <div style={{ paddingBottom: "18px" }}>
                    <TextBox
                      label={"Mobile number"}
                      type={"number"}
                      required={true}
                      onChange={(event) => {
                        this.setState({ mobileNumber: event.target.value });
                      }}
                      value={this.state.mobileNumber}
                      error={this.state.mobileNumberError}
                      width={"100%"}
                    />
                  </div>
                </div>
                <Button
                  text="Next"
                  width={"100%"}
                  height="56px"
                  onClick={() => onNextClicked()}
                  color={["#a4c772", "#4e8400"]}
                />
                <div style={{ textAlign: "center", paddingTop: "47px" }}>
                  <Stepper steps={6} activeStep={0} color={"#a4c772"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(EmployeeRegisterPageOne);
