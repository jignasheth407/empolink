import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CustomButton from '../Button/Button'
import './ShortProfileCard.scss'
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  root: {
    width: "17.4479vw",
    height: "23.281vw",
    borderRadius: 20,
    boxShadow: '3px 6px 26px 0 rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff'
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

const ShortProfileCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      <Card className={classes.root} style={{margin:"1.5vw"}}>
        <div>
          <div className="smallCardScoreBoard">
            <div className="smallCardScore">650</div>
          </div>
          <div className="smallCardStarRating">
            <div>
              <span className="star">&#9733;</span>
              <div className="starRatingNumber" >4.5</div>
              <div className="numberOfStarRating">(101)</div>
            </div>
          </div>
          <div>
            <img className="shortProfileCardImage" src="https://filmfare.wwmindia.com/content/2020/jun/ranbir-kapoor-thumb-600-x-4501593246759.jpg" alt="Avatar" style={{}} />
            <div className="shortCardHeartStyle">
              <span style={{ fontSize:"1.25vw" }} className="star">&#10084;</span>
            </div>
          </div>
          <div style={{ marginLeft: "1.40625vw", marginTop: "0.729vw" }}>
            <div className="smallCardName">
              Charles Banks
            </div>
            <div>
              <div className="smallCardLeftHeading">UI Design</div>
              <div className="smallCardRightHeading">$30</div>
            </div>
            <div style={{ marginTop: "-0.6vw", paddingTop: "0.3125vw" }}>
              <div className="smallCardLeftHeading">UI Design</div>
              <div className="smallCardRightHeading">$30</div>
            </div>
          </div>
          <div style={{ paddingTop: "6.0185vh" }}>
            <div style={{ display: "inline-block", marginLeft: "1.406vw" }}>
              <CustomButton
                text="View Details"
                variant="outlined"
                width={"6.40625vw"}
                height="2.5vw"
                onClick={() => console.log("")} />
            </div>
            <div style={{ display: "inline-block", marginLeft: "2.2645vw" }}>
              <CustomButton
                text="Invite"
                width={"6.40625vw"}
                height="2.5vw"
                onClick={() => console.log("")}
                color={["#2699fb", "#134d7e"]} />
            </div>
          </div>

        </div>
      </Card>
    </>
  )
}

export default ShortProfileCard