import React from 'react';

import pph from '../profil-pictures/personalphoto001.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Image, Form, Table } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons, faPlusSquare, faListAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import Workser from './showorks';

// import Dater from './datePicher';

//--------------------------------------------------------------------------------------------------//

const TaskManagerApp = ({   works,
                            taskAdd,
                            showAddTask,
                            handleShowWorks,
                            handleDeletWork,
                            setworksubject,
                            setworkgroup,
                            setworkdefine,
                            setworkdate,
                            worksubject,
                            workgroup,
                            workdefine,
                            workdate,
                            taskShow,
                            worklen,
                            todayTask }) => {

    let topm = null;

    if (showAddTask===0){
        topm =  <Col className="masthead2" sm={9} ></Col>
    } else if (showAddTask===2){
        topm =  <Col sm={9} style={{ marginTop:'35px' }}>

                    <Form id='myform'>

                        <Form.Row>

                            <Form.Group as={Col}>
                                <Form.Label>عنوان کار</Form.Label>
                                <Form.Control onChange={setworksubject} value={worksubject} placeholder="" />
                                <Form.Text className="text-muted">
                                    عنوان کار خود را وارد کنید
                                </Form.Text>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>دسته بندی</Form.Label>
                                <Form.Control onChange={setworkgroup} value={workgroup} placeholder="" />
                                <Form.Text className="text-muted">
                                    دسته بندی کار خود را وارد کنید
                                </Form.Text>
                            </Form.Group>

                        </Form.Row>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>شرح کار</Form.Label>
                                <Form.Control onChange={setworkdefine} value={workdefine} as="textarea" rows="3" />
                        </Form.Group>

                        <Form.Row style={{ marginTop:'25px' }}>

                            <Form.Group  as={Col}>
                                <Form.Label>تاریخ انجام کار</Form.Label>
                                <Form.Control style={{ width:'300px' }} onChange={setworkdate} value={workdate} placeholder="1399-1-1"/>
                                <Form.Text className="text-muted">
                                    تاریخ انجام کار را وارد کنید
                                </Form.Text>
                            </Form.Group>

                            <Form.Group  as={Col}>
                                <Form.Label>ساعت انجام کار</Form.Label>
                                <Form.Control style={{ width:'300px' }} onChange={setworkdate} value={workdate} placeholder="12:12"/>
                                <Form.Text className="text-muted">
                                    ساعت انجام کار را وارد کنید
                                </Form.Text>
                            </Form.Group>

                            <Button onClick={handleShowWorks} style={{ fontSize:'18px',backgroundColor:'#DB4C3F',marginLeft:'10px',marginTop:'30px',height:'40px'}} variant="danger">
                                ثبت کار جدید
                            </Button>

                        </Form.Row>

                    </Form>

    </Col>
    } else if (showAddTask===3){
        topm =  <Col sm={50} style={{ marginTop:'35px',marginRight:'30px' }}>

                    <Table responsive striped bordered hover>

                        <thead>
                            <tr>
                                <th>ردیف</th>
                                <th>تاریخ </th>
                                <th>عنوان</th>
                                <th>دسته بندی</th>
                                <th>شرح کار</th>
                                <th>تنظیمات</th>
                            </tr>
                        </thead>

                        <tbody>
                                {works.map(work => (
                                            <Workser
                                                key = {work.id}
                                                worksubject={work.worksubject}
                                                workgroup={work.workgroup}
                                                workdefine={work.workdefine}
                                                workdate={work.workdate}
                                                worklen = {worklen}
                                                deletedWork = {() => handleDeletWork(work.id)}
                                            />
                                ))}
                        </tbody>
                    </Table>

                </Col>
    } else if(showAddTask===4){
        topm=<div>
                <h2 style={{ marginTop:'100px' }}>its Working!</h2>
            </div>
    }



    return(

        <div>
            <Container style={{ marginTop:'70px',direction:'rtl' }}>
                <Row>
                    <Col sm={3} style={{ backgroundColor:'#FAFAFA' }} >
                        <Image style={{ height:'200px',marginTop:'18px' }} src={pph} roundedCircle />
                        <p style={{ fontSize:'23px',marginBottom:'0px',marginTop:'14px',color:'#DB4C3F',fontWeight:'bold'}}>آرش شاه حاتمی</p>
                        <p style={{ fontSize:'15px',marginBottom:'0px',marginTop:'5px',color:'#DB4C3F'}}>اینجا میتونی همه کارهاتو مدیریت کنی</p>
                        <Button onClick={todayTask} style={{ fontSize:'18px',backgroundColor:'#DB4C3F',marginBottom:'18px',marginTop:'18px'}} variant="danger" size="lg" block><FontAwesomeIcon icon={faIcons} /><p style={{ fontSize:'20px',marginBottom:'0px'}}>کارهای امروزم</p></Button>
                        <Button onClick={taskAdd} style={{ fontSize:'18px',backgroundColor:'#DB4C3F',marginBottom:'18px'}} variant="danger" size="lg" block><FontAwesomeIcon icon={faPlusSquare} /><p style={{ fontSize:'20px',marginBottom:'0px'}}>کار جدید بساز</p></Button>
                        <Button onClick={taskShow} style={{ fontSize:'18px',backgroundColor:'#DB4C3F',marginBottom:'18px'}} variant="danger" size="lg" block><FontAwesomeIcon icon={faListAlt} /><p style={{ fontSize:'20px',marginBottom:'0px'}}>سوابق کارهای قبلیم</p></Button>
                        <Button style={{ fontSize:'18px',backgroundColor:'#DB4C3F',marginBottom:'18px'}} variant="danger" size="lg" block><FontAwesomeIcon icon={faSlidersH} /><p style={{ fontSize:'20px',marginBottom:'0px'}}>تنظیمات کاربری</p></Button>
                    </Col>
                    {topm}
                </Row>
            </Container>
        </div>
    )
}



export default TaskManagerApp;