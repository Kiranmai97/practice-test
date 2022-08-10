import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import up_arrow from "../icons/up_arrow.svg";
import down_arrow from '../icons/down_arrow.svg';
import './components.css'


function Axios() {

    const [state, setState] = useState({
        data: [],
    });



    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setState(response.data)
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

   
    const handleUp = ()=>{
      
       const arr = state.data.sort((a,b)=>a.first_name.localeCompare(b.first_name))
       console.log('arr',arr)
       const arr1 = state.data.sort((a,b)=>a.last_name.localeCompare(b.last_name))
       console.log('arr1',arr1)
       const arr2 = state.data.sort((a,b)=>a.email.localeCompare(b.email))
       console.log('arr2',arr2)
     
       setState({...state,arr:arr,arr1:arr1,arr2:arr2})
    }
    const handleDown = ()=>{

       const arr = state.data.sort((b,a)=>a.first_name.localeCompare(b.first_name))
       console.log('arr',arr)
       const arr1 = state.data.sort((b,a)=>a.last_name.localeCompare(b.last_name))
       console.log('arr1',arr1)
       const arr2 = state.data.sort((b,a)=>a.email.localeCompare(b.email))
       console.log('arr2',arr2)
   
       setState({...state,arr:arr,arr1:arr1,arr2:arr2})
    
    }
   
    return (
        <div>
            <Table className="container">
                <thead>
                <tr>
                        <th>Id</th>
                        <th>FirstName{<img src={up_arrow} alt="up-arrow" onClick={handleUp}  className = "up_arrow"/>}{<img src={down_arrow} alt="down-arrow" onClick={handleDown}  className = "down_arrow" />}</th>
                        <th>LastName{<img src={up_arrow} alt="up-arrow" onClick={handleUp} className = "up_arrow" />}{<img src={down_arrow} alt="down-arrow" onClick={handleDown}  className = "down_arrow"/>}</th>
                        <th>Email{<img src={up_arrow} alt="up-arrow" onClick={handleUp} className = "up_arrow" />}{<img src={down_arrow} alt="down-arrow" onClick={handleDown}  className = "down_arrow"/>}</th>
                        <th>Avatar{<img src={up_arrow} alt="up-arrow" onClick={handleUp}  className = "up_arrow"/>}{<img src={down_arrow} alt="down-arrow" onClick={handleDown}  className = "down_arrow"/>}</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {

                        state.data.map((each, index) => {
                            return (
                                <tr key={index}>

                                    <td>{each.id}</td>
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
    );
};

export default Axios