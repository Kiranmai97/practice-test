import React, { useState } from 'react'
import {Prop} from "./prop"  //named import 
import {Lab} from  "./prop"  //named import 
const Propsuser = () => {
    const [state, setState] = useState({
        data: '',
        click:false,
    })


    const handleInputChange = (e) => {
        setState({ ...state, data: e.target.value})
    }

    const Button = () => {
        if(state.click===false){
            setState({...state,click:true})
        }
        else{
            setState({...state,click:false})
        }

        
    }
    return ( 
        <div>
             <Lab name={"Enter in textbox:"}></Lab>
            <Prop typo="text" info="input" fun={handleInputChange}  place={"Enter text"} ></Prop>
            <Prop typo="submit" info="submit" func={Button}  click={state.click} data={state.data}></Prop>
        </div>
      
    )
}


export default Propsuser