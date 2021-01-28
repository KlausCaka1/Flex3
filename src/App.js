import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from './table/table';
import Kanban from "./kanban/kanban";
import {AiFillPlusCircle} from 'react-icons/ai';
import Board, {moveCard} from "@lourenci/react-kanban";
import AddTaskModal from "./common_components/addTask";
import {TaskInfo} from "./common_components/taskDetails";


class App extends Component {
    state = {
        modalVisible: false,
        value: 0,
        rows: [
            {
                id: 1,
                title: 'Cant add new tasks',
                start_date: new Date('2020-05-21'),
                dead_line: new Date('2020-08-30'),
                milestone: '-',
                project: 'Logo Design',
                assigned_to: 'Jhon Doe',
                collaborators: '-',
                status: 'In Progress',
                points: 1,
                checklist: [],
                subTasks: [],
                activities: [
                    {
                        person: 'Jhone Doe',
                        time: new Date('2020-05-21'),
                        activity: 'Added',
                        color: '#0ABB87',
                        actions: []
                    }
                ]
            },
            {
                id: 2,
                title: 'Add tasks',
                start_date: new Date('2020-02-21'),
                dead_line: new Date('2020-05-30'),
                milestone: '-',
                project: 'Website Development',
                assigned_to: 'Ana Doe',
                collaborators: '-',
                status: 'In Progress',
                points: 1,
                checklist: [],
                subTasks: [],
                activities: [
                    {
                        person: 'Ana Doe',
                        time: new Date('2020-02-21'),
                        activity: 'Added',
                        color: '#0ABB87',
                        actions: []
                    }
                ]

            },
            {
                id: 3,
                title: 'Add some cool Apis',
                start_date: new Date('2020-01-21'),
                dead_line: new Date('2020-04-30'),
                milestone: '-',
                project: 'Website Development',
                assigned_to: 'Sara Doe',
                collaborators: '-',
                status: 'To do',
                points: 1,
                checklist: [],
                subTasks: [],
                activities: [
                    {
                        person: 'Sara Doe',
                        time: new Date('2020-01-21'),
                        activity: 'Added',
                        color: '#0ABB87',
                        actions: []
                    }
                ]
            }
        ],
        board: {columns: []},
        title: '',
        description: '',
        project: '',
        points: 0,
        milestone: '',
        assign_to: '',
        collaborators: [],
        status: '',
        statuses: ['To do', 'In Progress', 'Testing', 'Done'],
        colors: ['#ffbb45', '#488eff', '#b952ff', '#5dffc9'],
        labels: '',
        start_date: '',
        deadline: '',
        checkList: '',
        subTask: '',
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.rows !== this.state.rows) {
            this.formColumns();
        }
    }

    componentWillMount() {
        this.formColumns();
    }

    formColumns = () => {
        const columns = [];
        let counter = 0;
        this.state.statuses.forEach(status => {
            columns.push(
                {
                    id: counter,
                    title: status,
                    color: this.state.colors[counter],
                    cards: this.state.rows.filter(row => row.status === status),
                }
            )
            counter++;
        });
        this.setState({
            board: {
                columns: columns
            }
        });
    }

    handleCardMove = (_card, source, destination) => {
        const updatedBoard = moveCard(this.state.board, source, destination);
        this.setState({
            rows: this.state.rows.map((row) => {
                return row.id === _card.id ? {
                    ...row,
                    status: this.state.statuses[destination.toColumnId],
                } : row
            })
        });
        this.setState({board: updatedBoard})
    }

    setValue = (event, newValue) => {
        this.setState({value: newValue})
    }

    showModal = () => {
        this.setState({modalVisible: !this.state.modalVisible});
    }

    saveModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            rows: [...this.state.rows,
                {
                    id: this.state.rows.length + 1,
                    title: this.state.title,
                    start_date: new Date(this.state.start_date),
                    dead_line: new Date(this.state.deadline),
                    milestone: this.state.milestone,
                    assigned_to: this.state.assign_to,
                    collaborators: this.state.collaborators,
                    status: this.state.status === '' ? 'To do' : this.state.status,
                    activities: [
                        {
                            person: 'Jhone Doe',
                            time: new Date('2020-05-21'),
                            activity: 'Added',
                            color: '#0ABB87',
                            actions: []
                        }
                    ]
                }],
            title: '',
            description: '',
            project: '',
            points: 0,
            milestone: '',
            assign_to: '',
            collaborators: [],
            status: '',
            labels: '',
            start_date: '',
            deadline: '',
            rowSelected: {},
            showDetails: false,
        });
    }

    setTitle = (event) => {
        this.setState({title: event.target.value});
    }

    setDescription = (event) => {
        this.setState({description: event.target.value});
    }

    setProject = (event) => {
        this.setState({project: event.target.value});
    }

    setPoints = (event) => {
        this.setState({point: event.target.value});
    }

    setMilestone = (event) => {
        this.setState({milestone: event.target.value});
    }

    setAssignTo = (event) => {
        this.setState({assign_to: event.target.value});
    }

    setCollaborators = (event) => {
        this.setState({collaborators: event.target.value});
    }

    setStatus = (event) => {
        this.setState({status: event.target.value});
    }

    setLabel = (event) => {
        this.setState({labels: event.target.value});
    }

    setStartDate = (event) => {
        this.setState({start_date: event.value})
    }

    setDeadline = (event) => {
        this.setState({deadline: event.value});
    }

    setCheckList = (event) => {
        this.setState({checkList: event.target.value});
    }

    setSubTask = (event) => {
        this.setState({subTask: event.target.value});
    }

    addCheckList = () => {
        this.setState({
            rows: this.state.rows.map((row) => {
                return row.id === this.state.rowSelected.id ? {
                    ...row,
                    checklist: [
                        ...row.checklist,
                        {
                            id: row.checklist.length,
                            value: this.state.checkList
                        }
                    ],
                } : row
            }),
            rowSelected: {
                ...this.state.rowSelected,
                checklist: [
                    ...this.state.rowSelected.checklist,
                    {
                        id: this.state.rowSelected.checklist.length,
                        value: this.state.checkList
                    }
                ],
            },
            checkList: ''
        });
    }

    deleteCheckList = (id) => {
        let counter = 0;
        const reducedCheckList = this.state.rowSelected.checklist.map((element) => {
            if (element.id !== id) {
                const checkList = {
                    id: counter,
                    value: element.value,
                }
                counter++;
                return checkList
            }
        })
        this.setState({
            rows: this.state.rows.map((row) => {
                return row.id === this.state.rowSelected.id ? {
                    ...row,
                    checklist: reducedCheckList.filter(el => el !== undefined)
                } : row
            }),
            rowSelected: {
                ...this.state.rowSelected,
                checklist: reducedCheckList.filter(el => el !== undefined)
            },
        });
    }

    addSubTask = () => {
        this.setState({
            rows: this.state.rows.map((row) => {
                return row.id === this.state.rowSelected.id ? {
                    ...row,
                    subTasks: [
                        ...row.subTasks,
                        {
                            value: this.state.subTask,
                            status: 'To do'
                        }
                    ],
                } : row
            }),
            rowSelected: {
                ...this.state.rowSelected,
                subTasks: [
                    ...this.state.rowSelected.subTasks,
                    {
                        value: this.state.subTask,
                        status: 'To do'
                    }
                ],
            },
            subTask: ''
        });
    }

    rowClicked = (RowParams) => {
        this.setState({
            showDetails: !this.state.showDetails,
            rowSelected: RowParams.row,
        })
    }

    closeDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails,
            rowSelected: {},
        })
    }

    render() {
        return (
            <div style={{display: "flex", flexDirection: 'column', height: '100%'}}>
                <header className="app__header">
                    <div className="app__tabs">
                        <span className="app__header__title">Tasks</span>
                        <Tabs
                            value={this.state.value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.setValue}
                            aria-label="disabled tabs example"
                        >
                            <Tab label="List"/>
                            <Tab label="Kanban"/>
                        </Tabs>
                    </div>
                    <div className="app__header__buttons">
                        <button className="app__header__button">
                            <AiFillPlusCircle/>
                            <span>Add multiple tasks</span>
                        </button>
                        <button className="app__header__button" onClick={this.showModal}>
                            <AiFillPlusCircle/>
                            <span>Add task</span>
                        </button>
                    </div>
                </header>
                <Table rows={this.state.rows} rowSelected={this.rowClicked} value={this.state.value} index={0}/>
                <Kanban style={{height: '100%'}}
                        value={this.state.value}
                        index={1}
                        columns={this.state.board}
                        handleCardMove={this.handleCardMove}/>
                {this.state.modalVisible ?
                    <div>
                        <AddTaskModal
                            setTitle={this.setTitle}
                            setDescription={this.setDescription}
                            setProject={this.setProject}
                            setPoints={this.setPoints}
                            setMilestone={this.setMilestone}
                            setAssignTo={this.setAssignTo}
                            setCollaborators={this.setCollaborators}
                            setStatus={this.setStatus}
                            setLabels={this.setLabel}
                            setStartDate={this.setStartDate}
                            setDeadLine={this.setDeadline}
                            closeModal={this.showModal}
                            save={this.saveModal}/>
                    </div>
                    :
                    null}
                {this.state.showDetails ?
                    <TaskInfo
                        checkList={this.state.checkList}
                        subTask={this.state.subTask}
                        deleteCheckList={this.deleteCheckList}
                        setChecklist={this.setCheckList}
                        setSubTask={this.setSubTask}
                        addCheckList={this.addCheckList}
                        addSubTask={this.addSubTask}
                        row={this.state.rowSelected}
                        closeModal={this.closeDetails}/> : null}
            </div>
        );
    }


}

export default App;
