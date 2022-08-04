// 1. Find out the unique words in a string.
// e.g., 
// Input: I'm good in React and good at React Native too.
// output: I'm, in, and, at, Native, too


import React, { useState } from "react";

function Find() {

    const [state, setState] = useState({
        str: '',
        string: [],
        uppercount: 0,
        upper: [],
        lowercount: 0,
        lower: [],
        numbercount: 0,
        number: [],
        specialcount: 0,
        special: [],
    })
    const handleInput = (e) => {
        setState({ ...state, str: e.target.value })
    }

    let {upper,lower,number,special,uppercount,lowercount,numbercount,specialcount}  = state;
    const Find = () => {
        let string = state.str.split('')
        console.log("ghgh",string)


        for (var i = 0; i < string.length; i++) {
            if (string[i] >= "A" && string[i] <= "Z") {
                upper++;

            }
            else if (string[i] >= "a" && string[i] <= "z") {

                lower++;
            }
            else if (string[i] >= "0" && string[i] <= "9"){

                number++;
            }
            else {
                special++;
                
            }
        }
        setState({...state,upper,lower,number,special,uppercount,lowercount,numbercount,specialcount})
    }


    return (
        <div>
            <input type="text" placeholder="enter text" onChange={handleInput} value={state.str} />
            <button onClick={Find}>Find</button>
            <h3>Lower Case:  {lower}</h3>
            <h3>Upper Case: {upper}</h3>
            <h3>Number :{number}</h3>
            <h3>Special: {special}</h3>
        </div>
    )
}
export default Find;