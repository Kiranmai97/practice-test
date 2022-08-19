
//  Find out whether the given two numbers n1 and n2 are mirrors. Two numbers are said to be so mirrors if each sum of divisors is equal to the other number.
// Ex. 220 and 284 are mirrors
// Divisors of 220 = 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110
// 1+2+4+5+10+11+20+22+44+55+110=284
// Divisors of 284 = 1, 2, 7, 71, 142
// 1+2+7+71+142=220
// Hence, 220 and 284 are called mirrors.

import React, { useState } from "react";

function Mirror() {

    const [data, setData] = useState({
        num: ''
    })

    const handle = (e) => {
        console.log("typed")
        setData({ ...data, num: e.target.value })

    }
    const handleNumber = () => {
        // console.log("Submited")
        var a = 10;
        var sum = 0;
        var result = 0;
        for (let i = 0; i < a; i++) {
            if (a % i === 0) {
                console.log(i)
                result = result + i
            }
            for (let j = 0; j < result; j++) {
                if (result % j === 0) {
                    console.log(j)
                    sum = sum + j
                }
                if (sum === result) {
                    console.log("it is Mirror")
                }
                else {
                    console.log("it is not Mirror")
                }
            }
        }
    }
    return (
        <div>
            <input type="number" name="num" onChange={handle} />
            <input type="submit" name="submit" onClick={handleNumber} />
        </div>
    );
}
export default Mirror;