import React, { useEffect, useState } from "react";
import "./EmployeeRegister.scss";
import TextBox from "../../Components/TextField/Textfield";
import Button from "../../Components/Button/Button";
import Stepper from "../../Components/Stepper/Stepper";
import { withRouter } from "react-router-dom";
import FileUpload from "../../Components/FileUpload/FileUpload";
import Dropdown from "../../Components/DropdownComponent/Dropdown.component";
import { LIVE } from "../../utils/Urls";
import { APIHelper } from "../../utils/ApiHelper";

const EmployeeRegisterPageTwo = ({ handleRegisterData, setCurrentPage }) => {
  const [linkedInLink, setLinkedInLink] = useState("");
  const [languages, setLanguages] = useState([]);
  const [languagesOptions, setLanguagesOptions] = useState([]);
  const [idNumber, setIdNumber] = useState("");
  const [idNumberError, setIdNumberError] = useState(false);
  const [idType, setIdType] = useState("");
  const [idTypeError, setIdTypeError] = useState(false);
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [isFileSelected, setFileSelected] = useState(true);
  const IDoptions = [
    { value: "DL", label: "driver's license" },
    { value: "PASSPORT", label: "passport" },
  ];
  useEffect(() => {
    APIHelper.getMethod(`${LIVE}/api/Masters/Languages`).then((response) => {
      if (response["status"] === 1) {
        setLanguagesOptions(
          response.data.map((language) => ({
            ...language,
            label: language.name,
            value: language.iso_code,
          }))
        );
      }
    });
  }, []);
  function onNextClicked() {
    if (idType === "") {
      setIdTypeError(true);
    }
    if (idNumber === "") {
      setIdNumberError(true);
    }
    if (file === "") {
      setFileSelected(false);
    }

    if (idType !== "" && idNumber !== "" && file !== "") {
      handleRegisterData({
        linkedInLink,
        languages,
        idNumber,
        file,
        photo,
        idType,
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
                  style={{ paddingBottom: "80.5px" }}
                >
                  Personal Information
                </div>
              </div>
              <div
                style={{ width: "100%", height: "100%", marginBottom: "29px" }}
              >
                <div style={{ paddingBottom: "18px" }}>
                  <Dropdown
                    options={IDoptions}
                    placeholder={"ID Type*"}
                    onChange={(event) => {
                      setIdTypeError(false);
                      setIdType(event.label);
                    }}
                    error={idTypeError || !isFileSelected}
                  />
                  <FileUpload
                    helperText={fileName === "" ? "Upload Doc" : fileName}
                    // value={file} \
                    id="file-input"
                    width={"100%"}
                    icon={"Camera"}
                    setFile={setFile}
                    setFileName={setFileName}
                  />
                </div>
                <div style={{ paddingBottom: "18px" }}>
                  <TextBox
                    required={true}
                    label={"Driver's License or Passport No."}
                    onChange={(event) => {
                      setIdNumberError(false);
                      setIdNumber(event.target.value);
                    }}
                    error={idNumberError}
                    value={idNumber}
                    width={"100%"}
                  />
                </div>

                <div style={{ paddingBottom: "18px" }}>
                  <TextBox
                    label={"LinkedIn Account"}
                    onChange={(event) => {
                      setLinkedInLink(event.target.value);
                    }}
                    value={linkedInLink}
                    width={"100%"}
                  />
                </div>
                <div style={{ paddingBottom: "18px" }}>
                  <Dropdown
                    placeholder={"Language(s)"}
                    isMulti
                    options={languagesOptions}
                    disabledDropdownIndicator={true}
                    onChange={(event) => {
                      setLanguages(event.map((item) => item._id));
                    }}
                  />
                </div>
                <div style={{ paddingBottom: "18px" }}>
                  <TextBox label={"Photo"} value={photoName} width={"100%"} />

                  <FileUpload
                    helperText={photoName === "" ? "Upload Photo" : photoName}
                    // value={photo}
                    width={"100%"}
                    id="photo-input"
                    Icon={"Camera"}
                    setFile={setPhoto}
                    setFileName={setPhotoName}
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
                <Stepper steps={6} activeStep={1} color={"#a4c772"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(EmployeeRegisterPageTwo);
