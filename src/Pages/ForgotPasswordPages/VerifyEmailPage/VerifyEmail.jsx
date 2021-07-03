import React from "react";
import MessageCard from "../../../Components/MessageCard/MessageCard";
import TextBox from "../../../Components/TextField/Textfield";
import Button from "../../../Components/Button/Button";
import { withRouter } from "react-router-dom";
import "./VerifyEmail.scss";

function VerifyEmail() {
  return (
    <>
      <MessageCard
        width={"47.08%"}
        height={"317px"}
        minWidth={"680px"}
        maxWidth={"1000px"}
        marginTop={"335px"}
        content={
          <div>
            <div className="verifyEmailHeadingWrapper">
              <span className="verifyEmailHeading">
                You haven’t verified your email yet, please verify your email.
              </span>
            </div>
            <div>
              <TextBox
                label={"Email Address"}
                // onChange={(event) => { setAny(event.target.value) }}
                value={"6456545"}
                width={"458px"}
              />
            </div>
            <div style={{ paddingTop: "37px" }}>
              <Button
                text="Resend verification link "
                width={"458px"}
                height="56px"
                onClick={() => console.log("Button Clicked")}
                color={["#2699fb", "#134d7e"]}
              />
            </div>
          </div>
        }
      />
    </>
  );
}

export default withRouter(VerifyEmail);
