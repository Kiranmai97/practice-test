import React, { useState } from "react";
import './design.css';


function Password() {
    const [state, setState] = useState({
        password: '',
        weak: false,
        average: false,
        strong: false,
        passwordErrorMgs: "",
    })

    
    const handleInputChange = (e) => {
        setState({ ...state, password: e.target.value })
    }

    const Button = () => {
     

      
        let passwordresult = [];
        passwordresult.push(state.password)
        console.log("password", passwordresult)
        if (state.password.match(/^[A-Za-z]+$/) || (state.password.match(/^[0-9]/))|| (state.password.match(/^[!@#$&*]/))) {
            setState({ ...state, passwordErrorMgs:"This is a Weak Password",  weak : true,average : false,   strong :false })
           
        } else if (state.password.match(/^[A-Za-z]+[0-9]/)||(state.password.match(/^[A-Za-z]*[!@#$&*]/))) {
            setState({ ...state, passwordErrorMgs:"This is a average Password",  weak : false,average : true,   strong :false })
        
        } else if (state.password.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            setState({ ...state, passwordErrorMgs:"This is a Strong password",  weak : false,average : false,   strong :true })
        }

        
    }

    return (
        <div>
            <div>{JSON.stringify(state)}</div>

            <label>Enter :</label>

            <input type="password" name="field" placeholder="password" value={state.password} onChange={handleInputChange} />
            <button type="submit" name="submit" onClick={Button} >Button </button>

            {
                state.password && <h3>{state.password}</h3>
            }
            {
                state.weak && <div  className='weak'>{state.passwordErrorMgs}</div>
            }
            {
                state.strong && <div className='strong'>{state.passwordErrorMgs}</div>
            }
            {
                state.average && <div className='avg'>{state.passwordErrorMgs}</div>
            }
         


        </div>
    );
}
export default Password;