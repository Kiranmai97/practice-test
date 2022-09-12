import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import "./design.css";

const ADD = () => {


  return (
    <div>
      <h4 className='h4'>Add A Project</h4>
      <div className='homePage'>

        <Button className="addbtn"> <a href="/home" className='btns'>Home </a></Button>
        <hr></hr>
        <div className='home'>
          <label>Title</label>
          <div><input type="text" className='input' /></div>
        </div>
        <div className='date'>
          <label>Release Date</label>
          <div><input type="date" className='input' /></div>
        </div>

        <div className='home'>
          <label>Description</label>
          <div><textarea type="text" className='description' /></div>
        </div>
        <div className='home'>
          <label>Status</label>
          <div><select name='description' className='select' >
            <option value='' selected="true" disabled="disabled">--Select--</option>
            <option value=''> PRE  </option>
            <option value=''> PRO </option>
          </select></div>
        </div>
        <div className='home'>
          <label>Environment</label>
          <div> <select name='description' className='select'>
            <option value='' selected="true" disabled="disabled" >--Select--</option>
            <option value=''> PRE </option>
            <option value=''> PRO </option>
          </select></div>
        </div>

        <div>
          <Button className="addbtn"> <a href="/add" className='btns'>Add </a></Button></div>
      </div>
    </div>

  )
}

export default ADD