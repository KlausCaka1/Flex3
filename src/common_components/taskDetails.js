import React, {useState} from 'react';
import {AiFillSetting, AiOutlineClose} from 'react-icons/ai'
import {FaClock} from 'react-icons/fa';
import './detailsModal.css'
import TextField from "@material-ui/core/TextField";
import {Activity, AddCloseSubTask, AddCloseCheckList, CheckLists, SubTask} from "./modalComponents";


const TaskInfo = (props) => {
    const [showCheckList, setShowCheckList] = useState(false);
    const [showSubTask, setShowSubTask] = useState(false);
    return (
        <div className="detailsModal">
            <header className="modal__header">
                <span>Task Info # {props.row.id}</span>
                <AiOutlineClose onClick={props.closeModal}/>
            </header>
            <div style={{overflow: 'auto'}}>
                <div className="detailsModal__info__container">
                    <div className="detailsModal__leftSide">
                        <div>
                            <span>{props.row.title}</span>
                            <span>Project: {props.row.project}</span>
                        </div>
                        <div>
                            <span>Checklist</span>
                            {props.row.checklist.map((value, index) => {
                                return <CheckLists deleteCheckList={props.deleteCheckList} value={value.value} id={value.id} key={index}/>
                            })}
                            <input className="leftSide__input"
                                   placeholder="Add item"
                                   value={props.checkList}
                                   onChange={props.setChecklist}
                                   onClick={() => setShowCheckList(true)}/>
                            {showCheckList ? <AddCloseCheckList addCheckList={props.addCheckList} hideButton={() => setShowCheckList(false)}/> : null}
                        </div>
                        <div>
                            <span>Sub tasks</span>
                            {props.row.subTasks.map((subTask, index) => {
                                return <SubTask value={subTask.value} status={subTask.status} key={index}/>
                            })}
                            <input className="leftSide__input"
                                   onChange={props.setSubTask}
                                   value={props.subTask}
                                   placeholder="Create a sub task"
                                   onClick={() => setShowSubTask(true)}/>
                            {showSubTask ? <AddCloseSubTask addSubTask={props.addSubTask} hideButton={() => setShowSubTask(false)}/> : null}
                            <button className="button__addDependency">
                                Add dependency
                            </button>
                        </div>
                    </div>
                    <div className="detailsModal__rightSide">
                        <div>
                            <img src="https://rise.fairsketch.com/files/profile_images//_file5b24fd7748025-avatar.png"
                                 className="detailsModal__profilePic"/>
                            <div>
                                <span>{props.row.assigned_to}</span>
                                <div className="detailsModal__profile">
                                    <span className="detailsModal__points">{props.row.points}</span>
                                    <span>{props.row.status}</span>
                                </div>
                            </div>
                        </div>
                        <span><strong>Milestone</strong>: {props.row.milestone}</span>
                        <span><strong>Start date</strong>: {props.row.start_date.getFullYear()}-{props.row.start_date.getMonth()}-{props.row.start_date.getDate()}</span>
                        <span><strong>Deadline</strong>: {props.row.dead_line.getFullYear()}-{props.row.dead_line.getMonth()}-{props.row.dead_line.getDate()}</span>
                        <div>
                            <span>Label:</span>
                            <button className="detailsModal__addItem">Add Label</button>
                        </div>
                        <div className="detailsModal__collaborators">
                            <span>Collaborators:</span>
                            <button className="detailsModal__addItem">Add Collaborators</button>
                        </div>
                        <button className="detailsModal__timer">
                            <FaClock/>
                            Start timer
                        </button>
                    </div>
                </div>
                <div className="detailsModal__comment">
                    <img src="https://rise.fairsketch.com/files/profile_images//_file5b24fd7748025-avatar.png"
                         className="detailsModal__commentPic"/>
                    <div>
                        <TextField
                            className="detailsModal__commentInput"
                            placeholder="Description"
                            rowsMax={4}
                            rows={4}
                            variant="outlined"
                            multiline/>
                        <div className="detailsModal__comment__buttonsContainer">
                            <button>
                                Upload File
                            </button>
                            <button>
                                Post Comment
                            </button>
                        </div>
                    </div>
                </div>
                <div className="detailsModal__box-title">
                    <span>Activity</span>
                </div>
                <div>
                    {props.row.activities.map((activity, index) => {
                        return <Activity
                            person={activity.person}
                            time={activity.time}
                            activity={activity.activity}
                            id={props.row.id}
                            title={props.row.title}
                            actions={activity.actions}
                            color={activity.color}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export {
    TaskInfo,
}