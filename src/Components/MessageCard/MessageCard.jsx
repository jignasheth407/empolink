import React from 'react'
import './MessageCard.scss'

const MessageCard = (props) => {
    return (
        <div className={props.secondary?"secondaryBackgroundOfPage":"backgroundOfPage"} style={{ width: "100%" }}>
            <div className="empolinkCardBackgroundHeading">Empolink</div>
            <div style={{ marginTop: props.marginTop, width: props.width, height: props.height, minWidth: props.minWidth, maxWidth: props.maxWidth }} className="cardWrapper">
                {props.heading ?
                    <div>
                        <div className="forgotPasswordHeadingCard">
                            {props.heading}
                        </div>
                        {props.onClose ? <div className="closeWrapper"><span onClick = {props.onClose} class="close"></span></div>: null}
                        <div className = "bottomHeadingLine"></div>                        
                    </div>
                    : null}
                {props.content}
            </div>
        </div>
    );
}

export default MessageCard;
