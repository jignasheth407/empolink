import React, { useState } from "react";
import MessageCard from "../../../Components/MessageCard/MessageCard";
import Button from "../../../Components/Button/Button";
import "../../EmployeeRegister/EmployeeRegisterVerifyEmail/EmployeeRegisterVerifyEmail.scss";
import { withRouter } from "react-router-dom";

import OtpInput from "react-otp-input";

const RegisterOtpPage = (props) => {
  const [otp, setOtp] = useState("");

  return (
    <>
      <MessageCard
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
                onChange={(e) => setOtp(e)}
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
                  border: `1px ${props.otpError ? "red" : "#707070"} solid`,
                }}
                numInputs={4}
              />
            </div>
            <div style={{ paddingTop: "37px" }}>
              <Button
                text="Confirm"
                width={"458px"}
                height="56px"
                onClick={() => props.onOtpClicked(otp)}
                color={["#2699fb", "#134d7e"]}
                loading={props.otpLoading}
              />
            </div>
            <div className="verifyEmailFooterWrapper">
              <span className="verifyEmailHeading">
                Haven’t received the email?{" "}
                <span
                  className="resendOtp"
                  onClick={() => props.resendOtp()}
                  style={{ color: "#1d78c6", textDecoration: "underline" }}
                >
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

export default withRouter(RegisterOtpPage);
