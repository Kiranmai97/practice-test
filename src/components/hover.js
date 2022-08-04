
import React, { useState } from "react";

function Mouse() {

    const [state, setState] = useState({
        color: {
            field1: false,
            field2: false,
        }

    })
    const color = (e) => {
        setState({ ...state, field1: e.target.style.background = "yellow" })
    }
    const colorChange = (e) => {
        setState({ ...state, feild2: e.target.style.background = "cyan" })
    }
    const mouseOut1 = (e) => {
        setState({ ...state, field1: e.target.style.background = "white" })
    }
    const mouseOut2 = (e) => {
        setState({ ...state, field2: e.target.style.background = "white" })
    }
    return (
        <div>
            <div className="container">
                <label>field1 </label>
                <input type="text" placeholder="field1" onMouseOver={color} onMouseOut={mouseOut1} ></input>
                <label>field2 </label>
                <input type="text" placeholder="field2" onMouseOver={colorChange} onMouseOut={mouseOut2} ></input>
            </div>
        </div>
    );
}
export default Mouse