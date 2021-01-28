import {FcBusinessman} from "react-icons/fc";
import React from "react";

const Header = (props) => {
    return (
        <div className="kanban__col__header" style={{background: props.color}}>
            {props.title}
        </div>
    )
}


const MyCard = (props) => {
    return (
        <div className="kanban__card" onDrag={props.dragging}>
            <div >
                <FcBusinessman/>
                <span>{props.title}</span>
            </div>
        </div>
    )
}


export {
    MyCard,
    Header
}