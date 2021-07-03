import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ChooseSignInSignUp.scss";
import Button from "../../../Components/Button/Button";

class ChooseSignInSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="loginPageWrapper">
        <div
          className="empoLinkImgStyles"
          style={{ width: "100%", height: "100%" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                marginLeft: "97px",
                fontSize: "35px",
                letterSpacing: "2.84px",
              }}
            >
              EmpoLink
            </h1>
            <div
              style={{
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "1fr 1fr",
                marginRight: "78px",
              }}
            >
              {/* <Button
                                text='Sign in'
                                width={"100%"}
                                height='56px'
                                onClick = {() => this.props.history.push("/login")}
                                color={["transparent", "transparent"]}
                            /> */}
              <span
                className="loginButton"
                onClick={() => this.props.history.push("/login")}
                style={{
                  height: "56px",
                  width: "100%",
                  textTransform: "none",
                  fontFamily: "Libre Franklin",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                }}
              >
                Sign in
              </span>
              <Button
                text="Sign up"
                width={"100%"}
                height="56px"
                onClick={() =>
                  this.props.history.push("/ChooseEmployerEmployee")
                }
                color={["#2699fb", "#134d7e"]}
              />
            </div>
          </div>
          <div style={{}}>
            <div
              style={{ marginLeft: "24.79%" }}
              className="ChooseSignInSignUp"
            ></div>
            <div
              style={{ marginLeft: "3.958%" }}
              className="ChooseSignInSignUp"
            ></div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default withRouter(ChooseSignInSignUp);
