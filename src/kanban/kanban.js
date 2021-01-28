import React, {Component} from 'react';
import Filter from "../common_components/filter";
import {MyCard, Header} from "../common_components/card";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import './kanban.css';
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import {FcBusinessman} from 'react-icons/fc';
import {DateBox} from "devextreme-react/date-box";

class Kanban extends Component {
    state = {
        element_per_page: 1,
        elements_per_page: [1, 2, 3, 4, 5, 6, 7, 8, 10],
        project: '',
        projects: ['Logo Design', 'Website Developments', 'PHP Application'],
        milestone: '',
        milestones: ['Site implementation', 'production', 'developing'],
        assign_to: '',
        people: ['John Doe', 'Sara Ann', 'Mike Leon'],
        dead_line: new Date('2014-08-18T21:11:54'),
        stage: '',
        status: ['In progress', 'To do', 'Testing'],
    }

    componentDidMount() {
        console.log(this.props.columns);
    }

    render() {
        return (
            <div style={{height: '100%'}}
                 hidden={this.props.value !== this.props.index}>
                <header>
                    <header className="table__header">
                        <form className="table__form">
                            <div>
                                <Filter
                                    className="kanban__filter kanban__pages__select"
                                    placeholder={'-Page-'}
                                    values={this.state.elements_per_page}
                                    setValue={this.setElementPerPage}/>
                                <AiOutlineEyeInvisible className="eye__icon"/>
                            </div>
                            <div>
                                <Filter
                                    className="kanban__filter"
                                    placeholder={'-Projects-'}
                                    values={this.state.projects}
                                    setValue={this.setProject}/>
                                <Filter
                                    className="kanban__filter"
                                    placeholder={'-Milestone-'}
                                    values={this.state.milestones}
                                    setValue={this.setMilestone}/>
                                <Filter
                                    className="kanban__filter"
                                    placeholder={'-Person-'}
                                    values={this.state.people}
                                    setValue={this.setPerson}/>
                                <DateBox placeholder="-Deadline-"
                                         className="table__datepicker"
                                         type="date"/>
                                <Filter
                                    className="kanban__filter"
                                    placeholder={'-Status-'}
                                    values={this.state.status}
                                    setValue={this.setStatus}/>
                            </div>
                        </form>
                        <Filter
                            className="kanban__filter"
                            placeholder={'-Quick Filters-'}
                            values={[]}/>
                    </header>
                </header>
                <div className="kanban__body">
                    <Board onCardDragEnd={this.props.handleCardMove}
                           disableColumnDrag
                           renderCard={({title, status}, {removeCard, dragging}) => (
                               <MyCard title={title} status={status} dragging={dragging}/>
                           )}
                           renderColumnHeader={({title, color}) => (
                               <Header title={title} color={color}/>
                           )}
                    >
                        {this.props.columns}
                    </Board>
                </div>
            </div>
        )
    }
}

export default Kanban;