import React, { useState } from 'react'

const Prop = ({ typo, info, fun, func, place, click, data }) => {
  //  console.log(props.usename)
  return (
    <>
      <input type={typo} name={info} onChange={fun} onClick={func} placeholder={place} ></input>
      {
        click && <div>{data}</div>
      }

      
    </>
  )

}
export  {Prop}  // Named export 


const Lab=({name})=>{
  return(
    <label>{name}</label>
  )
}
export {Lab} //named export