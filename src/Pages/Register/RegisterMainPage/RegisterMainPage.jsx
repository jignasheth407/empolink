import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import TextBox from "../../../Components/TextField/Textfield";
// import Button from '@material-ui/core/Button';
import Button from "../../../Components/Button/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "../../LoginPage/LoginPage.scss";
import "./RegisterMainPage.scss";
import { withRouter } from "react-router-dom";
import MicrosoftLogin from "react-microsoft-login";
import { ValidateEmail } from "../../../utils/validations";

class RegisterMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      showPassword: false,
      confirmPassword: "",
      showConfirmPassword: false,
      username: null,
      isUsernameValid: true,
      passwordDoesNotMatch: false,
      emailError: false,
      signInWithGoogleData: {},
    };
  }

  onLogInClicked() {
    this.props.history.push("/login");
  }

  onSignUpClicked() {
    if (!ValidateEmail(this.state.username)) {
      this.setState({ isUsernameValid: false });
    }
    if (
      this.state.password !== this.state.confirmPassword ||
      this.state.password.length < 6
    ) {
      this.setState({ passwordDoesNotMatch: true });
    }
    if (
      this.state.password === this.state.confirmPassword &&
      this.state.password.length >= 6 &&
      ValidateEmail(this.state.username)
    ) {
      this.props.onSignUpClicked(
        this.state.username,
        this.state.password,
        "manual",
        this.state.signInWithGoogleData
      );
    }
  }

  render() {
    const authHandler = (err, data) => {
      console.log(err, data);
    };

    const onNewPasswordEntered = (event) => {
      this.setState({ password: event.target.value });
    };

    const responseGoogle = (response) => {
      this.setState({ signInWithGoogleData: response });
      this.props.onSignUpClicked(
        this.state.username,
        this.state.password,
        "google",
        response
      );
    };
    return (
      <div className="loginPageWrapper">
        <div className="empoLinkImgStyles">
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
                  this.setState({ isUsernameValid: true });
                  this.setState({ username: event.target.value });
                }}
                value={this.state.username}
                width={"100%"}
                error={!this.state.isUsernameValid}
              />
            </div>
            <div style={{ paddingBottom: "18px" }}>
              <TextBox
                label={"Password * (Min. 6 Characters)"}
                type={this.state.showPassword ? "text" : "password"}
                onChange={(event) => {
                  this.setState({ passwordDoesNotMatch: false });
                  onNewPasswordEntered(event);
                }}
                width={"100%"}
                error={this.state.passwordDoesNotMatch}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          this.setState({
                            showPassword: !this.state.showPassword,
                          })
                        }
                        edge="end"
                      >
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div style={{ paddingBottom: "9px" }}>
              <TextBox
                label={"Confirm Password *"}
                type={this.state.showConfirmPassword ? "text" : "password"}
                onChange={(event) => {
                  this.setState({ passwordDoesNotMatch: false });
                  this.setState({ confirmPassword: event.target.value });
                }}
                width={"100%"}
                error={this.state.passwordDoesNotMatch}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          this.setState({
                            showConfirmPassword:
                              !this.state.showConfirmPassword,
                          })
                        }
                        edge="end"
                      >
                        {this.state.showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
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
                onClick={() => this.onSignUpClicked()}
                color={["#2699fb", "#134d7e"]}
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
              {/* <GoogleLogin
                                clientId="1080303502452-90u0ouis2kuoljcr8o7mda2s2632i6l7.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                className='googleLogInStyles'
                                children={<div className="google-sign-in">Sign up with Google</div>}
                            /> */}
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
                  onClick={() => this.onLogInClicked()}
                  style={{
                    paddingLeft: "5px",
                    cursor: "pointer",
                    display: "inline-block",
                    color: "#5bb2fc",
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
  }
}
export default withRouter(RegisterMainPage);
