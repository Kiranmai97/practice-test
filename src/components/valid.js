import React, { useState } from "react";

function Valid() {
    const [state, setState] = useState({
        str: '',
       string:[],
       parem: false,
       flower: false,
       square: false,
    })
    const handleInput = (e) => {
        setState({ ...state, str: e.target.value })
    }
const {str}= state;
    const handleSubmit = () => {
        let square = false;
        let parem = false;
        let flower = false;
    
        let string = str.split('')
        console.log(string)
        for (let i = 0; i < state.str.length; i++) {
            if (str[i] === '[' && str[i + 1] == ']') {
                square = true
            } else if (str[i] === '{' && str[i + 1] == '}') {
                flower = true
            } else if (str[i] === '(' && str[i + 1] == ')') {
                parem = true
            } 
        }
        setState({...state,square:square ,parem:parem, flower:flower})
    }


    return (
        <div>
            <input type="text" placeholder="enter text" onChange={handleInput} value={state.str} />
            <button onClick={handleSubmit}>Valid</button>
            {
                state.square&&state.flower&&state.parem?<h3>is VALID</h3>:<h3>is Not Valid</h3>
            }
        </div>
    )
}
export default Valid;