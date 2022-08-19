import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Displaybutton = () => {

    const [state, setState] = useState({
        show: 'Show',
        hide: ''
    })

    const Show = () => {
        let show = '';
        let hide = ''

        if (state.show) {
            hide = 'Hide'
        } else {
            show = 'Show'
        }
        setState({ ...state, show: show, hide: hide })
    }
    return (
        <div>
            <Button type="button" onClick={Show}>Show</Button>
            {

                state.show && <h1>Click To Hide This Text</h1>

            }

        </div>
    )
}

export default Displaybutton