import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";


export const Contact  = (props) => {

    return (
        <div>
            <Header/>
            <h1 style={{textAlign: "center",textAnchor: "middle"}}>This is our contact details</h1><br/>
            <span style={{color: "blueviolet", fontFamily: "-moz-initial"}}>Phone: 0731-2532117</span><br/><br/>
            <span style={{color: "darkred", fontFamily: "cursive"}}>Mobile no: 99993315877</span><br/><br/>
            <span style={{color: "purple"}}>Email Id:  surya@sam_info.in</span><br/>
            <Footer/>
        </div>
    )

};
