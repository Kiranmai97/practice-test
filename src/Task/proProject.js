import React, { useState } from 'react'
import { Table, Button  } from 'react-bootstrap';

const ProProject = () => {
  const [state, setState] = useState({
    user: [{
      title: 'Java',
      releaseDate: '06-16-2022',
      status: 'onProgress',
      environment: 'PRO'
    },
    {
      title: 'Java',
      releaseDate: '06-16-2022',
      status: 'onProgress',
      environment: 'PRO'
    },
    {
      title: 'Java',
      releaseDate: '06-16-2022',
      status: 'onProgress',
      environment: 'PRO'
    }]
  })
  return (
    <div>
      <h4 className='h4'>Project Management</h4>
      <div className='homePage'>
    
      
      <Button className="addbtn"> <a href="/add" className='btns'>Add </a></Button>
      <Button className="addbtn"> <a href="/home" className='btns'>Home </a></Button>
      <Button className="addbtn"> <a href="/pre" className='btns'>Pre </a></Button>
      <Button className="addbtn"> <a href="/test" className='btns'>Test </a></Button>
      <hr/>
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
              state.user.map((each, index) => {
                return (
                  <tr key={index}>
                    <td>{each.title}</td>
                    <td>{each.releaseDate}</td>
                    <td>{each.status}</td>
                    <td>{each.environment}</td>
                    <td><Button>Edit</Button></td>

                  </tr>
                )

              })
            }

          </tbody>
        </Table>
        </div>
      </div>
 
  )
}

export default ProProject