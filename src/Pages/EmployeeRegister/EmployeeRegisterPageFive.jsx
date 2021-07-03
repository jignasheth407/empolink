import React, { useEffect, useState } from "react";
import "./EmployeeRegister.scss";
import Button from "../../Components/Button/Button";
import Stepper from "../../Components/Stepper/Stepper";
import CustomChip from "../../Components/Chip/Chip";
import { withRouter } from "react-router-dom";
import Dropdown from "../../Components/DropdownComponent/Dropdown.component";
import { Add, Delete } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { APIHelper } from "../../utils/ApiHelper";
import { LIVE } from "../../utils/Urls";

const EmployeeRegisterPageFive = ({
  registerData,
  handleRegisterData,
  setCurrentPage,
}) => {
  const [speciality, setSpeciality] = useState();
  const [specialitiesOptions, setSpecialitiesOptions] = useState([]);
  const [skillOptions, setSkillOptions] = useState([]);
  const [topSkillOptions, setTopSkillOptions] = useState([]);
  const [topSkillNum, setTopSkillNum] = useState(6);
  const [selectedSkillOptions, setSelectedSkillOptions] = useState([]);
  const [extraSkills, setExtraSkills] = useState([]);
  const [skillSet, setSkillSet] = useState([]);
  const onNextClicked = () => {
    let specialitiesArr = [];
    let skillArr = [];
    skillSet.forEach((set) => {
      specialitiesArr.push({ id: set.id, name: set.speciality });
      set.skill.forEach((skill) => {
        skillArr.push({ speciality_id: set.id, name: skill });
      });
    });
    handleRegisterData({ skillArr, specialitiesArr });
    setCurrentPage();
  };
  useEffect(() => {
    if (registerData.field) {
      APIHelper.getMethod(
        `${LIVE}/api/Masters/Specialities?field_id=${registerData.field._id}`
      ).then((response) => {
        if (response["status"] === 1) {
          setSpecialitiesOptions(
            response.data.map((speciality) => ({
              ...speciality,
              label: speciality.name,
              value: speciality._id,
            }))
          );
        }
      });
    }
  }, [registerData.field]);
  useEffect(() => {
    if (speciality) {
      APIHelper.getMethod(
        `${LIVE}/api/Masters/Skills?speciality_id=${speciality._id}`
      ).then((response) => {
        if (response["status"] === 1) {
          setSkillOptions(
            response.data.map((skill) => ({
              ...skill,
              label: skill.name,
              value: skill.name,
              skills_id: skill._id,
            }))
          );
        }
      });
    }
  }, [speciality]);
  useEffect(() => {
    const arr = skillOptions.filter((skill, id) => {
      return id < 6;
    });
    setTopSkillNum(6);
    setTopSkillOptions(arr);
  }, [skillOptions]);
  const addSkillSet = () => {
    if (!alreadyPresent(speciality.name)) {
      setSkillSet([
        ...skillSet,
        {
          speciality: speciality.name,
          id: speciality._id,
          skill: [...selectedSkillOptions, ...extraSkills],
        },
      ]);
    } else {
      const arr = skillSet.map((set) => {
        if (set.speciality !== speciality.name) return set;
        else
          return {
            speciality: speciality.name,
            id: speciality._id,
            skill: [...selectedSkillOptions, ...extraSkills],
          };
      });
      setSkillSet(arr);
    }
  };
  const alreadyPresent = (speciality) => {
    const arr = skillSet.filter((set) => {
      return set.speciality === speciality;
    });
    if (arr.length === 0) return false;
    else return true;
  };
  const removeSkillSet = (name) => {
    const arr = skillSet.filter((set) => {
      return set.speciality !== name;
    });
    setSkillSet(arr);
  };
  const removeSkill = (speciality, skill) => {
    const arr = skillSet.map((currentSet) => {
      if (currentSet.speciality === speciality) {
        const modifiedSkills = currentSet.skill.filter((currentSkill) => {
          return skill !== currentSkill.name;
        });
        return { ...currentSet, skill: modifiedSkills };
      } else {
        return currentSet;
      }
    });
    setSkillSet(arr);
  };
  const removeTopSkill = (skill) => {
    const arr = topSkillOptions.filter((currentSkill) => {
      return skill.name !== currentSkill.name;
    });
    if (topSkillNum < skillOptions.length) {
      setTopSkillOptions([...arr, skillOptions[topSkillNum]]);
      setTopSkillNum((prv) => prv + 1);
    } else {
      setTopSkillOptions([...arr]);
    }
  };
  const removeSelectedTopSkill = (skill) => {
    const arr = selectedSkillOptions.filter((currentSkill) => {
      return skill.name !== currentSkill.name;
    });
    setSelectedSkillOptions(arr);
  };
  return (
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
                style={{ paddingBottom: "63px" }}
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
                  paddingBottom: "18px",
                }}
              >
                Select a skill{"("}s{")"} from the suggested list or typw more
                skills below
              </p>
              <div style={{ paddingBottom: "18px", width: "50%" }}>
                <Dropdown
                  options={specialitiesOptions}
                  placeholder={"Specialties"}
                  onChange={(e) => {
                    setSpeciality(e);
                    setSelectedSkillOptions([]);
                    setExtraSkills([]);
                  }}
                />
              </div>
              <div style={{ paddingBottom: "25px" }}>
                {topSkillOptions.map((skill) => {
                  return (
                    <CustomChip
                      onClick={() => {
                        if (
                          isNotInArray(selectedSkillOptions, skill.name) ===
                          "true"
                        ) {
                          setSelectedSkillOptions((prv) => [
                            ...prv,
                            { ...skill },
                          ]);
                        } else {
                          removeSelectedTopSkill(skill);
                        }
                      }}
                      outlined={isNotInArray(selectedSkillOptions, skill.name)}
                      key={skill._id}
                      style={{
                        padding: "18px 8px 17px 12px",
                        borderRadius: "20px",
                        height: "auto",
                        width: "auto",
                        marginRight: "20px",
                      }}
                      label={skill.name}
                      onDelete={() => {
                        removeSelectedTopSkill(skill);
                        removeTopSkill(skill);
                      }}
                    />
                  );
                })}
              </div>
              <div style={{ paddingBottom: "44px" }}>
                <Dropdown
                  placeholder={"More Skills (comma separated, Max 10 total)"}
                  options={skillOptions.filter((skill) => {
                    return isNotInArray(topSkillOptions, skill.name) === "true";
                  })}
                  disabledDropdownIndicator={true}
                  isMulti
                  value={extraSkills}
                  onChange={(event) => {
                    setExtraSkills(event);
                  }}
                />
              </div>
              <div
                style={{
                  paddingBottom: "18px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton
                  onClick={addSkillSet}
                  component={"span"}
                  style={{
                    backgroundColor: "rgba(164,199,114,0.64)",
                    marginRight: "5px",
                    color: "#707070",
                  }}
                >
                  <Add style={{ color: "#fff" }} />
                </IconButton>
                <p
                  style={{
                    color: "#9a9a9a",
                    marginLeft: "5px",
                    fontSize: "20px",
                  }}
                >
                  Add the selected Specialty and skills
                </p>
              </div>
              <div
                style={{
                  borderRadius: "25px",
                  border: "1px solid #707070",
                  padding: "10px",
                  marginBottom: "5px",
                  maxHeight: "195px",
                  overflow: "auto",
                  height: "195px"
                }}
              >
                {skillSet.map((set, id) => {
                  return (
                    <div key={id} style={{ marginBottom: "5px" }}>
                      <div
                        style={{
                          display: "flex",
                          color: "#454545",
                          alignItems: "center",
                        }}
                      >
                        {set.speciality}{" "}
                        <Delete
                          style={{ cursor: "pointer" }}
                          onClick={() => removeSkillSet(set.speciality)}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          color: "#454545",
                          marginBottom: "5px",
                          flexWrap: "wrap",
                        }}
                      >
                        {set.skill.map((skill, id) => (
                          <CustomChip
                            key={id}
                            style={{
                              margin: "0 10px 5px 0",
                              padding: "6px 9px",
                              borderRadius: "8px",
                              height: "56px",
                              width: "auto",
                            }}
                            size={"small"}
                            label={skill.name}
                            onDelete={() => {
                              removeSkill(set.speciality, skill.name);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                style={{
                  paddingLeft: "237px",
                  paddingRight: "259px",
                  marginTop: "72px",
                }}
              >
                <Button
                  text="Next"
                  width={"100%"}
                  height="56px"
                  onClick={onNextClicked}
                  color={["#a4c772", "#4e8400"]}
                />
              </div>
              <div style={{ textAlign: "center", paddingTop: "47px" }}>
                <Stepper steps={6} activeStep={4} color={"#a4c772"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EmployeeRegisterPageFive);

const isNotInArray = (arr, str) => {
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].name === str) return "false";
  }
  return "true";
};
