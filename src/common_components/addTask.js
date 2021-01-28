import React, {Component} from 'react';
import './modal.css';
import TextField from '@material-ui/core/TextField';
import {
    AiOutlineClose,
    AiFillCamera ,
    AiFillCheckCircle
} from 'react-icons/ai';
import {DateBox} from "devextreme-react/date-box";

const ModalSelect = (props) => {
    return (
        <label className="modal__label">
            <span>
                {props.label}
            </span>
            <select onChange={props.setValue}>
                <option>-</option>
                {props.values.map((value, index) => {
                    return (
                        <option value={value} key={index}>
                            {value}
                        </option>
                    )
                })}
            </select>
        </label>
    )
}

const InputSelect = (props) => {
    return (
        <labe className="modal__label">
            <span>
                {props.label}
            </span>
            <TextField
                onChange={props.setValue}
                variant="outlined"
                placeholder={props.placeholder}/>
        </labe>
    )
}

const DataPicker = (props) => {
    return (
        <labe className="modal__label">
            <span>
                {props.label}
            </span>
            <DateBox placeholder={props.placeholder}
                     onValueChanged={props.setValue}
                     type="date"/>
        </labe>

    )
}

class AddTaskModal extends Component {

    state = {
        projects: ['Logo Design', 'Website Developments', 'PHP Application'],
        points: [1, 2, 3, 4, 5, 6],
        milestones: ['Site implementation', 'production', 'developing'],
        people: ['John Doe', 'Sara Ann', 'Mike Leon'],
        status: ['In progress', 'To do', 'Testing', 'Done'],
    }

    render() {
        return (
            <div className="modal">
                <header className="modal__header">
                    <span>
                      Add Task
                    </span>
                    <AiOutlineClose onClick={this.props.closeModal}/>
                </header>
                <form className="modal__form">
                    <InputSelect label="Title" placeholder="Title" setValue={this.props.setTitle} />
                    <labe className="modal__label">
                        <span>
                            Description
                        </span>
                        <TextField
                            onChange={this.props.setDescription}
                            placeholder="Description"
                            rowsMax={4}
                            rows={4}
                            variant="outlined"
                            multiline/>
                    </labe>
                    <ModalSelect label="Project" setValue={this.props.setProject} values={this.state.projects}/>
                    <ModalSelect label="Points" setValue={this.props.setPoints} values={this.state.points}/>
                    <ModalSelect label="Milestone" setValue={this.props.setMilestone} values={this.state.milestones}/>
                    <ModalSelect label="Assign to" setValue={this.props.setAssignTo} values={this.state.people}/>
                    <InputSelect label="Collaborators" setValue={this.props.setCollaborators} placeholder="Collaborators"/>
                    <ModalSelect label="Status" setValue={this.props.setStatus} values={this.state.status}/>
                    <InputSelect label="Labels" setValue={this.props.setLabels} placeholder="Labels"/>
                    <DataPicker label="Start date" setValue={this.props.setStartDate} placeholder="YYYY-MM-DD"/>
                    <DataPicker label="Deadline" setValue={this.props.setDeadLine} placeholder="YYYY-MM-DD"/>
                </form>
                <footer className="modal__footer">
                    <button>
                        <AiFillCamera/>
                        Upload File
                    </button>
                    <div>
                        <button className="modal__footer__button" onClick={this.props.closeModal}>
                            <AiOutlineClose/>
                            Close
                        </button>
                        <button className="modal__footer__button" onClick={this.props.save}>
                            <AiFillCheckCircle/>
                            Save & show
                        </button>
                        <button className="modal__footer__button" onClick={this.props.save}>
                            <AiFillCheckCircle/>
                            Save
                        </button>
                    </div>
                </footer>
            </div>
        );
    }
}

export default AddTaskModal;