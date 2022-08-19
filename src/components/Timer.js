import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


function Timer() {
    const [date, setDate] = useState({
        date: '',
        interval: ''
    });

    const refreshClock = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const interval = setInterval(() => {

            setDate({ ...date, interval, date: new Date().toLocaleTimeString() })
        });
        return () => {
            navigate()
        };
    }, []);
    const { interval } = date
    const clockstop = () => {
        console.log(interval);
        clearInterval(interval, 1000);
    }

    const navigate = () => {
        const confirmBox = window.confirm(
            "Are you sure to stop the Timer"
        )
        if (confirmBox === true) {
          const clear =  clearInterval(interval);
          console.log('clear')
            // navigate('/ButtonDrop')
        }
    }



    return (
        <div>
            date: {new Date().toLocaleTimeString()}
            <button onClick={clockstop}>Stop</button>
            <a href='/drop' onClick={navigate}>DropDown</a>
        </div>


    );
}


export default Timer