import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';


const TableData = () => {

    const [state, setState] = useState({
        user: []
    })
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(function (response) {
                // handle success
                console.log("response",response.data.data);
                setState({...state, user:response.data.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
            console.log("axios")


    }, []);
    return (
        <div>
            <Table className = 'container'>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.user.map((each, index) => {
                            return (
                                <tr key={index}>
                                    <td>{each.first_name}</td>
                                    <td>{each.last_name}</td>
                                    <td>{each.email}</td>
                                    <td><img src={each.avatar} alt="" height={60} width={60} /></td>

                                </tr>
                            )

                        })
                    }
                 
                </tbody>
            </Table>
        </div>
    )
}

export default TableData