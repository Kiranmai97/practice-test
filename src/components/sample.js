import React, { useState } from "react";
import "./components.css"


function Sample() {
    const [state, setState] = useState({
        data: [],
    })


    const handleInputChange = (e) => {
        console.log("state", state)
        setState({ ...state, data: e.target.value })
    }

    const Button = () => {
        console.log("button is Clicked")
        let user = state.data
        console.log("user", user)
    }
    return (
        <div>

            <label>Enter :</label>
            <p>Hello World</p>
            <input type="text"
                name="name"
                placeholder="Name"
                value={state.name}
                onChange={handleInputChange} />
            <button type="submit" name="submit" onClick={Button} >Button </button>


        </div>
    );
}
export default Sample;