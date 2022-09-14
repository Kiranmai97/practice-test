import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "../design.css"

const TaskAdd = () => {
    const [details, setDetails] = useState({
        title: '',
        releaseDate: '',
        status: '',
        environment: '',
    })

    const list = useSelector((state) => state.usersList)
    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };
    
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    details[name] = value;
    setDetails({ ...details, details: details });
    console.log("detail", details)
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addDetails = (e) => {
        e.preventDefault();
        const lastId = list[list.length > 0 ? list.length - 1 : 0]?.id ? list[list.length - 1].id : 0;
        list.push(details)
        
        if (details.environment == "pre") {
            dispatch({
                type: "prePage",
                payload: details,
                id:lastId+1,
                callback:{}
                
            })
        }
        else if(details.environment == "pro") {
            dispatch({
                type:"proPage",
                payload: details,
            })
        }
        else if(details.environment =="test") {
            dispatch({
                type:"testPage",
                payload:details,
            })
        }
        if(details.environment==="pre") return  navigate("/pre")
        if(details.environment==="pro") return  navigate("/pro")
        if(details.environment==="test") return  navigate("/test")
        console.log("data", list)
    }


    return (
        <div>
            <h4 className='h4'>Add A Project</h4>
            <div className='homePage'>

                <Button className="addbtn"> <a href="/home" className='btns' onChange={handleInput}>Home </a></Button>
                <hr></hr>
                <div className='home'>
                    <label>Title</label>
                    <div><input type="text" name='title' className='input' onChange={handleInput} /></div>
                </div>
                <div className='date'>
                    <label>Release Date</label>
                    <div><input type="date" name='releaseDate' className='input' onChange={handleInput} min={disablePastDate()} /></div>
                </div>

                <div className='home'>
                    <label>Description</label>
                    <div><textarea type="text" name='description' className='description' onChange={handleInput} /></div>
                </div>
                <div className='home'>
                    <label>Status</label>
                    <div>
                        <select value={'DEFAULT'} name='status' className='select' onChange={handleInput} >
                            {/* <option value="DEFAULT" name='status'  disabled="disabled">--Select--</option> */}

                            <option value='' selected={true} disabled="disabled">--Select--</option> 
                             {/* selected={true} */}
                            <option name='status' value='completed'> Completed  </option>
                            <option name='status' value='onprogress'> OnProgress </option>
                        </select></div>
                </div>
                <div className='home'>
                    <label>Environment</label>
                    <div> <select name='environment' className='select' onChange={handleInput}>
                        <option value='' selected={true} disabled="disabled" >--Select--</option>
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

export default TaskAdd