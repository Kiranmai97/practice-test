import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const Editmodal = () => {
  const [details, setDetails] = useState({
    title: '',
    releaseDate: '',
    status: '',
    environment: '',
  })
  const handleAdd = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch({
      type: "EditDetails",
      payload: details,
    })
  }
  return (
    <div>
      <Button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        EDIT
      </Button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">


              <div classNameName='homePage'      >
                <div height='20%'></div>
                <div classNameName='home'>
                  <label>Title</label>
                  <div><input type="text" name='title' classNameName='input' onChange={handleAdd} /></div>
                </div>
                <div classNameName='date'>
                  <label>Release Date</label>
                  <div><input type="date" name='releaseDate' classNameName='input' onChange={handleAdd} min={disablePastDate()} /></div>
                </div>

                <div classNameName='home'>
                  <label>Description</label>
                  <div><textarea type="text" name='description' classNameName='description' onChange={handleAdd} /></div>
                </div>
                <div classNameName='home'>
                  <label>Status</label>
                  <div>
                    <select name='status' classNameName='select' onChange={handleAdd} >
                      <option value='' selected="true" name='status' disabled="disabled">--Select--</option>
                      {/* selected={true} */}
                      <option name='status' value='completed'> Completed  </option>
                      <option name='status' value='onprogress'> OnProgress </option>
                    </select></div>
                </div>
                <div classNameName='home'>
                  <label>Environment</label>
                  <div> <select name='environment' classNameName='select' onChange={handleAdd}>
                    <option value='' selected="true" disabled="disabled" >--Select--</option>
                    <option value='pre'> PRE </option>
                    <option value='pro'> PRO </option>
                    <option value='test'> TEST </option>
                  </select></div>
                </div>


                <div className="modal-footer">
                  <Button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</Button>
                  <Button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Editmodal