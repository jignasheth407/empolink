import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import Stepper from "../../Components/Stepper/Stepper";
import Dropdown from "../../Components/DropdownComponent/Dropdown.component";
import { APIHelper } from "../../utils/ApiHelper";
import CheckboxList from "../../Components/CheckboxList/CheckboxList";
import CheckboxComponent from "../../Components/CheckboxComponent/CheckboxComponent";

function BusinessInfoPageThree(props) {
  const [fieldsList, setFieldsList] = useState([]);
  const [specialitiesList, setSpecialityList] = useState([]);
  const [field, setField] = useState("");
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [agreedToTermsCondition, setAgreedToTermsCondition] = useState(false);
  const [isField, setIsField] = useState(true);

  useEffect(() => {
    APIHelper.getMethod("http://3.97.40.116:3000/api/Masters/Fields").then(
      (response) => {
        if (response["status"] === 1) {
          const options = response.data.map(function (row) {
            return {
              value: row.field_name,
              label: row.field_name,
              id: row._id,
            };
          });
          setFieldsList(options);
        }
      }
    );
  }, []);

  const onFieldSelect = (item) => {
    setIsField(true);
    setField(item.value);
    // let body = {"field_id":item.id}
    APIHelper.getMethod(
      `http://3.97.40.116:3000/api/Masters/Specialities?field_id=${item.id}`
    ).then((response) => {
      if (response["status"] === 1) {
        const options = response.data.map(function (row) {
          return { value: row.name, label: row.name, id: row._id };
        });
        setSpecialityList(options);
        console.log(options);
      }
    });
  };

  const handleCheckboxList = (checkedItems) => {
    // let wrapper = specialitiesList.map( function (row){
    //     let inner = checkedItems.map( function (item){
    //         if(row.label === item ){
    //             return { value: row.value, label: row.label, id: row.id }
    //         }

    //     })

    //     console.log('inner')
    //     console.log(inner)
    // })

    // let wrapper = specialitiesList.map( function (row){
    //     if(checkedItems.indexOf(row.value) > -1){
    //         if(row.label && row.label != 'undefined'){
    //             console.log(row);
    //             return { name: row.label, id: row.id }
    //         }

    //     }
    // })

    // let wrapper = specialitiesList.map( function (row){
    //     if(checkedItems.indexOf(row.value) > -1){
    //         if(row.label && row.label != 'undefined'){
    //             console.log(row);
    //             return { name: row.label, id: row.id }
    //         }

    //     }
    // })
    var intersection = specialitiesList.filter(function (e) {
      return checkedItems.indexOf(e.value) > -1;
    });
    let selectedValue = intersection.map(function (row) {
      return { name: row.label, id: row.id };
    });

    setSelectedSpecialities(selectedValue);
  };

  const onAgreeAndSignUpClicked = () => {
    if (agreedToTermsCondition && field !== "") {
      props.onAgreeAndSignUpClicked(field, selectedSpecialities);
    } else {
      setIsField(false);
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
                  style={{ paddingBottom: "47px" }}
                  className="signUpSubHeading"
                >
                  Business Information
                </div>
              </div>
              <Dropdown
                options={fieldsList}
                onChange={onFieldSelect}
                // focus={handleFieldApiNotCalled}
                placeholder={"Field of work *"}
                error={!isField}
              />
              <div className="registerSpecialityHeadingStyles">
                What specialities you usually look for? (Optional)
              </div>
              <CheckboxList
                options={specialitiesList}
                // onNewSelected={(rex)=>{console.log(rex)}}
                onNewSelected={(checked) => handleCheckboxList(checked)}
              />
              <div
                style={{
                  paddingLeft: "7px",
                  paddingTop: "22px",
                  paddingBottom: "22px",
                }}
              >
                <CheckboxComponent
                  checked={agreedToTermsCondition}
                  onChange={() => {
                    setAgreedToTermsCondition(!agreedToTermsCondition);
                  }}
                  name={"Only show first letter of my last name"}
                  label={
                    <div>
                      I agree with the{" "}
                      <span style={{ textDecoration: "underline" }}>
                        terms and conditions.
                      </span>
                    </div>
                  }
                />
              </div>

              <Button
                text="Agree and join"
                width={"100%"}
                height="56px"
                disabled={!agreedToTermsCondition}
                onClick={() => onAgreeAndSignUpClicked()}
                color={["#2699fb", "#134d7e"]}
                // loading={this.props.registerLoading}
              />

              <div style={{ textAlign: "center", paddingTop: "47px" }}>
                <Stepper steps={3} activeStep={2} color={"#1876d2"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessInfoPageThree;
