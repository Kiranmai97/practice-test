import React from 'react'
import Test from '../Task/Images/test.jpeg';

const Home = () => {
    return (
        <div>
            <h4 className='h4'>Project Management</h4>

            <div className='homePage'>
                {/* <div className='project'>
                <span className='center'>PRE</span>
                </div>
             */}

                <div className='grid' >
                 
                
                        <div><a href="/pre"><img src={Test} className="project"></img></a></div>
                        <div> <a href="/pro"> <img src={Test} className="project"></img></a></div>
                        <div> <a href="/test"> <img src={Test} className="project"></img></a></div>
                        <div> <a href="/add"> <img src={Test} className="project"></img></a></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home