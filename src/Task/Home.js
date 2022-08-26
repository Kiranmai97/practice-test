import React from 'react'
import Test from '../Task/Images/test.jpeg';

const Home = () => {
    return (
        <div>
            <h4 className='h4'>Project Management</h4>
            <div className='homePage'>
                <div className='grid' >
                    <div><h6>Pre</h6><a href="/pre"><img src={Test} className="project"></img></a></div>
                    <div><h6>Pro</h6> <a href="/pro"> <img src={Test} className="project"></img></a></div>
                    <div><h6>Test</h6><a href="/test"> <img src={Test} className="project"></img></a></div>
                    <div><h6>Add</h6><a href="/add"> <img src={Test} className="project"></img></a></div>
                </div>
            </div>
        </div>
    )
}
export default Home