import React from "react";
import Slider from "./slider";

const Slidenew = () => {
    return<>
    <div className="container pro-main-text">
        <div className="main-text-pro1" >
            <h1 className="pro-text montserrat-uniquifier">CRNR PRO TEAM</h1>
            <p className="inter-uniquifier pro-para">World Champion athletes rely on Combat Corner from the UFC Welterweight 
            World Champion Belal Muhammad to 4x IFMA World Champion and 2024 Olympic 
            Participant Tierra Brandt to world champions in the UFC, PFL, Bellator, 
            BKFC, and more.</p>
            <p className="inter-uniquifier pro-para">With CRNR, experience the same peak performance and unbeatable quality 
            that champion athletes rely on every day.</p>
        </div>
        <Slider />
    </div>
    </>
}
export default Slidenew;