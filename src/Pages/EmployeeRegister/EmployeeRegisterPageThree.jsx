import React, { useEffect, useState } from "react";
import "./EmployeeRegister.scss";
import TextBox from "../../Components/TextField/Textfield";
import Button from "../../Components/Button/Button";
import Stepper from "../../Components/Stepper/Stepper";
import { withRouter } from "react-router-dom";
import Dropdown from "../../Components/DropdownComponent/Dropdown.component";
import { LIVE } from "../../utils/Urls";
import { APIHelper } from "../../utils/ApiHelper";
const EmployeeRegisterPageThree = ({ handleRegisterData, setCurrentPage }) => {
  const [streetAddress, setStreetAddress] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [streetAddressError, setStreetAddressError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [zipCodeError, setZipCodeError] = useState(false);
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [CityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    APIHelper.getMethod(`${LIVE}/api/Masters/Country`).then((response) => {
      if (response["status"] === 1) {
        setCountryOptions(
          response.data.map((country) => ({
            ...country,
            label: country.name,
            value: country.country_id,
          }))
        );
      }
    });
  }, []);
  useEffect(() => {
    if (!!country) {
      APIHelper.getMethod(
        `${LIVE}/api/Masters/States?country_id=${country.country_id}`
      ).then((response) => {
        if (response["status"] === 1) {
          setStateOptions(
            response.data.map((state) => ({
              ...state,
              label: state.name,
              value: state.state_id,
            }))
          );
        }
      });
    }
  }, [country]);
  useEffect(() => {
    if (!!state) {
      APIHelper.getMethod(
        `${LIVE}/api/Masters/Cities?state_id=${state.state_id}`
      ).then((response) => {
        if (response["status"] === 1) {
          setCityOptions(
            response.data.map((city) => ({
              ...city,
              label: city.name,
              value: city.name,
            }))
          );
        }
      });
    }
  }, [state]);

  function onNextClicked() {
    if (streetAddress === "") {
      setStreetAddressError(true);
    }
    if (country === "") {
      setCountryError(true);
    }
    if (city === "") {
      setCityError(true);
    }
    if (state === "") {
      setStateError(true);
    }
    if (zipCode === "") {
      setZipCodeError(true);
    }
    if (
      streetAddress !== "" &&
      country !== "" &&
      city !== "" &&
      state !== "" &&
      zipCode !== ""
    ) {
      handleRegisterData({
        streetAddress,
        unitNumber,
        country,
        city,
        state,
        zipCode,
      });
      setCurrentPage();
    }
  }
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
                  style={{ paddingBottom: "56.5px" }}
                >
                  Personal Information
                </div>
              </div>
              <div
                style={{ width: "100%", height: "100%", marginBottom: "29px" }}
              >
                <div style={{ paddingBottom: "18px" }}>
                  <Dropdown
                    options={countryOptions}
                    placeholder={"Country *"}
                    disabledDropdownIndicator={true}
                    onChange={(country) => {
                      setCountryError(false);
                      setCountry(country);
                    }}
                    error={countryError}
                  />
                </div>
                <div style={{ paddingBottom: "18px" }}>
                  <Dropdown
                    options={stateOptions}
                    placeholder={"State/Province *"}
                    onChange={(state) => {
                      setStateError(false);
                      setState(state);
                    }}
                    disabledDropdownIndicator={true}
                    error={stateError}
                  />
                </div>
                <div style={{ paddingBottom: "18px" }}>
                  <Dropdown
                    options={CityOptions}
                    placeholder={"City*"}
                    onChange={(city) => {
                      setCityError(false);
                      setCity(city);
                    }}
                    disabledDropdownIndicator={true}
                    error={cityError}
                  />
                </div>
                <div style={{ paddingBottom: "18px" }}>
                  <TextBox
                    required={true}
                    label={"Street Address"}
                    onChange={(event) => {
                      setStreetAddressError(false);
                      setStreetAddress(event.target.value);
                    }}
                    value={streetAddress}
                    error={streetAddressError}
                    width={"100%"}
                  />
                </div>

                <div style={{ paddingBottom: "18px" }}>
                  <TextBox
                    label={"Unit Number"}
                    onChange={(event) => {
                      setUnitNumber(event.target.value);
                    }}
                    value={unitNumber}
                    width={"100%"}
                  />
                </div>
                <div style={{ paddingBottom: "18px" }}>
                  <TextBox
                    required={true}
                    label={"Zip/Postal Code"}
                    onChange={(event) => {
                      setZipCodeError(false);
                      setZipCode(event.target.value);
                    }}
                    value={zipCode}
                    error={zipCodeError}
                    width={"100%"}
                    // type={"number"}
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
                <Stepper steps={6} activeStep={2} color={"#a4c772"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(EmployeeRegisterPageThree);
