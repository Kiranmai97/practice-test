import React, { useState } from 'react'

const Text = () => {

    const [state,setState]= useState([])
    const handleInput=(e)=>{
        setState((e.target.value))
    }

  return (

    <div>
        <input type = 'text' value={state} onChange={handleInput}/>
        <h1>{state}</h1>
    </div>
  )
}

export default Text