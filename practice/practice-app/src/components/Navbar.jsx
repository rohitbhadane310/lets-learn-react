import React from "react";
import '../App.css';

export default function Navbar(){
    return(
        <>
        <div className="Nav">
        <a href="/">Home</a>
        <a href="/">about</a>
        <a href="/">contact</a>
        <a href="/">feedback</a>
        </div>

        <div className="container">
            <div className="heading">
                <h1>This is my first website on react</h1>
            </div>
            <div className="para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam impedit eius consequuntur odio, cumque illo itaque harum et unde nulla veritatis eaque expedita quam facere rem, totam accusamus, culpa voluptas.s</p>
                <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" />
            </div>
        </div> 
        </>
    )
}