import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CustomButton from '../Button/Button'
import './WideProfileCard.scss'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import CustomChip from '../Chip/Chip';
import Button from '../Button/Button'


const useStyles = makeStyles({
  root: {
    width: "60.854vw",
    height: "11.406vw",
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

const StyledRating = withStyles({
  iconFilled: {
    color: "#1876d2"
  },
  sizeSmall: {
    fontSize: "1.0416vw"
  },
  iconHover: {
    color: "#ff3d47"
  }
})(Rating);

const WideProfileCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      {/* <Card className={classes.root}> */}
      <div style={{ width: "60.854vw", height: "11.406vw", borderTop: "2px solid #c4c4c4" }}>
        <div>
          <div className="wideCardProfileDetails">
            <div className="wideCardCheckbox">
              <Checkbox
                style={{
                  color: "#c7c7c7",
                }}
                iconStyle={{ color: '#00000' }}
                checked={true}
                onChange={() => {
                  // this.setState({
                  //   isRememberMeChecked: !this.state.isRememberMeChecked,
                  // });
                }}
                name="profileSelected"
              />
            </div>
            <div className="wideCardProfilePicture">
              <img className="wideCardImg" src="https://filmfare.wwmindia.com/content/2020/jun/ranbir-kapoor-thumb-600-x-4501593246759.jpg" alt="Avatar" style={{}} />
            </div>
            <div className="wideCardProfileInfo">
              <div className="wideCardInfoName">Charles Banks</div>
              <div className="wideCardInfoDesignation">UI Designer</div>
              <div className="wideCardInfoLocation">Toronto, Canada</div>
            </div>
          </div>
          <div style={{ display: "inline-block", position: "absolute", marginLeft: "14vw", marginTop: "2.4vw" }} className="wideCardYearsExperiance">3 years</div>
                {/* <div style={{position:"absolute"}}>650</div> */}
          <div style={{ display: "inline-block", position: "absolute", marginLeft: "40vw", marginTop: "2.4vw" }} className="wideCardYearsExperiance">$35</div>
          <div style={{ display: "inline-block", position: "absolute", marginLeft: "45.1vw", paddingTop: "2.28vw" }}>
            <div className="wideCardNumberOfRatings" style={{ marginRight: "0.4vw" }}>4.5</div>
            <div style={{ display: "inline-block" }}>
              <StyledRating
                name="hover-feedback"
                size={"small"}
                value={2}
                precision={0.5}
                readOnly
                fontSize="inherit" />
            </div>
            <div className="wideCardNumberOfRatings" style={{ marginLeft: "0.4vw" }}>(101)</div>
          </div>
        </div>
        <div style={{ marginTop: "2.5vw" }}>
          <div>
            <CustomChip
              outlined={true}
              style={{
                height: "1.77vw",
                borderRadius: "1.0416vw",
                border: "solid 1px #707070",
                backgroundColor: "#ffffff",
                color: "#9a9a9a",
                fontSize: "0.833vw"
              }}
              label={"skill.name"}
            />
            <CustomChip
              outlined={true}
              style={{
                height: "1.77vw",
                borderRadius: "1.0416vw",
                border: "solid 1px #707070",
                backgroundColor: "#ffffff",
                color: "#9a9a9a",
                fontSize: "0.833vw"
              }}
              label={"skill.name"}
            />
            <CustomChip
              outlined={true}
              style={{
                height: "1.77vw",
                borderRadius: "1.0416vw",
                border: "solid 1px #707070",
                backgroundColor: "#ffffff",
                color: "#9a9a9a",
                fontSize: "0.833vw"
              }}
              label={"skill.name"}
            />
            <CustomChip
              outlined={true}
              style={{
                height: "1.77vw",
                borderRadius: "1.0416vw",
                border: "solid 1px #707070",
                backgroundColor: "#ffffff",
                color: "#9a9a9a",
                fontSize: "0.833vw"
              }}
              label={"skill.name"}
            />
            <CustomChip
              outlined={true}
              style={{
                height: "1.77vw",
                borderRadius: "1.0416vw",
                border: "solid 1px #707070",
                backgroundColor: "#ffffff",
                color: "#9a9a9a",
                fontSize: "0.833vw"
              }}
              label={"skill.name"}
            />
            <div style={{ float: "right" }}>
              <Button
                text="Invite"
                width={"6.40625vw"}
                height="2.5vw"
                onClick={() => console.log("")}
                color={["#2699fb", "#134d7e"]} />
            </div>
          </div>

        </div>
      </div>
      {/* </Card> */}
    </>
  )
}

export default WideProfileCard