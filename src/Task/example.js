import React from 'react'
// import './example.css'
import Test from "../Images/test.jpeg";
import { useNavigate } from "react-router-dom"
import { Col, Row } from 'react-bootstrap';


const Project_management = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-color'>
            <Row className='center'>
                <Col lg={2} md={2} sm={0} />
                <Col md={2} sm={12} className=' pos' >
                    <div className="icon-wrapper">
                        <h6 className='pos1'>PRE</h6>
                        <img src={Test} alt="test" className='border' onClick={() => navigate("/pre")} />
                    </div>
                </Col>

                <Col md={2} sm={12} className='pos'>
                    <div className="icon-wrapper">
                        <h6 className='pos2'>TEST</h6>
                        <img src={Test} alt="test" className='border' onClick={() => navigate("/test")} />
                    </div>
                </Col>

                <Col md={2} sm={12} className='pos'>
                    <div className="icon-wrapper">
                        <h6 className='pos3'>PRO</h6>
                        <img src={Test} alt="test" className='border' onClick={() => navigate("/pro")} />
                    </div>
                </Col>

                <Col md={2} sm={12} className='pos'>
                <div className="icon-wrapper">
                    <h6 className='pos4'>ADD</h6>
                    <img src={Test} alt="test" className='border' onClick={() => navigate("/pre")} />
                </div>
                </Col>
                <Col md={2} sm={0} />
            </Row>
        </div>
    )
}

export default Project_management