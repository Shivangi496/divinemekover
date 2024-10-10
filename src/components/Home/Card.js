import React from "react";

import "./Card.css";

function Card(props){
    return(
        <>
        <div className="card">
        <img src={props.img} alt=""/>
            <h1 >Nature {props.title} Image</h1>
            </div>
        </>
    )
}

export default Card