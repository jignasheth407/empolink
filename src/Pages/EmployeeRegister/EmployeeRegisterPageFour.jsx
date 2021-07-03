import React, { useEffect, useState } from "react";
import "./EmployeeRegister.scss";
import TextBox from "../../Components/TextField/Textfield";
import Button from "../../Components/Button/Button";
import Stepper from "../../Components/Stepper/Stepper";
import { withRouter } from "react-router-dom";
import Dropdown from "../../Components/DropdownComponent/Dropdown.component";
import { APIHelper } from "../../utils/ApiHelper";
import { LIVE } from "../../utils/Urls";

const EmployeeRegisterPageFour = ({ handleRegisterData, setCurrentPage }) => {
  const [fieldOptions, setFieldOptions] = useState([]);
  const [field, setField] = useState("");
  const [fieldError, setFieldError] = useState(false);
  const [fieldWork, setFieldWork] = useState();
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [yearsOfExperienceError, setYearsOfExperienceError] = useState(false);
  // }
  useEffect(() => {
    APIHelper.getMethod(`${LIVE}/api/Masters/Fields`).then((response) => {
      if (response["status"] === 1) {
        setFieldOptions(
          response.data.map((field) => ({
            ...field,
            label: field.field_name,
            value: field.field_id,
          }))
        );
      }
    });
  }, []);
  function onNextClicked() {
    if (field === "") {
      setFieldError(true);
    }
    if (yearsOfExperience === "") {
      setYearsOfExperienceError(true);
    }
    if (field !== "" && yearsOfExperience !== "") {
      handleRegisterData({ field, fieldWork, yearsOfExperience });
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
              marginLeft: "auto",
              marginRight: "auto",
              height: "100%",
              width: "65.51%",
            }}
          >
            <div>
              <div>
                <h1 className="signUpHeading">Sign Up</h1>
                <div
                  className="signUpSubHeading"
                  style={{ paddingBottom: "69.5px" }}
                >
                  Personal Information
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  marginBottom: "82.5px",
                }}
              >
                <div
                  style={{
                    paddingBottom: "49px",
                    display: "grid",
                    gap: "1rem",
                    gridTemplateColumns: "1fr 1fr",
                  }}
                >
                  <Dropdown
                    options={fieldOptions}
                    placeholder={"Field of work *"}
                    onChange={(item) => {
                      setFieldError(false);
                      setField(item);
                    }}
                    error={fieldError}
                  />
                  <TextBox
                    required={true}
                    label={"Years of Experience"}
                    onChange={(event) => {
                      setYearsOfExperienceError(false);
                      setYearsOfExperience(event.target.value);
                    }}
                    value={yearsOfExperience}
                    error={yearsOfExperienceError}
                    width={"100%"}
                    type={'number'}
                  />
                </div>
                <div style={{ paddingBottom: "18px" }}>
                  <TextBox
                    label={"Highlight"}
                    onChange={(event) => {
                      setFieldWork(event.target.value);
                    }}
                    value={fieldWork}
                    multiline={true}
                    rows={11}
                    width={"100%"}
                  />
                </div>
              </div>
              <div style={{ paddingLeft: "237px", paddingRight: "259px" }}>
                <Button
                  text="Next"
                  width={"100%"}
                  height="56px"
                  onClick={onNextClicked}
                  color={["#a4c772", "#4e8400"]}
                />
              </div>
              <div style={{ textAlign: "center", paddingTop: "47px" }}>
                <Stepper steps={6} activeStep={3} color={"#a4c772"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(EmployeeRegisterPageFour);
