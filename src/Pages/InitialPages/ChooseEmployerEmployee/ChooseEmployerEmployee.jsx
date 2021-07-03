import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import '../ChooseSignInSignUp/ChooseSignInSignUp.scss'
import Button from "@material-ui/core/Button";

class ChooseEmployerEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onEmployerClicked(){
        this.props.history.push('/register')
    }

    onEmployeeClicked(){
        this.props.history.push('/employee/register')
    }

    render() {
        return (
            <div className="loginPageWrapper">
                <div className="empoLinkImgStyles" style={{ width: '100%', height: '100%'}}>
                    
                        <h1 style={{ marginLeft: '97px', fontSize: '35px', letterSpacing: '2.84px' }} >EmpoLink</h1>
                    <div style={{ paddingTop: '114px', height: '100%' }} >
                        <div style={{marginLeft:"auto",marginRight:"auto",height: '100%',display:"flex",justifyContent:"center" }}>
                            
                            <div className="ChooseSignInSignUp" >
                                <div className="ImagePlaceHolder"></div>
                                <Button onClick={() => this.onEmployeeClicked()} block style={{width:"100%",backgroundColor:"#d6af12",color:"#fff",fontFamily: "Libre Franklin",fontWeight: "bold"}}>Employee</Button>
                            </div>
                            <div className="ChooseSignInSignUp" style={{marginLeft:"76px"}}>
                                <div className="ImagePlaceHolder"></div>
                                <Button onClick={() => this.onEmployerClicked()} block style={{width:"100%",backgroundColor:"#d6af12",color:"#fff",fontFamily: "Libre Franklin",fontWeight: "bold"}}>Employer</Button>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default withRouter(ChooseEmployerEmployee);


