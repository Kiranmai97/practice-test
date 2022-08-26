import React from 'react'
import Button from 'react-bootstrap/esm/Button';

const Test = () => {
 
  return (
    <div>
      <h4 className='h4'>Project Management</h4>
      <div className='homePage'>
      <Button className="addbtn"> <a href="/add" className='btns'>Add </a></Button>
      <Button className="addbtn"> <a href="/home" className='btns'>Home </a></Button>
      <Button className="addbtn"> <a href="/pro" className='btns'>Pro </a></Button>
      <Button className="addbtn"> <a href="/pre" className='btns'>Pre </a></Button>
    
      </div>
    </div>
  )
}

export default Test