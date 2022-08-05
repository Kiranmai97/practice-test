import React, { useState } from "react";

function Password() {

    const [password, setPassword] = useState("");


    const handleInputchange = (e) => {
        setPassword( e.target.value.trim())

    }

    return (

        <div className="container">
            <form>
                <label>field:</label>
                <input type="password"
                    name="field"
                    placeholder="password"
                    value={password}
                    onChange={handleInputchange}>
                </input>

            </form>
            {
                <p>Entered password is:{password}</p>
            }
        </div>
    );

}
export default Password;