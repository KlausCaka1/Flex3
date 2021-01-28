import React, {Component} from 'react';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import {DataGrid, ColDef} from '@material-ui/data-grid';
import {DateBox} from 'devextreme-react/date-box';
import Filter from '../common_components/filter';
import './table.css';
import {TaskInfo} from '../common_components/taskDetails';

const columns: ColDef[] = [
    {field: 'id', headerName: 'ID', width: 150},
    {field: 'title', headerName: 'Title', width: 450},
    {field: 'start_date', headerName: 'Start Date', width: 150},
    {field: 'dead_line', headerName: 'Deadline', width: 150},
    {field: 'milestone', headerName: 'Milestone', width: 150},
    {field: 'project', headerName: 'Projects', width: 220},
    {field: 'assigned_to', headerName: 'Assigned to', width: 200},
    {field: 'collaborators', headerName: 'Collaborators', width: 200},
    {field: 'status', headerName: 'Status', width: 150},
];


class Table extends Component {
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
        rowSelected: {},
        showDetails: false,
    }

    setElementPerPage = (event) => {
        this.setState({element_per_page: event.target.value});
    }

    setProject = (event) => {
        this.setState({project: event.target.value});
    }

    setMilestone = (event) => {
        this.setState({milestone: event.target.value});
    }

    setPerson = (event) => {
        this.setState({assign_to: event.target.value});
    }

    setDeadLine = (date) => {
        this.setState({dead_line: date});
    }

    setStatus = (event) => {
        this.setStatus({stage: event.target.value})
    }


    render() {
        return (
            <div
                hidden={this.props.value !== this.props.index}>
                <header className="table__header">
                    <form className="table__form">
                        <div>
                            <Filter
                                className="table__filter table__pages__select"
                                placeholder={'-Page-'}
                                values={this.state.elements_per_page}
                                setValue={this.setElementPerPage}/>
                            <AiOutlineEyeInvisible className="eye__icon"/>
                        </div>
                        <div>
                            <Filter
                                className="table__filter"
                                placeholder={'-Projects-'}
                                values={this.state.projects}
                                setValue={this.setProject}/>
                            <Filter
                                className="table__filter"
                                placeholder={'-Milestone-'}
                                values={this.state.milestones}
                                setValue={this.setMilestone}/>
                            <Filter
                                className="table__filter"
                                placeholder={'-Person-'}
                                values={this.state.people}
                                setValue={this.setPerson}/>
                            <DateBox placeholder="-Deadline-"
                                     className="table__datepicker"
                                     type="date"/>
                            <div className="table__doc">
                                <span className="table__print">Excel</span>
                                <span className="table__print">Print</span>
                            </div>
                            <Filter
                                className="table__filter"
                                placeholder={'-Status-'}
                                values={this.state.status}
                                setValue={this.setStatus}/>
                        </div>
                    </form>
                    <Filter
                        className="table__filter"
                        placeholder={'-Quick Filters-'}
                        values={[]}/>
                </header>
                <div style={{height: (this.props.rows.length * 100) + 'px', width: '100%'}}>
                    <DataGrid rows={this.props.rows} columns={columns} onRowClick={this.props.rowSelected}/>
                </div>
            </div>
        )
    }
}

export default Table;