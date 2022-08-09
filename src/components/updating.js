import React, { useEffect, useState } from "react";

function Hooks(){

    const [count, setCount] = useState(0);
    // Mounting 
useEffect(()=>{
    console.log(" Mount rendering... ")
})

// updating
useEffect(()=>{
 console.log("it will render multiple times")
//  setCount(count+1)
},[count])

 useEffect(() => {
        // Anything in here is fired on component mount.
        return () => {
            // Anything in here is fired on component unmount.
        }
    }, [])





    return(
        <div>
       <button onClick={() => setCount(count)}>
        Click me
      </button>
        </div>
    );
}
export default Hooks;