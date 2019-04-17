
import React, { Component } from "react";
import "./CoachCard.css";

const CoachCard = (props) => {


    return (
        <div className="card">
            <div className="coach-img">
                <img src="https://bnetcmsus-a.akamaihd.net/cms/gallery/GOWK7Y2YLJYC1549652245653.png" alt="coach" className="coach-image" />
            </div>
            <div className="content">
                <h2><b>ShadowBurn</b></h2> 
                <hr></hr>
                <p>Overwatch Flex DPS Player</p>
                <div className="booking-button">
                    <button>Book Coach for $10/hr</button> 
                </div>
            </div>
         
        </div>
    );
}

export default CoachCard;