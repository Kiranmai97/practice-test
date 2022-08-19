import React, { useState } from "react";

function Unique() {

    const [state, setState] = useState({

        text: "",
        list: [],
        display: "",
        count: 0
    })
    const { givenname, list, display } = state;
    const handleinputchange = (e) => {

        setState({ ...state, givenname: e.target.value })
        // console.log("im onchange")
    }

    let { count } = state
    const submitfn = (e) => {
        e.preventDefault();
        // let count = 0;

        let arr = givenname.split(" ")
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
            let count = 0
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    count++;

                }
            }
            if (count == 1) {
                list.push(arr[i])
                // console.log(list)
                setState({ ...state, list: list, display: "the unique values are :", })

            }
            // count = 0;
            setState({ ...state, list: list, count: count })
        }


    }
    return (
        <div>
            <input type="text" name='givenname' value={state.givenname} onChange={handleinputchange} placeholder='enter value'></input>

            <div> <button type='button' onClick={submitfn}>submit</button></div>

            {

                display && <h2>{display}</h2>

            }
            {

                list.map((each) => {
                    return (

                        <li>{count} {each} </li>

                    )


                })
            }
        </div>
    )

}
export default Unique;




