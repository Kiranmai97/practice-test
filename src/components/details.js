import React, { useState } from "react"

function Details() {

    const [state, setState] = useState({
        users: [

            {
                id: 1,
                img: 'https://www.dreamstime.com/photos-images/nature.html',
                // img:url('https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/'),
                Customername: "Yeshvanth",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "8008100333",
                servicestates: "Scheduled",
            },
            {
                id: 2,
                Customername: "Lokesh",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "9618004758",
                servicestates: "No Issue",
            },
            {
                id: 3,
                Customername: "Kiranmai",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "9885565700",
                servicestates: "No Issue",
            },
            {
                id: 4,
                Customername: "mounika",
                Address: "1531 NE 39th St.",
                State: "67789004",
                APNNumber: "9573104064",
                servicestates: "Requested",
            },
            {
                id: 5,
                Customername: "pavanreddy",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "7893882164",
                servicestates: "Requested",
            },
            {
                id: 6,
                Customername: "Lakshmireddy",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "9703123245",
                servicestates: "Requested",
            },
            {
                id: 7,
                Customername: "Divya",
                Address: "1531 NE 39th St.",
                State: "67789004",
                APNNumber: "8019915527",
                servicestates: "No Issue",
            },
            {
                id: 8,
                Customername: "Ruthvika",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "8309964287",
                servicestates: "Requested",
            },
            {
                id: 9,
                Customername: "Sangeetha",
                Address: "1531 NE 39th St.",
                State: "67789004",
                APNNumber: "9511226260",
                servicestates: "No Issue",
            },
            {
                id: 10,
                Customername: "Hareesha",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "7731017512",
                servicestates: "Requested",
            },
            {
                id: 11,
                Customername: "Rajasekhar",
                Address: "1531 NE 39th St.",
                State: "67789004",
                APNNumber: "9618888132",
                servicestates: "No Issue",
            },
            {
                id: 12,
                Customername: "vinay kumar",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "9121695791",
                servicestates: "No Issue",
            },
            {
                id: 13,
                Customername: "Dharanesh",
                Address: "1531 NE 39th St.",
                State: "67789004",
                APNNumber: "9182174034",
                servicestates: "Scheduled",
            },
            {
                id: 14,
                Customername: "Rahul",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "9550524020",
                servicestates: "Requested",
            },
            {
                id: 15,
                Customername: "Saicharan",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "9666443645",
                servicestates: "No Issue",
            },
            {
                id: 16,
                Customername: "Kalyani",
                Address: "1531 NE 39th St.",
                State: "67789004",
                APNNumber: "9182293015",
                servicestates: "Scheduled",
            },
            {
                id: 17,
                Customername: "Vijetha",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "8501065037",
                servicestates: "No Issue",
            },
            {
                id: 18,
                Customername: "Indraja",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "8096306202",
                servicestates: "Scheduled",
            },
            {
                id: 19,
                Customername: "Shankar",
                Address: "1531 NE 39th St.",
                State: "67789004",
                APNNumber: "8328304976",
                servicestates: "Scheduled",
            },
            {
                id: 20,
                Customername: "venkateswarlu",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "9182713577",
                servicestates: "No Issue",
            },
            {
                id: 21,
                Customername: "sathish",
                Address: "1531 NE 39th St.",
                State: "94746674",
                APNNumber: "7093763322",
                servicestates: "Scheduled",
            },
            {
                id: 22,
                Customername: "Padmaja",
                Address: "1531 NE 39th St.",
                State: "67789004",
                APNNumber: "7207524414",
                servicestates: "No Issue",
            },
        ]
    })

    return (
        <div>
       let list  = state.users;
    console.log('list',list)
   const arr = list.sort((a,b)=>(a-b));
    console.log('arr',arr)
        </div>
    );

}
export default Details;
