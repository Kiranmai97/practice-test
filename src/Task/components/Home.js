import React, { useState } from 'react'
import Test from "../../Images/test.jpeg"
// import "./design.css";
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate= useNavigate();

    return (
        <>
            <div className="heading">
            <h4 className='h4 '>Project Management</h4>
            </div>
            <div className='homePage'>
                <Row className='center'>
                    <Col lg={2} md={2} sm={0} />
                    <Col md={2} sm={12} className='rel'onClick={()=>{navigate("/pre")}}>
                        <h6 className='abs'>Pre</h6>
                        <img src={Test} className='project'></img></Col>
                    <Col md={2} sm={12} className='rel' onClick={()=>{navigate("/pre")}}>
                        <h6 className='abs'>Pro</h6>
                       <img src={Test} className='project'></img></Col>
                    <Col md={2} sm={12} className='rel' onClick={()=>{navigate("/pre")}}>
                        <h6 className='abs'>Test</h6>
                       <img src={Test} className='project'></img></Col>
                    <Col md={2} sm={12} className='rel' onClick={()=>{navigate("/pre")}}>
                        <h6 className='abs'>Add</h6>
                        <img src={Test} className='project'></img>
                    </Col>
                    <Col md={2} sm={0} />
                </Row>
            </div>
        </>
    )
}
export default Home