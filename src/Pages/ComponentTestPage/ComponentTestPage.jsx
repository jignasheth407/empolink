import React from 'react'
import './ComponentTestPage.scss';
import CustomizedSelects from "../../Components/MaterialDropdownComponent/MaterialDropdownComponent"
import Slider from "../../Components/Slider/Slider"
import TextfieldCard from '../../Components/TextfieldCard/TextfieldCard';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import  WideProfileCard from '../../Components/WideProfileCard/WideProfileCard'
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ShortProfileCard from '../../Components/ShortProfileCard/ShortProfileCard';



const ComponentTestPage = (props) => {

    const [hourlyRate, setHourlyRate] = React.useState([10, 30]);
    const [rating, setRating] = React.useState([3, 5]);
    const [experience, setExperience] = React.useState([2, 5]);
    const [isWideCardSelected, setIsWideCardSelected]= React.useState(true)

    const handleSliderChange = (event, newValue) => {
        setHourlyRate(newValue);
    }

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    }

    const handleExperienceChange = (event, newValue) => {
        setExperience(newValue);
    }

    const displayRateRange = (
        <div className="displayDynamicRateStyles">
            {'$' + hourlyRate[0] + " - " + '$' + hourlyRate[1]}
        </div>
    )

    const displayRatingRange = (
        <div className="displayDynamicRateStyles">
            {rating[0] + " stars" + " - " + rating[1] + " stars"}
        </div>
    )

    const displayExperienceRange = (
        <div className="displayDynamicRateStyles">
            {experience[0] + " years" + " - " + experience[1] + " years"}
        </div>
    )

    return (
        <div>
            <div style={{ width: "29.63vw", position: "absolute", borderRight: "solid 1px #dedede", height: "auto" }}>
                <div className="advancedSearchHeading">Advanced Search</div>
                <div className="fieldOfWorkHeading">Field of work :</div>
                <div className="fieldOfWorkSelected">App, Software Development & Web Design</div>
                <div style={{ marginLeft: '5.416vw', marginTop: "3.489vw" }}><CustomizedSelects /></div>

                <div style={{ marginLeft: '5.416vw', marginTop: "3.489vw" }}>
                    <TextfieldCard
                        heading={<div style={{ marginLeft: "0.5vw", marginTop: "0.2vw" }}>Where</div>}
                        placeholder="City, Province/State, or Country"
                        width="18.80vw"
                    />
                </div>
                <div className="worldWide">
                    Worldwide
                </div>
                <div className="maps">

                </div>
                <div className="hourlyRateSlider">
                    <Slider
                        heading={"Hourly Rate"}
                        value={hourlyRate}
                        handleChange={handleSliderChange}
                        rangeDisplay={displayRateRange}
                        min={0}
                        max={100}
                        marks={[
                            {
                                value: 0,
                                label: '$0',
                            },
                            {
                                value: 50,
                                label: '$50',
                            },
                            {
                                value: 100,
                                label: '$100+',
                            },
                        ]}
                    />
                </div>
                <div className="ratingSlider">
                    <Slider
                        heading={"Rating"}
                        value={rating}
                        handleChange={handleRatingChange}
                        rangeDisplay={displayRatingRange}
                        min={0}
                        max={5}
                        marks={[
                            {
                                value: 0,
                                label: '0',
                            },
                            {
                                value: 1,
                                label: '1',
                            },
                            {
                                value: 2,
                                label: '2',
                            },
                            {
                                value: 3,
                                label: '3',
                            },
                            {
                                value: 4,
                                label: '4',
                            },
                            {
                                value: 5,
                                label: '5',
                            },
                        ]}
                    />
                </div>
                <div className="experienceSlider">
                    <Slider
                        heading={"Experience"}
                        value={experience}
                        handleChange={handleExperienceChange}
                        rangeDisplay={displayExperienceRange}
                        min={0}
                        max={20}
                        marks={[
                            {
                                value: 0,
                                label: '0',
                            },
                            {
                                value: 10,
                                label: '10',
                            },
                            {
                                value: 20,
                                label: '20+',
                            },
                        ]}
                    />
                </div>
            </div>
            {/* <WideProfileCard/> */}
            <div style={{ marginLeft: "29.63vw", position: "absolute" }}>
                <div className="topProfileSearchBar">
                    <TextfieldCard
                        heading={<div style={{ marginLeft: "0.5vw", marginTop: "0.2vw" }}>Search</div>}
                        width="32.70vw"
                    />
                </div>
                <div style={{ marginLeft: "4.04vw", marginTop:"1.68vw" }}>
                    <div className="wideCardHeading" >
                        <div className="employeeNameHeading" style={{ opacity: isWideCardSelected ? "1": "0"}}>
                            <div style={{ display: "inline-block" }}> Employee Name </div>
                            <div style={{ display: "inline-block", marginTop: "-0.5vw" }}><ArrowDropDownIcon /></div>
                        </div>
                        <div className="experianceHeading" style={{ opacity: isWideCardSelected ? "1": "0"}}>
                            <div style={{ display: "inline-block", marginLeft:"9.6vw" }}>Experience</div>
                            <div style={{ display: "inline-block", marginTop: "-0.5vw" }}><ArrowDropDownIcon /></div>
                        </div>
                        <div className="scoreHeading" style={{ opacity: isWideCardSelected ? "1": "0"}}>
                            <div style={{ display: "inline-block", marginLeft:"5.6vw" }}>Score</div>
                            <div style={{ display: "inline-block", marginTop: "-0.5vw" }}><ArrowDropDownIcon /></div>
                        </div>
                        <div className="hourlyRateHeading" style={{ opacity: isWideCardSelected ? "1": "0"}}>
                            <div style={{ display: "inline-block", marginLeft:"5.6vw"  }}>Hourly Rate</div>
                            <div style={{ display: "inline-block", marginTop: "-0.5vw" }}><ArrowDropDownIcon /></div>
                        </div>
                        <div style={{ marginLeft:"9vw", fontSize:"1.25vw", color: isWideCardSelected ? "#1c1c1c": "#c4c4c4"}} onClick={()=>{setIsWideCardSelected(true)}}>
                            <ViewListIcon
                            fontSize="inherit"
                            />
                        </div>
                        <div style={{ marginLeft:"1.6vw", fontSize:"1.25vw", color: isWideCardSelected ?  "#c4c4c4": "#1c1c1c"}} onClick={()=>{setIsWideCardSelected(false)}}>
                            <ViewModuleIcon
                            fontSize="inherit"
                            />
                        </div>
                    </div>
                    {
                        isWideCardSelected ? <div>
                        <WideProfileCard/>
                        <WideProfileCard/>
                        <WideProfileCard/>
                        <WideProfileCard/>
                        <WideProfileCard/>
                        <WideProfileCard/>
                        <WideProfileCard/>
                        <WideProfileCard/>
                        <WideProfileCard/>
                        <WideProfileCard/>
                        <WideProfileCard/>
                        <WideProfileCard/>
                        </div> :
                        <div style = {{display:"flex", width:"62vw", height:"auto", flexWrap:"wrap"}}>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>
                            <ShortProfileCard/>

                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default ComponentTestPage