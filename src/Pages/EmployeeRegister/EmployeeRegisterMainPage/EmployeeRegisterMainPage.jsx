import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import TextBox from "../../../Components/TextField/Textfield";
import Button from "../../../Components/Button/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "../../LoginPage/LoginPage.scss";
import "./EmployeeRegisterMainPage.scss";
import { useHistory, withRouter } from "react-router-dom";
import { MicrosoftLogin } from "react-microsoft-login";
import { ValidateEmail } from "../../../utils/validations";

const EmployeeRegisterMainPage = ({ handleRegister, setCurrentPage }) => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordDoesnotMatch, setPasswordDoesnotMatch] = useState(false);
  const [emailError, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [googleApiData, setGoogleApiData] = useState({});
  const onLogInClicked = () => {
    history.push("/login");
  };

  const onSignUpClicked = () => {
    if (!ValidateEmail(username)) {
      setError(true);
      return;
    } else if (confirmPassword !== password || password.length < 6) {
      setPasswordDoesnotMatch(true);
      return;
    } else {
      handleRegister(password, username, googleApiData);
      setCurrentPage();
    }
  };

  // render() {

  const responseGoogle = (response) => {
    setGoogleApiData(response);
    handleRegister(password, username, response);
    setCurrentPage();
  };

  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <div className="loginPageWrapper">
      <div className="employeeRegisterBackground">
        <h1
          style={{
            marginLeft: "97px",
            fontSize: "35px",
            letterSpacing: "2.84px",
          }}
          className="empolink"
        >
          EmpoLink
        </h1>
      </div>
      <div className="loginPage">
        <div className="loginCard">
          <h1 style={{ color: "#414141" }} className="signUpTopHeading">
            Sign Up
          </h1>
          <div style={{ paddingBottom: "18px" }}>
            <TextBox
              required={true}
              label={"Email Address"}
              onChange={(event) => {
                setError(false);
                setUsername(event.target.value);
              }}
              value={username}
              width={"100%"}
              error={emailError}
            />
          </div>
          <div style={{ paddingBottom: "18px" }}>
            <TextBox
              label={"Password * (Min. 6 Characters)"}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => {
                setPasswordDoesnotMatch(false);
                setPassword(event.target.value);
              }}
              width={"100%"}
              error={passwordDoesnotMatch}
              InputProps={{
                // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div style={{ paddingBottom: "9px" }}>
            <TextBox
              label={"Confirm Password "}
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(event) => {
                setPasswordDoesnotMatch(false);
                setConfirmPassword(event.target.value);
              }}
              width={"100%"}
              error={passwordDoesnotMatch}
              InputProps={{
                // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div style={{ paddingBottom: "75px", paddingTop: "21px" }}>
            <Button
              text="Sign up"
              width={"100%"}
              height="56px"
              onClick={() => onSignUpClicked()}
              // color={["#2699fb", "#134d7e"]}
              color={["#a4c772", "#4e8400"]}
            />
          </div>
          <div style={{ width: "100%" }}>
            <hr className="left-line" />
            <div style={{ marginLeft: "3.5%", display: "inline-block" }}>
              {"Or"}
            </div>
            <hr className="right-line" />
          </div>
          <div style={{ marginTop: "75px" }}>
            <MicrosoftLogin
              className="microsoftButtonStyles"
              clientId={"87c2f4c7-9e45-4273-ad8f-42da8c77c697"}
              children={
                <div className="googleLogInStyles">
                  <div className="microsoft"></div>
                  <div className="microsoftButtonText">
                    Sign up with Microsoft
                  </div>
                </div>
              }
              authCallback={authHandler}
            />
            <div style={{ marginTop: "18px" }}>
              <GoogleLogin
                clientId="1080303502452-90u0ouis2kuoljcr8o7mda2s2632i6l7.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={() => responseGoogle}
                onFailure={() => responseGoogle}
                cookiePolicy={"single_host_origin"}
                className="googleLogInStyles"
                children={
                  <div className="google-sign-in">Sign up with Google</div>
                }
              />
            </div>
            <div className="sign-up" style={{ paddingTop: "78px" }}>
              <div style={{ display: "inline-block" }}>
                Already have an account?
              </div>
              <div
                onClick={() => onLogInClicked()}
                style={{
                  paddingLeft: "5px",
                  cursor: "pointer",
                  display: "inline-block",
                  color: "#A4C772",
                }}
              >
                Log In
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(EmployeeRegisterMainPage);
