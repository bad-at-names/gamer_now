import React from 'react';
import './MainUnit.css';

const MainUnit = (props) => {
    if (props.info[0] === "left") {
        return(
            <div className = "main-row-1">
                <div className = "main-row-col">
                    <img src={ props.info[1] } alt="" className = "service-icon"/>
                </div>
                <div className = "main-row-col">
                    <h1 className = "service-name">
                        { props.info[2] }
                    </h1>
                    <h2 className = "service-desc">
                        { props.info[3] }
                    </h2>
                </div>
            </div>
        );
    }
    else if(props.info[0] === "right") {
        return(
            <div className = "main-row-2">
                <div className="main-row-col">
                    <h1 className = "service-name">
                        { props.info[2] }
                    </h1>
                    <h2 className = "service-desc">
                        { props.info[3] }
                    </h2>
                </div>
                <div className="main-row-col">
                    <img src={ props.info[1] } alt="" className = "service-icon"/>
                </div>
            </div>
        );
    }
}

export default MainUnit;