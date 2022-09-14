import React, { useState } from 'react'
import Test from "../../Images/test.jpeg"
// import "./design.css";
import { Col, Row } from 'react-bootstrap';

const Home = () => {


    return (
        <>
            <div className="heading-wrapper">
            <h4 className='h4 gridwrapper'>Project Management</h4>
            </div>
            <div className='homePage'>
                <Row className='center'>
                    <Col lg={2} md={2} sm={0} />
                    <Col md={2} sm={12} className='rel'>
                        <h6 className='abs'>Pre</h6>
                        <a href="/pre"><img src={Test} className='project'></img></a></Col>
                    <Col md={2} sm={12} className='rel'>
                        <h6 className='abs'>Pro</h6>
                        <a href="/pro"><img src={Test} className='project'></img></a></Col>
                    <Col md={2} sm={12} className='rel'>
                        <h6 className='abs'>Test</h6>
                        <a href="/test"><img src={Test} className='project'></img></a></Col>
                    <Col md={2} sm={12} className='rel'>
                        <h6 className='abs'>Add</h6>
                        <a href="/add"><img src={Test} className='project'></img></a>
                    </Col>
                    <Col md={2} sm={0} />
                </Row>
            </div>
        </>
    )
}
export default Home