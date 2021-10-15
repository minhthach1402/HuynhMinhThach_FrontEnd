import React from "react";
import Banner from "./Banner";
import BrandSlider from "./BrandSlider";
import "./Content.css";
import ContrackWork from "./ContrackWork";
import Essential from "./Essential";
import GetStarted from "./GetStarted";
import Profile from "./Profile";
import QuickLyEasy from "./QuickLyEasy";
import SafeSecure from "./SafeSecure";
import SimpleSlider from "./SliderBox";

const Content = props => {
    return <div className="wrap__content">
        <Banner/>
        <QuickLyEasy/>
        <ContrackWork/>
        <SimpleSlider/>
        <Essential/>
        <GetStarted/>
        <SafeSecure/>
        <BrandSlider/>
        <Profile/>
        
    </div>
}

export default Content;

