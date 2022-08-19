import React, { useState } from 'react';


function ButtonDrop() {

    const [state, setState] = useState({
        buttons: []
    })

    // const [num, setNum] = useState()
    let buttons = [1, 2, 3, 4, 5]

    const pageDrop = (e) => {
        setState(e.target.value)
    }


    return (
        <div>
            <select name="" onChange={pageDrop}>
                <option value={'select'}>Select</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <div className='mt-3'>
        {
          buttons &&
          buttons.map((each) => { 
            return (
              <span >
                {
                  state == each ? 
                  <button key={each} style={{'backgroundColor': 'grey',color: 'white',}}>{each}</button>
                   :
                    <button key={each} >{each}</button>
                }
              </span>
            );
          })
        }
      </div>
        </div>
    );
}
export default ButtonDrop;