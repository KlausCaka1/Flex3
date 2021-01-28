import React from "react";
import {AiOutlineClose, AiOutlineCheck} from 'react-icons/ai';

const Activity = (props) => {
    return (
        <div className="detailsModal__activity" key={props.index}>
            <img src="https://rise.fairsketch.com/files/profile_images//_file5b24fd7748025-avatar.png"
                 className="detailsModal__profilePic"/>
            <div>
                <span className="detailsModal__activity__time"><strong>{props.person}</strong>
                    {props.time.getFullYear()}-{props.time.getMonth()}-{props.time.getDate()}
                </span>
                <div>
                    <span className="detailsModal__activity__action"
                          style={{background: props.color}}>
                        {props.activity}
                    </span>
                    <span>Task: #{props.id} - {props.title}</span>
                    <ul>
                        {props.actions.map((action, index) => {
                            return (
                                <li key={index}>
                                    {action}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const CheckLists = (props) => {
    return (
        <div className="modal__subAddElement">
            <label>
                <input type="checkbox"/>
                <span>{props.value} {props.id}</span>
            </label>
            <AiOutlineClose onClick={() => props.deleteCheckList(props.id)}/>
        </div>
    );
}

const SubTask = (props) => {
    return (
        <div className="modal__subAddElement">
            <label>
                <input type="checkbox"/>
                <span>{props.value}</span>
            </label>
            <span>{props.status}</span>
        </div>
    )
}

const AddCloseCheckList = (props) => {
    return (
        <div style={{ display: 'flex'}}>
            <button className="modal__createButton" onClick={props.addCheckList}>
                <AiOutlineCheck/>
                Add
            </button>
            <button className="modal__createButton"
                    onClick={props.hideButton}>
                <AiOutlineClose/>
                Cancel
            </button>
        </div>
    )
}


const AddCloseSubTask = (props) => {
    return (
        <div style={{ display: 'flex'}}>
            <button className="modal__createButton" onClick={props.addSubTask}>
                <AiOutlineCheck/>
                Add
            </button>
            <button className="modal__createButton"
                    onClick={props.hideButton}>
                <AiOutlineClose/>
                Cancel
            </button>
        </div>
    )
}

export {
    Activity,
    CheckLists,
    SubTask,
    AddCloseCheckList,
    AddCloseSubTask
}