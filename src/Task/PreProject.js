import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import Editmodal from './editmodal';
import { useDispatch, useSelector } from 'react-redux';


const PreProject = () => {

  let dataredux = useSelector((state) => state.usersList);
  let prelist = dataredux.filter((each) => each.environment === "PRE")
  console.log("user", dataredux);


  const [state, setState] = useState(true);
  const dispatch = useDispatch();
  return (
    <div>
      <h4 className='h4'>Project Management</h4>
      <div className='homePage' >
        <Button className="addbtn"> <a href="/add" className='btns'>Add </a></Button>
        <Button className="addbtn"> <a href="/home" className='btns'>Home </a></Button>
        <Button className="addbtn"> <a href="/pro" className='btns'>Pro </a></Button>
        <Button className="addbtn"> <a href="/test" className='btns'>Test </a></Button>

        <div>
          <hr />
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>ReleaseDate</th>
                <th>Status</th>
                <th>Environment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                prelist.map((each, index) => {
                  return (
                    <tr key={index}>
                      <td>{each.title}</td>
                      <td>{each.releaseDate}</td>
                      <td>{each.status}</td>
                      <td>{each.environment}</td>
                      <td><Editmodal>Edit</Editmodal></td>

                    </tr>
                  )

                })
              }

            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default PreProject