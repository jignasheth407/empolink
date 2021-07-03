import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterMainPage from "./RegisterMainPage/RegisterMainPage";
import BusinessInfoPageOne from "./BusinessInfoPageOne";
import BusinessInfoPageTwo from "./BusinessInfoPageTwo";
import BusinessInfoPageThree from "./BusinessInfoPageThree";
import ThankyouMessage from "./ThankyouMessage/ThankyouMessage";
import RegisterOtpPage from "./RegisterOtpPage/RegisterOtpPage";
import LoggedInSuccessfully from "../InitialPages/LoggedInSuccessful/LoggedInSuccessfully";
import { withRouter } from "react-router-dom";
import axios from "axios";
// import { LIVE } from "../../utils/Urls";

class RegisterRedirectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      firstName: "",
      lastName: "",
      companyName: "",
      mobileNumber: "",
      languages: [],
      country: "",
      streetAddress: "",
      unitNumber: "",
      city: "",
      state: "",
      postalcode: "",
      selectedField: "",
      googleApiData: {},
      pages: 0,
      otpError: undefined,
      otpLoading: false,
      registerLoading: false,
    };
  }

  render() {
    const onMainPageSignUpClicked = (username, password, type, data) => {
      this.setState(
        {
          googleApiData: data,
        },
        () => {
          console.log(this.state.googleApiData);
        }
      );
      console.log("Main PAge");
      if (type === "manual") {
        this.setState({
          username: username,
          password: password,
          pages: 1,
        });
        // this.props.history.push('/register/2');
      }
      if (type === "google") {
        this.setState(
          {
            username: username,
            googleApiData: data,
            pages: 1,
          },
          () => {}
        );
        // this.props.history.push('/register/2');
      }
    };

    const onPageOneNextClicked = (
      firstName,
      lastName,
      companyName,
      mobileNumber,
      languages
    ) => {
      this.setState({
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        mobileNumber: mobileNumber,
        languages: languages,
        pages: 2,
      });
      // this.props.history.push('/register/3');
    };

    const onPageTwoNextClicked = (
      country,
      streetAddress,
      unitNumber,
      city,
      state,
      postalcode
    ) => {
      this.setState({
        country: country,
        streetAddress: streetAddress,
        unitNumber: unitNumber,
        city: city,
        state: state,
        postalcode: postalcode,
        pages: 3,
      });
      // this.props.history.push('/register/4');
    };

    const onAgreeAndSignUpClicked = async (
      selectedField,
      selectedSpecialities
    ) => {
      this.setState({ selectedField: selectedField, 
                      registerLoading: true }, () => {});
      // this.props.history.push('/register/5');

      console.log(this.state);
      console.log(selectedField);
      console.log(selectedField);

      const body = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        email: this.state.username,
        phone: this.state.mobileNumber,
        registration_type: "email",
        company_name: this.state.companyName,
        languages: this.state.languages,
        location: {
          ip: "20.24.250.230",
          country: "India",
        },
        address: {
          unit_number: this.state.unitNumber,
          street_number: this.state.streetAddress,
          city: this.state.city,
          state: this.state.state,
          country: this.state.country,
          postal_code: this.state.postalcode,
        },

        field: selectedField,
        specialities: selectedSpecialities,
        is_terms_accepted: "true",
      };

      console.log("body");
      console.log(body);

      axios
        .post("http://3.97.40.116:3000/api/auth/register-employer", body)
        .then((response) => {console.log(response.data)
              this.setState({registerLoading: false})
        })
        .catch((err) => {console.log("err")
        this.setState({registerLoading: false})
      });
      this.setState({pages: 4})
    };

    const onOtpClicked = (otp) => {
      axios
        .post(`http://3.97.40.116:3000/api/auth/verify-otp`, {
          email: this.state.username,
          otp,
        })
        .then((response) => {
          console.log(response);
          if (response.data.status === 1) {
            // alert(response.message)
            this.setState({ pages: 5 });
          }
        })
        .catch((err) => console.log(err));
    };
    const resendOtp = async () => {
      axios
        .post(`http://3.97.40.116:3000/api/auth/resend-verify-otp`, {
          email: this.state.username,
        })
        .then((response) => {
          if (response.status === 1) {
            alert("OTP resend");
          }
        })
        .catch((err) => console.log(err));
    };

    const pages = [
      <RegisterMainPage onSignUpClicked={onMainPageSignUpClicked} />,
      <BusinessInfoPageOne
        apiData={this.state.googleApiData}
        onPageOneNextClicked={onPageOneNextClicked}
      />,
      <BusinessInfoPageTwo onPageTwoNextClicked={onPageTwoNextClicked} />,
      <BusinessInfoPageThree
        onAgreeAndSignUpClicked={onAgreeAndSignUpClicked}
        registerLoading={this.state.registerLoading}
      />,
      <RegisterOtpPage
        onOtpClicked={onOtpClicked}
        otpError={this.state.otpError}
        otpLoading={this.state.otpLoading}
        resendOtp={resendOtp}
      />,
      <ThankyouMessage />,
      <LoggedInSuccessfully />,
    ];

    return <>{pages[this.state.pages]}</>;
  }
}
export default withRouter(RegisterRedirectionPage);
