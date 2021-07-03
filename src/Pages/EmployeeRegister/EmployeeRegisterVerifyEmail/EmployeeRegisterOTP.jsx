import React, { useState } from "react";
import MessageCard from "../../../Components/MessageCard/MessageCard";
import Button from "../../../Components/Button/Button";
import "./EmployeeRegisterVerifyEmail.scss";
import OtpInput from "react-otp-input";
import axios from "axios";
import { LIVE } from "../../../utils/Urls";
const EmployeeRegisterOTP = (props) => {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);
  const [loading, setLoading] = useState(false);
  const verifyOtp = async () => {
    setLoading(true);
    axios
      .post(`${LIVE}/api/auth/verify-otp`, { email: props.email, otp })
      .then((response) => {
        if (response.data.status === 1) {
          // alert(response.message)
          setLoading(false);
          props.setCurrentPage();
        }
      })
      .catch((err) => {
        setOtpError(true);
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <>
      <MessageCard
        secondary
        width={"47.08%"}
        height={"auto"}
        minWidth={"680px"}
        maxWidth={"1000px"}
        marginTop={"335px"}
        content={
          <div>
            <div className="verifyEmailHeadingWrapper">
              <span className="verifyEmailHeading">
                You haven’t verified your email yet, please enter your
                verification code.
              </span>
            </div>
            <div
              style={{
                width: "458px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <OtpInput
                value={otp}
                onChange={(e) => {
                  setOtpError(false);
                  setOtp(e);
                }}
                containerStyle={{
                  width: "100%",
                  justifyContent: "space-around",
                }}
                inputStyle={{
                  width: "82px",
                  fontSize: "22px",
                  height: "100px",
                  borderRadius: "10px",
                  justifyContent: "space-around",
                  border: `1px ${otpError ? "red" : "#707070"} solid`,
                }}
                numInputs={4}
              />
            </div>
            <div style={{ paddingTop: "37px" }}>
              <Button
                text="Confirm"
                width={"458px"}
                height="56px"
                onClick={() => verifyOtp()}
                loading={loading}
                color={["#a4c772", "#4e8400"]}
              />
            </div>
            <div className="verifyEmailFooterWrapper">
              <span className="verifyEmailHeading">
                Haven’t received the email?{" "}
                <span className="resendOtp" onClick={() => props.resendOtp()}>
                  Resend Code.
                </span>
              </span>
            </div>
          </div>
        }
      />
    </>
  );
};

export default EmployeeRegisterOTP;
