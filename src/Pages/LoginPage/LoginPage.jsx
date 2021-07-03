import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import TextBox from "../../Components/TextField/Textfield";
// import Button from '@material-ui/core/Button';
import CustomButton from "../../Components/Button/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { APIHelper } from "../../utils/ApiHelper";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./LoginPage.scss";
import { withRouter } from "react-router-dom";
import { ValidateEmail } from "../../utils/validations";
import { MicrosoftLogin } from "react-microsoft-login";
import { CONSTANTS } from '../../utils/constants'
import ErrorIcon from '@material-ui/icons/Error';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      isRememberMeChecked: false,
      showPassword: false,
      showLoginError: false,
      isUsernameValid: true,
    };
  }

  onSignUpClicked() {
    this.props.history.push(CONSTANTS.ROUTES_CHOOSE_EMPLOYER_EMPLOYEE);
  }

  render() {
    const handleOnLogin = () => {
      console.log("handleLogin");
      console.log(this.state.username, this.state.password);

      const params = new URLSearchParams();
      params.append("email", this.state.username);
      params.append("password", this.state.password);
      let headers = {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      };
      APIHelper.postMethod(
        "http://3.97.40.116:3000/api/auth/login",
        params,
        headers
      ).then((response) => {
        if (response["status"] === 1) {
          console.log("Logged In");
          console.log(response.data.token);
          localStorage.setItem("itemName", response.data.token);
          this.props.history.push("/LoggedInSuccessfully");
          // localStorage.getItem('itemName')
        }
        if (response["status"] === 0) {
          this.setState({ showLoginError: true });
        }
      });
    };

    const onUserNameEntered = (event) => {
      this.setState({ username: event.target.value });
    };

    const authHandler = (err, data) => {
      console.log(err, data);
    };

    const responseGoogle = (response) => {
      console.log(response);
      this.props.history.push("./LoggedInSuccessfully");
    };

    const onForgotPasswordClicked = () => {
      this.props.history.push("/forgotpassword");
    };

    const onPasswordEntered = (event) => {
      this.setState({ isUsernameValid: ValidateEmail(this.state.username) });
      this.setState({ password: event.target.value });
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
          <div style={{ width: "86%" }}>
            <img
              alt="empolink"
              class="imgStyles"
              src="https://cdn.animaapp.com/projects/609e47554a5b8cd6aa2fa687/releases/609e47894a5b8cd6aa2fa68a/img/clip-1062-1@1x.png"
            />
          </div>
        </div>
        <div className="loginPage">
          <div className="loginCard">
            <h1 className="empolink" style={{ color: "#414141" }}>
              Log In
            </h1>
            <div style={{ paddingBottom: "18px" }}>
              <TextBox
                required={true}
                label={"Email Address"}
                onChange={(event) => onUserNameEntered(event)}
                value={this.state.username}
                width={"100%"}
                error={!this.state.isUsernameValid}
              />
            </div>
            <div style={{ paddingBottom: "9px" }}>
              <TextBox
                required={true}
                label={"Password"}
                type={this.state.showPassword ? "text" : "password"}
                onChange={(event) => onPasswordEntered(event)}
                width={"100%"}
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
            <div>
              <div style={{ display: "inline-block" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{
                        color: "#c7c7c7",
                      }}
                      checked={this.state.isRememberMeChecked}
                      onChange={() => {
                        this.setState({
                          isRememberMeChecked: !this.state.isRememberMeChecked,
                        });
                      }}
                      name="rememberMe"
                    />
                  }
                  label={<div className="rememberMe"> Remember me </div>}
                />
              </div>
              <div
                onClick={() => onForgotPasswordClicked()}
                className="sign-up"
                style={{
                  paddingTop: "8px",
                  cursor: "pointer",
                  display: "inline-block",
                  color: "#5bb2fc",
                  float: "right",
                }}
              >
                Forgot?
              </div>
            </div>
            {/* <Button variant="outlined" color="primary" onClick={handleOnLogin}>
                    Login
                </Button> */}

            {this.state.showLoginError ?
              <div className="loginError">
                <ErrorIcon style={{ fontSize: '1.1vw', marginBottom: '-2.5px', marginRight: '2px',  }}/>
                We don't recognize your username and/or password.<br /> <div style={{ marginLeft: '1.4vw', display: "inline-block"  }}>Please try again or</div>
              <span style={{ textDecoration: 'underline', marginLeft: '3px' }}>Forgot</span></div> :
              null}
            <div style={{ paddingBottom: '80px', paddingTop: '21px' }} >
              <CustomButton
                text='Log in'
                width={"100%"}
                height='56px'
                onClick={() => handleOnLogin()}
                color={["#2699fb", "#134d7e"]}
              // color = {["#a4c772", "#4e8400"]}
              />
            </div>
            <div style={{ width: "100%" }}>
              <hr className="left-line" />
              <div className='diffOrStyle' style={{ marginLeft: "3.5%", display: "inline-block" }}>{"Or"}</div>
              <hr className="right-line" />
            </div>
            <div style={{ marginTop: "80px" }}>
              {/* <GoogleLogin
                                clientId="1080303502452-90u0ouis2kuoljcr8o7mda2s2632i6l7.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                className='googleLogInStyles'
                                children={<div className="google-sign-in">Sign in with Google</div>}
                            /> */}
              <div style={{ width: "100%" }}>
                {/* 
                                <Button
                            variant="outlined"
                            style={{marginBottom: '1rem', textTransform: 'initial' , width: '100%'}}
                            startIcon={                                    <div className="microsoft"></div>
                        }
                        >

                            Sign in with
                                Google
                        </Button> */}
              </div>
              <div style={{ marginTop: "18px" }}>
                <GoogleLogin
                  clientId="1080303502452-90u0ouis2kuoljcr8o7mda2s2632i6l7.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={() => responseGoogle}
                  onFailure={() => responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  className="googleLogInStyles"
                  children={
                    <div className="google-sign-in">Sign in with Google</div>
                  }
                />
                {/* registered via ersharma.yash@gmail.com */}
              </div>
              <div style={{ marginTop: "18px" }}>
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
              </div>
              <div style={{ marginTop: "89px" }} className="sign-up">
                <div>
                  <div style={{ display: "inline-block" }}>
                    Don't have an account yet?
                  </div>
                  <div
                    onClick={() => {
                      this.onSignUpClicked();
                    }}
                    style={{
                      paddingLeft: "5px",
                      cursor: "pointer",
                      display: "inline-block",
                      color: "#5bb2fc",
                    }}
                  >
                    Sign Up
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LoginPage);
