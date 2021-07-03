import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import "./TextfieldCard.scss"



export default function TextfieldCard(props) {

    const useStylesCard = makeStyles({
        root: {
            width: props.width,
            height: "4.791vw",
            backgroundColor: '#ffffff',
            borderRadius: "1.041vw",
    
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const cardClasses = useStylesCard();

    return (
        <>
            <Card className={cardClasses.root}>
                <div className="specialityDropdownLabel">{props.heading}</div>
                <div className="inputBaseWrapperStyle">
                    <InputBase
                        // className={classes.margin}
                        fullWidth
                        placeholder={props.placeholder}
                        inputProps={{ 'aria-label': 'naked' }}
                    />
                </div>

            </Card></>
    );
}
