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
setDetails({...details, [e.target.name]: e.target.value})
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
      <Button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        EDIT
      </Button>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">


              <div className='homePage' >
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


                <div class="modal-footer">
                  <Button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</Button>
                  <Button type="button" class="btn btn-primary" onClick={handleSave}>Save changes</Button>
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