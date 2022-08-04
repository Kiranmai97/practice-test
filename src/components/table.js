import React, { useState } from "react";

function Table() {

    const [state, setState] = useState({
        text: '',
        list: []
    })


    const handleOntable = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    console.log("result", state.text)

    const { list, text } = state;
    const InputSubmit = (e) => {
        e.preventDefault();
        list.push(text)
        console.log("list", list)
        setState({ ...state, list: list })


        setState({ ...state, text: "" })
    }



    return (
        <div className="container">

            <form onSubmit={InputSubmit}>
                <label>Textfield:</label>
                <input type="text" name="text" value={state.text} onChange={handleOntable}></input>
                <input type="submit" value="Submit" className="btn-btn-success"></input>

                {
                    state.list.length > 0 ?
                        <div>
                            <table>
                                <thead>
                                    <th>ID</th>
                                    <th>Name</th>
                                </thead>
                                <tbody>
                                    {
                                        state.list.length > 0 &&
                                        state.list.map((each, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{each}</td>
                                                </tr>

                                            )
                                        })
                                    }

                                </tbody>

                            </table>
                        </div>
                        : null
                }
            </form >

        </div >
    );
}
export default Table;
