import React from 'react';
import './Showcard.css';
const Showcard = (props)=>{
        return(
            <div>
                <div className={props.details.css && props.viewport>2 ? props.details.css: "parent"}>
                <img  className={props.details.css && props.viewport>2 ? "imgmedium": "img"} src ={props.details.img}></img>
                <label className="">{props.details.item} : </label>
                <label className="price">{props.details.price}</label>
                </div>
            </div>
        )
    
}
export default Showcard;