import React, { useEffect, useState } from "react";
import EmployeeRegisterMainPage from "./EmployeeRegisterMainPage/EmployeeRegisterMainPage";
import EmployeeRegisterThankyouMessage from "./EmployeeRegisterThankyouMessage/EmployeeRegisterThankyouMessage";
import EmployeeRegisterPageFive from "./EmployeeRegisterPageFive";
import EmployeeRegisterPageOne from "./EmployeeRegisterPageOne";
import EmployeeRegisterPageFour from "./EmployeeRegisterPageFour";
import EmployeeRegisterPageThree from "./EmployeeRegisterPageThree";
import EmployeeRegisterPageTwo from "./EmployeeRegisterPageTwo";
import EmployeeRegisterPageSix from "./EmployeeRegisterPageSix";
import EmployeeRegisterOTP from "./EmployeeRegisterVerifyEmail/EmployeeRegisterOTP";
import { APIHelper } from "../../utils/ApiHelper";
import { LIVE } from "../../utils/Urls";
import axios from "axios";

const EmployeeRegisterRedirectionPage = () => {
  const [registerData, setRegisterData] = useState({});
  const [googleApiData, setGoogleApiData] = useState({});
  const [registerCredentials, setRegisterCredentials] = useState({});
  // const [location,setLocation]=useState({})
  const [ip, setIp] = useState("");
  const [registerError, setRegisterError] = useState();
  const [registerLoading, setRegisterLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const handleRegister = (password, username, googleApiData) => {
    console.log("googleApiData");
    console.log(googleApiData);
    setRegisterCredentials({ email: username, username, password });
    setGoogleApiData(googleApiData);
  };
  const handleRegisterData = (data) => {
    setRegisterData({ ...data, ...registerData });
  };
  useEffect(() => {
    APIHelper.getMethod(`https://api.ipify.org/?format=json`).then(
      (response) => {
        setIp(response.ip);
      }
    );
  }, []);
  useEffect(() => {
    if (ip !== "") {
      APIHelper.getMethod(`https://ip-api.io/json/${ip}`).then(
        (response) => {}
      );
    }
  }, [ip]);
  const registerAccount = async () => {
    setRegisterLoading(true);
    const body = {
      firstName: registerData.firstName,
      lastName: registerData.lastName,
      password: registerCredentials.password,
      email: registerCredentials.email,
      phone: registerData.mobileNumber,
      preferred_name: registerCredentials.preferredName,
      registration_type: "EMAIL",
      user_type: "EMPLOYEE",
      linkedin_link: registerData.linkedInLink,
      id_verification: {
        legal_id_type: registerData.idType,
        legal_id: registerData.idNumber,
        file_url: registerData.file,
        is_id_verified: "false",
      },
      photo_url: registerData.photo,
      languages: registerData.languages,
      location: {
        ip: "20.24.250.230",
        country: "India",
      },
      address: {
        street_number: "11009",
        unit_number: registerData.unitNumber,
        street_name: registerData.streetAddress,
        city: registerData.city,
        state: registerData.state,
        country: registerData.country,
        region: "",
        postal_code: registerData.zipCode,
      },
      is_student: registerData.isStudent,
      is_international_worker: registerData.workInternationally,
      international_rate: registerData.internationalRate,
      rate: registerData.myRate,
      field: registerData.field?.field_name,
      specialities: [...registerData.specialitiesArr],
      skills: [...registerData.skillArr],
      work_experience: registerData.yearsOfExperience,
      notification: {
        job_email: registerData.notificationEmail,
        job_text: registerData.notificationText,
      },
      is_terms_accepted: "true",
    };
    axios
      .post(`${LIVE}/api/auth/register`, body)
      .then((response) => {
        setRegisterError(undefined);
        setCurrentPage((prv) => prv + 1);
        setRegisterLoading(false);
      })
      .catch((err) => {
        setRegisterError(err.response.data.message);
        setRegisterLoading(false);
      });
  };

  const resendOtp = async () => {
    axios
      .post(`${LIVE}/api/auth/resend-verify-otp`, {
        email: registerCredentials.email,
      })
      .then((response) => {
        if (response.status === 1) {
          alert("OTP resend");
        }
      })
      .catch((err) => console.log(err));
  };
  const pages = [
    <EmployeeRegisterMainPage
      setCurrentPage={() => setCurrentPage((prv) => prv + 1)}
      handleRegister={handleRegister}
    />,
    <EmployeeRegisterPageOne
      setCurrentPage={() => setCurrentPage((prv) => prv + 1)}
      googleApiData={googleApiData}
      handleRegisterData={handleRegisterData}
    />,
    <EmployeeRegisterPageTwo
      setCurrentPage={() => setCurrentPage((prv) => prv + 1)}
      handleRegisterData={handleRegisterData}
    />,
    <EmployeeRegisterPageThree
      setCurrentPage={() => setCurrentPage((prv) => prv + 1)}
      handleRegisterData={handleRegisterData}
    />,
    <EmployeeRegisterPageFour
      setCurrentPage={() => setCurrentPage((prv) => prv + 1)}
      handleRegisterData={handleRegisterData}
    />,
    <EmployeeRegisterPageFive
      setCurrentPage={() => setCurrentPage((prv) => prv + 1)}
      registerData={registerData}
      handleRegisterData={handleRegisterData}
    />,
    <EmployeeRegisterPageSix
      registerAccount={registerAccount}
      handleRegisterData={handleRegisterData}
      registerError={registerError}
      registerLoading={registerLoading}
    />,
    <EmployeeRegisterOTP
      setCurrentPage={() => setCurrentPage((prv) => prv + 1)}
      email={registerCredentials.email}
      resendOtp={resendOtp}
    />,
    <EmployeeRegisterThankyouMessage />,
  ];
  
  return <>{pages[currentPage]}</>;
};
export default EmployeeRegisterRedirectionPage;
