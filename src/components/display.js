// import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

const Display = () => {

    const [text, setText] = useState({
        type: '',
        displaytype: '',

    });

    const { type, displaytype } = text
    const handleInputchange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value, displaytype:'' })

    }

    const InputSubmit = (e) => {
        e.preventDefault();
        const notNumber = isNaN(text.type)

        if (notNumber) {
        
            setText({ ...text, displaytype: "Entered Text Type is: String which is " })
        } else {
        
            setText({ ...text, displaytype: "Entered Text Type is: Number which is " })
        }

    }

    return (

        <div className="container">
            <form onSubmit={InputSubmit}>

                <label>TextField</label>
                <input type="text" name="type" value={text.type} onChange={handleInputchange}></input>
                <div className="">
                    <input type="submit" className="btn btn-primary" ></input>
                </div>
            </form>

            {
                displaytype ? <p>{displaytype}{type}</p> : null
            }
            

        </div>
    );

}
export default Display;