import './App.scss';
import LoginPage from './Pages/LoginPage/LoginPage'
import EmployeeRegisterRedirectionPage from './Pages/EmployeeRegister/EmployeeRegisterRedirectionPage'
import RegisterRedirectionPage from './Pages/Register/RegisterRedirectionPage'
import ForgotPassword from './Pages/ForgotPasswordPages/ForgotPassword'
import UpdatePasswordPage from './Pages/ForgotPasswordPages/UpdatePasswordPage/UpdatePasswordPage'
import VerifyEmail from './Pages/ForgotPasswordPages/VerifyEmailPage/VerifyEmail'
import ThankyouMessage from './Pages/Register/ThankyouMessage/ThankyouMessage'
import ProtectedRoute from './Components/routes/ProtectedRoute'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ChooseSignInSignUp from '../src/Pages/InitialPages/ChooseSignInSignUp/ChooseSignInSignUp'
import ChooseEmployerEmployee from './Pages/InitialPages/ChooseEmployerEmployee/ChooseEmployerEmployee';
import LoggedInSuccessfully from './Pages/InitialPages/LoggedInSuccessful/LoggedInSuccessfully'
import ComponentTestPage from './Pages/ComponentTestPage/ComponentTestPage'
import { HomePageLayout } from './Components/HomePageLayhout/HomePageLayout';

function App() {
  // const history = useHistory();
  // const signInPage = () => {
  //   history.push("/login")
  // }
  // const signUpPage = () => {
  //   history.push("/ChooseEmployeeEmployer")
  // }
  // const employeePage = () => {
  //   history.push("/employee/register")
  // }
  // const employerPage = () => {
  //   history.push("/register")
  // }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* <LoginPage/> */}
      <Router>
        <div>
        
          <Switch>
            <Route exact path="/empolink" component = {ChooseSignInSignUp}/>
            <Route exact path="/login" component = {LoginPage}/>
            <Route exact path="/register" component = {RegisterRedirectionPage}/>
            <Route exact path="/forgotpassword" component = {ForgotPassword}/>
            <Route exact path="/update-password" component = {UpdatePasswordPage}/>
            <Route exact path="/verify-email" component = {VerifyEmail}/>
            <Route exact path="/thankyou-message" component = {ThankyouMessage}/>
            <Route exact path="/employee/register" component = {EmployeeRegisterRedirectionPage}/>
            <Route exact path="/ChooseSignInSignUp" component = {ChooseSignInSignUp}/>
            <Route exact path="/ChooseEmployerEmployee" component = {ChooseEmployerEmployee}/>
            <Route exact path="/LoggedInSuccessfully" component = {LoggedInSuccessfully}/>
            <Route exact path="/test" component = {ComponentTestPage}/>
            <Route exact path="/home">
              <HomePageLayout/>

            </Route>
            <ProtectedRoute exact path="/new" component = {<div>This is not protected</div>}/>
            {/* <Route path="/">
            <Home />
          </Route> */}
          </Switch>
        </div>
      </Router>
      {/* <h1>Welcome to EmpoLink</h1> */}
      {/* <LoginPage/> */}
      {/* <RegisterPage/> */}
      {/* <StripePaymentsPage/> */}
    </div>
  );
}

export default App;
