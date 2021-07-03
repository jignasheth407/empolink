import React from 'react'
import MessageCard from '../../../Components/MessageCard/MessageCard'
import './ThankyouMessage.scss'


const ThankyouMessage = (props) => {
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
                        Thank you for joining Empolink, please <br/>verify your email and sign back.
                    </div>
                } />
        </>
    );
}

export default ThankyouMessage;
