import React from 'react'
import MessageCard from '../../../Components/MessageCard/MessageCard'
import '../../../Pages/Register/ThankyouMessage/ThankyouMessage.scss'


const LoggedInSuccessfully = (props) => {
    return (
        <>
            <MessageCard
                width={'47.08%'}
                height={'317px'}
                minWidth={'500px'}
                maxWidth={'1100px'}
                marginTop={'339px'}
                content={
                    <div className="registerThankyouMessage">
                        Logged In Successfully...
                    </div>
                } />
        </>
    );
}

export default LoggedInSuccessfully;
