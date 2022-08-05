import React, { useState } from "react";

function Account() {



    const [state, setState] = useState({
        dollor: '',
        rupee: '80',
        totalvalue: '',

    })

    const submitbtn = (e) => {
        e.preventDefault();
        const money = Number(state.dollor) * Number(state.rupee);
        setState({ ...state, totalvalue: money })

    }
    console.log("total", state.totalvalue);

    const allowNumbersOnly = (e) => {
        var charCode = (e.which) ? e.which : e.keycode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            console.log('printing only numbers')
            e.preventDefault()
        }
        return true;
    }

    const handleInputChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })

    }

    const clearbtn = () => {
        setState({ ...state, dollor: '', totalvalue: '' })

    }

    return (
        <div>
            hello
            <form onSubmit={submitbtn}>
                <div>
                    <label> Amount($):</label>
                    <input type="text" name="dollor" value={state.dollor}
                        onKeyPress={allowNumbersOnly}
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div>
                    <input type="submit" value="submit" className="btn btn-success" ></input>
                    <input type="submit" value="clear" className="btn btn-primary" onClick={clearbtn}></input>
                </div>

            </form>
            {
                state.totalvalue ? <p>{state.totalvalue}</p> : null
            }
        </div>
    )
}
export default Account