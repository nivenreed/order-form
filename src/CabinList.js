import React from 'react';
import "./App.css";
import cabinData from "./data/cabin";

 

function Tweet(props){
    return(
        <div className="tweet">
            <h3>Cabin Names</h3>   
               {props.cabin}
        </div>
    )
}
export default Tweet;
