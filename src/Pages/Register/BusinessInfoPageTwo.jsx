import React, { Component } from "react";
import "../Register/RegisterPage.scss";
import TextBox from "../../Components/TextField/Textfield";
import Button from "../../Components/Button/Button";
import Stepper from "../../Components/Stepper/Stepper";
import Dropdown from "../../Components/DropdownComponent/Dropdown.component";
import { APIHelper } from "../../utils/ApiHelper";
import { withRouter } from "react-router-dom";

class BusinessInfoPageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      streetAddress: "",
      unitNumber: "",
      city: "",
      state: "",
      postalcode: "",
      countries: [],
      states: [],
      cities: [],
      isStreetAddress: true,
      isCity: true,
      isCountry: true,
      isState: true,
      isPostalCode: true,
    };
  }

  componentDidMount() {
    APIHelper.getMethod("http://3.97.40.116:3000/api/Masters/Country").then(
      (response) => {
        if (response["status"] === 1) {
          const options = response.data.map(function (row) {
            return {
              value: row.name,
              label: row.name,
              id: row._id,
              Id: row.country_id,
            };
          });
          this.setState({ countries: options });
        }
      }
    );
  }

  render() {
    const onCountrySelect = (value) => {
      APIHelper.getMethod(
        `http://3.97.40.116:3000/api/Masters/States?country_id=${value.Id}`
      ).then((response) => {
        if (response["status"] === 1) {
          console.log("on country select state API response");
          console.log(response);
          const options = response.data.map(function (row) {
            return {
              value: row.name,
              label: row.name,
              id: row._id,
              Id: row.state_id,
            };
          });
          this.setState({
            states: options,
            country: value.value,
          });
        }
      });
    };

    const onStateSelect = (value) => {
      APIHelper.getMethod(
        `http://3.97.40.116:3000/api/Masters/Cities?state_id=${value.Id}`
      ).then((response) => {
        console.log(response);
        console.log(response["status"]);
        if (response["status"] === 1) {
          console.log("on State select City API response");
          console.log(response.data);
          const options = response.data.map(function (row) {
            return {
              value: row.name,
              label: row.name,
              id: row._id,
              Id: row.state_id,
            };
          });
          this.setState({
            cities: options,
            state: value.value,
          });
        }
      });
    };

    const onNextClicked = () => {
      if (this.state.country === "") {
        this.setState({ isCountry: false });
      }
      if (this.state.postalcode === "") {
        this.setState({ isPostalCode: false });
      }
      if (this.state.state === "") {
        this.setState({ isState: false });
      }
      if (this.state.streetAddress === "") {
        this.setState({ isStreetAddress: false });
      }
      if (this.state.city === "") {
        this.setState({ isCity: false });
      }
      if (
        this.state.country !== "" &&
        this.state.state !== "" &&
        this.state.city !== "" &&
        this.state.streetAddress !== "" &&
        this.state.postalcode !== ""
      ) {
        this.props.onPageTwoNextClicked(
          this.state.country,
          this.state.streetAddress,
          this.state.unitNumber,
          this.state.city,
          this.state.state,
          this.state.postalcode
        );
      }
    };

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
                  <div
                    style={{ paddingBottom: "133px" }}
                    className="signUpSubHeading"
                  >
                    Business Information
                  </div>
                </div>
                <div style={{ width: "100%", height: "100%" }}>
                  <div style={{ paddingBottom: "18px" }}>
                    <Dropdown
                      onChange={(value) => {
                        this.setState({ isCountry: true });
                        onCountrySelect(value);
                      }}
                      disabledDropdownIndicator={true}
                      options={this.state.countries}
                      placeholder={"Country *"}
                      error={!this.state.isCountry}
                    />
                  </div>
                  <div style={{ paddingBottom: "18px" }}>
                    <Dropdown
                      onChange={(value) => {
                        this.setState({ isState: true });
                        onStateSelect(value);
                      }}
                      disabledDropdownIndicator={true}
                      options={this.state.states}
                      placeholder={"State/Province *"}
                      error={!this.state.isState}
                    />
                  </div>
                  <div style={{ paddingBottom: "18px" }}>
                    <Dropdown
                      onChange={(value) =>
                        this.setState({ city: value.label, isCity: true })
                      }
                      disabledDropdownIndicator={true}
                      options={this.state.cities}
                      placeholder={"City *"}
                      error={!this.state.isCity}
                    />
                  </div>
                  <div style={{ paddingBottom: "18px" }}>
                    <TextBox
                      label={"Street Address *"}
                      onChange={(event) => {
                        this.setState({
                          streetAddress: event.target.value,
                          isStreetAddress: true,
                        });
                      }}
                      value={this.state.streetAddress}
                      width={"100%"}
                      error={!this.state.isStreetAddress}
                    />
                  </div>
                  <div style={{ paddingBottom: "18px" }}>
                    <TextBox
                      label={"Unit Number"}
                      onChange={(event) => {
                        this.setState({ unitNumber: event.target.value });
                      }}
                      value={this.state.unitNumber}
                      width={"100%"}
                    />
                  </div>

                  <div style={{ paddingBottom: "47.5px" }}>
                    <TextBox
                      label={"Zip/Postal Code *"}
                      onChange={(event) => {
                        this.setState({
                          postalcode: event.target.value,
                          isPostalCode: true,
                        });
                      }}
                      value={this.state.postalcode}
                      width={"100%"}
                      error={!this.state.isPostalCode}
                    />
                  </div>
                </div>
                <Button
                  text="Next"
                  width={"100%"}
                  height="56px"
                  onClick={() => onNextClicked()}
                  color={["#2699fb", "#134d7e"]}
                />
                <div style={{ textAlign: "center", paddingTop: "45px" }}>
                  <Stepper steps={3} activeStep={1} color={"#1876d2"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(BusinessInfoPageTwo);
