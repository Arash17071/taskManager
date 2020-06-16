import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo003.png';
import Clock from 'react-live-clock';

import Jalali from './components/JalaliDate';
import TaskManagerApp from './components/taskManage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog,faBell } from '@fortawesome/free-solid-svg-icons'

import {Navbar,Nav} from 'react-bootstrap'

//--------------------------------------------------------------------------------------------------//

class App extends Component {
    state = {
        works : [
            {
                id : 100,
                worksubject : 'خرید میوه و شیرینی',
                workgroup : 'خرید منزل',
                workdefine : 'برای خرید مواد غذایی مورد نیاز',
                workdate : '1399-02-27/12:10'
            }
        ],

        worksubject : "",
        workgroup : "",
        workdefine : "",
        workdate : "",

        showHeader : true,
        showAddTask : 0,
    };

    handleShowTodayTask = () => {
        this.setState({ showAddTask : 4})
        console.log(this.state.showAddTask)
    }


    handleShowHeader = () => {
        this.setState({ showHeader : !this.state.showHeader })
        console.log(this.state.showHeader)
    }
    //----------------------------------------------------------------//
    handleShowAddTask = () => {
        this.setState({ showAddTask : 2 })
    }

    handleShowFormerTasks = () => {
        this.setState({ showAddTask : 3 })
        console.log(this.state.showAddTask)
    }
    //----------------------------------------------------------------//
    handleShowWorks = () => {
        const works = [...this.state.works]
        const work = {
            id : Math.floor(Math.random() * 1000),
            worksubject : this.state.worksubject,
            workgroup : this.state.workgroup,
            workdefine : this.state.workdefine,
            workdate : this.state.workdate
        };
        works.push(work);
        this.setState({ works,worksubject : "",workgroup : "",workdefine : "",workdate : "", })
        console.log(works)
    }

    setworksubject = event => {
        this.setState({ worksubject: event.target.value})
    }
    setworkgroup = event => {
        this.setState({workgroup: event.target.value})
    }
    setworkdefine = event => {
        this.setState({workdefine: event.target.value})
    }
    setworkdate = event => {
        this.setState({workdate: event.target.value })
    }
    
    //----------------------------------------------------------------//

    handleDeletWork = id => {
        const works = [...this.state.works]
        const filteredworks = works.filter( p => p.id !== id )
        this.setState({ works : filteredworks })
    }

    //----------------------------------------------------------------//
    render() {

        const { works,showHeader,showAddTask,worksubject,workgroup,workdefine,workdate } = this.state;

        let showHeaderStatus = null;
        
        if (showHeader){
            showHeaderStatus =  <header className="masthead">
                                    <div className="container h-100">
                                        <div className="row h-100 align-items-center">
                                            <div className="col-12 text-center" style={{ marginBottom:'600px' }}>
                                                <p style={{ fontSize:'60px',marginBottom:'0',fontWeight:'bold' }}>با چیکاریتو</p>
                                                <p style={{ fontSize:'20px' }}>همه کاراتو سروسامون بده</p>
                                                <button onClick={this.handleShowHeader} className="btn btn-danger btn-lg mt-3" style={{ backgroundColor:'#DB4C3F' }}>شروع کن</button>
                                            </div>
                                        </div>
                                    </div>
                                </header>
        } else {
            showHeaderStatus =  <TaskManagerApp
                                    taskAdd ={this.handleShowAddTask}
                                    showAddTask={showAddTask}

                                    taskShow = {this.handleShowFormerTasks}

                                    handleShowWorks = {this.handleShowWorks}

                                    handleDeletWork = {this.handleDeletWork}

                                    setworksubject = {this.setworksubject}
                                    setworkgroup = {this.setworkgroup}
                                    setworkdefine = {this.setworkdefine}
                                    setworkdate = {this.setworkdate}

                                    worksubject = {worksubject}
                                    workgroup = {workgroup}
                                    workdefine = {workdefine}
                                    workdate = {workdate}

                                    works = {works}
                                    worklen = {works.length}

                                    todayTask = {this.handleShowTodayTask}
                                />
        };


        return (
            <div>


                <Navbar expand="lg" fixed="top" style={{ backgroundColor:"#DB4C3F" }}> 
                    <Navbar.Brand href="http://arashsh.com/" style={{ color:"white" }}>
                        <img
                            style={{ marginLeft:'16px' }}
                            alt="logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        چیکاریتو
                    </Navbar.Brand>
                    <Navbar.Toggle className="navtog" aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">
                                <Jalali/>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Clock style={{ color:'white'}} format={'HH:mm:ss'} ticking={true} timezone={'Asia/Tehran'} />
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <FontAwesomeIcon icon={faBell} style={{ color:"white" }} />
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <FontAwesomeIcon icon={faCog} style={{ color:"white" }} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {showHeaderStatus}


            </div>
        );
    }
}

export default App;