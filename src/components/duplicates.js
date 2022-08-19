import React, { useState } from "react";

function Duplicates() {

    const [state, setState] = useState({
        str: '',
        strArr: [],
        res: [],
        result: [],
        res: '',
        count: 0,
        display: "",
    })
    const handleInput = (e) => {
        setState({ ...state, str: e.target.value })
    }
    let { str, strArr, display, count } = state
    const duplicates = (e) => {
        const strArr = state.str.split(" ");
        const res = [];
        for (let i = 0; i < strArr.length; i++) {
            let count = 0;
            if (strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
                if (!res.includes(strArr[i])) {
                    res.push(strArr[i]);
                    // console.log("res", res)
                    count++;
                };
            };
            if (count == 0) {
                let result = res.join(" ");
                res.push(result[i])
                console.log("result", result)
            }

        };
    };
    // setState({...state, res:res, count:count})

    // list.push(arr[i])
    // // console.log(list)
    // setState({ ...state, list: list, display: "the unique values are :", })

    // }

    console.log(duplicates(str));

    return (
        <div>
            <input type="text" placeholder="enter text" onChange={handleInput} value={state.str} />
            <button onClick={duplicates}>Duplicates</button>
            {
                display && <h2>{display}</h2>
            }
            {
                state.strArr.map((each) => {
                    return (
                        <li> {each} {count}</li>
                    )
                })
            }
            <h2>String:{state.str}</h2>

        </div>
    );
}
export default Duplicates;
