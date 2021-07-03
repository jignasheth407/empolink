import React, { Component } from "react";
import "../Register/RegisterPage.scss";
import TextBox from "../../Components/TextField/Textfield";
import Button from "../../Components/Button/Button";
import Stepper from "../../Components/Stepper/Stepper";
import { withRouter } from "react-router-dom";
import { APIHelper } from "../../utils/ApiHelper";
import Dropdown from "../../Components/DropdownComponent/Dropdown.component";

class BusinessInfoPageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      isFirstNameEmpty: false,
      lastName: "",
      isLastNameEmpty: false,
      companyName: "",
      isCompanyNameEmpty: false,
      mobileNumber: "",
      language: [],
      languages: [],
    };
  }

  componentDidMount() {
    APIHelper.getMethod("http://3.97.40.116:3000/api/Masters/Languages").then(
      (response) => {
        console.log(response);
        if (response["status"] === 1) {
          const options = response.data.map(function (row) {
            return { value: row.name, label: row.name, id: row._id };
          });
          this.setState({ languages: options });
        }
      }
    );
    console.log("apiData Inside Component did mount");
    console.log(this.props.apiData);
    if (this.props.apiData !== {}) {
      this.setState({
        firstName: this.props.apiData.profileObj?.givenName,
        lastName: this.props.apiData.profileObj?.familyName,
      });
    }
  }

  onNextClicked() {
    if (this.state.firstName === "" || this.state.firstName === undefined) {
      this.setState({ isFirstNameEmpty: true });
    }
    if (this.state.lastName === "" || this.state.lastName === undefined) {
      this.setState({ isLastNameEmpty: true });
    }
    if (this.state.companyName === "") {
      this.setState({ isCompanyNameEmpty: true });
    }
    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.companyName !== ""
    ) {
      this.props.onPageOneNextClicked(
        this.state.firstName,
        this.state.lastName,
        this.state.companyName,
        this.state.mobileNumber,
        this.state.language
      );
    }
  }

  render() {
    return (
      <>
        <div style={{ width: "100%", height: "1080px", position: "absolute" }}>
          <div
            style={{
              background: "#23286b",
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
                  <div className="signUpSubHeading">Business Information</div>
                </div>
                <div style={{ width: "100%", height: "100%" }}>
                  <div style={{ paddingBottom: "18px" }}>
                    <TextBox
                      required={true}
                      label={"First Name"}
                      onChange={(event) => {
                        this.setState({
                          firstName: event.target.value,
                          isFirstNameEmpty: false,
                        });
                      }}
                      value={this.state.firstName}
                      width={"100%"}
                      error={this.state.isFirstNameEmpty}
                    />
                  </div>
                  <div style={{ paddingBottom: "18px" }}>
                    <TextBox
                      required={true}
                      label={"Last Name"}
                      onChange={(event) => {
                        this.setState({
                          lastName: event.target.value,
                          isLastNameEmpty: false,
                        });
                      }}
                      value={this.state.lastName}
                      width={"100%"}
                      error={this.state.isLastNameEmpty}
                    />
                  </div>
                  <div style={{ paddingBottom: "18px" }}>
                    <TextBox
                      required={true}
                      label={"Company/BusinessName"}
                      onChange={(event) => {
                        this.setState({
                          companyName: event.target.value,
                          isCompanyNameEmpty: false,
                        });
                      }}
                      value={this.state.companyName}
                      width={"100%"}
                      error={this.state.isCompanyNameEmpty}
                    />
                  </div>
                  <div style={{ paddingBottom: "18px" }}>
                    <TextBox
                      label={"Mobile number"}
                      onChange={(event) => {
                        this.setState({ mobileNumber: event.target.value });
                      }}
                      value={this.state.mobileNumber}
                      width={"100%"}
                      type={"number"}
                    />
                  </div>
                  <div style={{ paddingBottom: "47px" }}>
                    {/* <TextBox
                                            label={"Language(s)"}
                                            onChange={(event) => { this.setState({languages: event.target.value})}}
                                            value={this.state.languages}
                                            width={"100%"}
                                        /> */}
                    <Dropdown
                      onChange={(event) =>
                        this.setState({
                          language: event.map((item) => item.id),
                        },() => {console.log(this.state.language)})
                      }
                      onInputChange={() => {}}
                      disabledDropdownIndicator={true}
                      options={this.state.languages}
                      isMulti = {true}
                      placeholder={"Language(s)"}
                    />
                  </div>
                </div>
                <Button
                  text="Next"
                  width={"100%"}
                  height="56px"
                  onClick={() => this.onNextClicked()}
                  color={["#2699fb", "#134d7e"]}
                />
                <div style={{ textAlign: "center", paddingTop: "47px" }}>
                  <Stepper steps={3} activeStep={0} color={"#1876d2"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(BusinessInfoPageOne);
