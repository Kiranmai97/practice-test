import React, { useState } from 'react'

export const Stringpb = () => {
    const [data, setData] = useState({
        text: '',
        result: [],
        lowerCase:[],
        lowerCasecount:0,
        upperCase: [],
        upperCasecount:0,
        vowelsCount:0,
        vowels:[]

    })
    const handleDivisibleNumber = (e) => {
        setData({ ...data, text: e.target.value })
    }


    const handleNumber = () => {
        const str = data.text.split(' ')
        for (let i = 0; i < str.length; i++) {
            let count = 0
            for (let j = 0; j < str.length; j++) {
                if (str[i] == str[j]) {
                    count++
                }
            }
            if (count == 1) {
                data.result.push(str[i])
                setData({ ...data }) 
            }
        }
        console.log(data.result);
    }



    let {lowerCase,upperCase,lowerCasecount,upperCasecount,vowelsCount,vowels}=data
    const Find = () => {
       const text= data.text.split('');
       console.log("dsfas",text)
        for(let i=0;i<text.length;i++){
            if(text[i]==text[i].toLowerCase()){
               lowerCase.push(text[i])
                lowerCasecount++
                setData({...data,lowerCase,lowerCasecount})
            }
           
            if(text[i]==text[i].toUpperCase()){
                upperCase.push(text[i])
                upperCasecount++
                setData({...data,upperCase,upperCasecount})
            }

            
            
        }


    }
    console.log(`lower case ${lowerCasecount} ${lowerCase}`);
    console.log(`uppper case ${upperCasecount} ${upperCase}`);


return (
    <div>
        <input type="text" name="text" onChange={handleDivisibleNumber} />
        <button onClick={handleNumber}>Find Unique String</button>
        <button onClick={Find}>Find</button>

        <h1>Unique Strings</h1>

        {
            data.result.map((each, key) => {
                return (
                    <p key={key}>{each}</p>
                )
            })
        }
    </div>

)
}
