import React, { Profiler } from "react";
import { useState } from "react";
// import user from "../component/icons/user.svg";
// import mail from "../component/icons/mail.svg";
// import password from "../component/icons/password.svg"

// import profile from "../components/images/profile.png";

const FormInput = () => {

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        conformpassword: ''
    });

    const [error, setError] = useState(false)
    const [noerror, setNoError] = useState(false)

    const handleInputChange = (e) => {
        console.log("state", state)
        setState({ ...state, [e.target.name]: e.target.value, error: '' })

        console.log(state)


        if (state.password !== state.conformpassword) {
            setError(true)
        }

        if (!state.password !== state.conformpassword) {
            setNoError(false)
        }

        if (state.password !== state.conformpassword) {
            setError(false)
            setNoError(true)
        }
    }


    
    return (

        <div>
            <h3>Form</h3>

            <form>
                <div>
                    <label>Enter FirstName:</label>
                    {/* {/ <img src={profile} alt="profile" className="img" /> /} */}
                    <input type="text"
                        name="firstname"
                        placeholder="FirstName"
                        value={state.firstname}
                        onChange={handleInputChange} className="fname"></input>
                </div>
                <div>
                    <label>Enter LastName:</label>
                    {/* {/ <img src={profile} alt="profile" className="img" /> /} */}
                    <input type="text"
                        name="lastname"
                        placeholder="LastName"
                        value={state.lastname}
                        disabled={!state.firstname}
                        onChange={handleInputChange} className="fname"></input>
                </div>
                <div>
                    <label>Enter Email:</label>
                    {/* {/ <img src={profile} alt="profile" className="img" /> /} */}
                    <input type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={state.email}
                        disabled={!state.lastname}
                        onChange={handleInputChange} className="fname"></input>
                </div>
                <div>
                    <label>Enter Password:</label>
                    {/* {/ <img src={profile} alt="profile" className="img" /> /} */}
                    <input type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={state.password}
                        disabled={!state.email}
                        onChange={handleInputChange} className="fname"></input>
                </div>
                <div>
                    <label>Conform Password:</label>
                    {/* {/ <img src={profile} alt="profile" className="img" /> /} */}
                    <input type="password"
                        name="conformpassword"
                        placeholder="Conform Password"
                        value={state.conformpassword}
                        disabled={!state.password}
                        onChange={handleInputChange} className="pswd"></input>
                </div>
            </form>
        </div>
    );
}
export default FormInput;