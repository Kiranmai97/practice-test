import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import "./design.css";


const ADD = () => {

  const [details, setDetails] = useState({
    title: '',
    releaseDate: '',
    status: '',
    environment: '',
  })
  const handleAdd = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    details[name] = value;
    setDetails({ ...details, details: details });
    console.log("detail", details)
  }
  const dispatch = useDispatch();
  let dataredux = useSelector((state) => state.usersList);
  const addDetails = (e) => {
    e.preventDefault();
    const lastId = dataredux[dataredux.length > 0 ? dataredux.length - 1 : 0]?.id ? dataredux[dataredux.length - 1].id : 0;
    dispatch({
      type: "AddDetails",
      payload: {
        details,
        id:lastId+1,
      },
      callback: (user) => { },
    });
  }


  console.log("adding into table", details)

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <div>
      <h4 className='h4'>Add A Project</h4>
      <div className='homePage'>

        <Button className="addbtn"> <a href="/home" className='btns' onChange={handleAdd}>Home </a></Button>
        <hr></hr>
        <div className='home'>
          <label>Title</label>
          <div><input type="text" name='title' className='input' onChange={handleAdd} /></div>
        </div>
        <div className='date'>
          <label>Release Date</label>
          <div><input type="date" name='releaseDate' className='input' onChange={handleAdd} min={disablePastDate()} /></div>
        </div>

        <div className='home'>
          <label>Description</label>
          <div><textarea type="text" name='description' className='description' onChange={handleAdd} /></div>
        </div>
        <div className='home'>
          <label>Status</label>
          <div>
            <select name='status' className='select' onChange={handleAdd} >
              <option value='' selected="true" name='status' disabled="disabled">--Select--</option>
              {/* selected={true} */}
              <option name='status' value='completed'> Completed  </option>
              <option name='status' value='onprogress'> OnProgress </option>
            </select></div>
        </div>
        <div className='home'>
          <label>Environment</label>
          <div> <select name='environment' className='select' onChange={handleAdd}>
            <option value='' selected="true" disabled="disabled" >--Select--</option>
            <option value='pre'> PRE </option>
            <option value='pro'> PRO </option>
            <option value='test'> TEST </option>
          </select></div>
        </div>

        <div>
          <Button className="addbtn"> <a href="/add" className='btns' onClick={addDetails}>Add </a></Button></div>
      </div>
    </div>

  )
}

export default ADD