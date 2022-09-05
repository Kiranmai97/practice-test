import React, { useState } from 'react'
import Test from '../Images/test.jpeg'
import "./design.css";

const Home = () => {


    return (
        <>
            <h4 className='h4'>Project Management</h4>
            <div className='homePage'>
                <div className='row space-evenly' >
                    <div className='col-sm-12 col-md 3 '><h6>Pre</h6><a href="/pre"><img src={Test} className='project'></img></a></div>
                    <div className='col-sm-12 col-md 3 '><h6>Pro</h6> <a href="/pro"><img src={Test}  className='project'></img></a></div>
                    <div className='col-sm-12 col-md 3 '><h6>Test</h6><a href="/test"><img src={Test} className='project'></img></a></div>
                    <div className='col-sm-12 col-md 3'><h6 >Add</h6><a href="/add"><img src={Test} className='project'></img></a></div>
               
                </div>
            </div>
        </>
    )
}
export default Home