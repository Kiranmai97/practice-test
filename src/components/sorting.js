import React, { useState } from "react";

import { Table } from "react-bootstrap"

import up_arrow from "../icons/up_arrow.svg";
import down_arrow from "../icons/down_arrow.svg";



function Sorting() {
    const [state, setState] = useState({
        users: [

            {
                id: 1,
                // img: 'https://www.dreamstime.com/photos-images/nature.html',
                // // img:url('https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/'),
                Name: "Yeshvanth",
                Email: "mailto:vivek@abc.com",

                Email: "vivek@abc.com",

                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "8008100333",
            },
            {
                id: 2,
                Name: "Lokesh",
                Email: "mailto:loki@abc.com",

                Email: "loki@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "9618004758",
            },
            {
                id: 3,
                Name: "Kiranmai",
                Email: "mailto:mahi@abc.com",

                Email: "mahi@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "9885565700",
            },
            {
                id: 4,
                Name: "mounika",
                Email: "mailto:mouni@abc.com",
                Email: "mouni@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "9573104064",
            },
            {
                id: 5,
                Name: "pavanreddy",
                Email: "mailto:pavan@abc.com",

                Email: "pavan@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "7893882164",
            },
            {
                id: 6,
                Name: "Lakshmireddy",
                Email: "mailto:reddy@abc.com",

                Email: "reddy@abc.com",

                Address: "1531 NE 39th St.",
                State: "hyderabad",
                APNumberNNumber: "9703123245",
            },
            {
                id: 7,
                Name: "Divya",
                Email: "mailto:divya@abc.com",

                Email: "divya@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "8019915527",
            },
            {
                id: 8,
                Name: "Ruthvika",

                Email: "mailto:ruth@abc.com",

                Email: "ruth@abc.com",

                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "8309964287",
            },
            {
                id: 9,
                Name: "Sangeetha",

                Email: "mailto:geetha@abc.com",

                Email: "geetha@abc.com",

                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "9511226260",
            },
            {
                id: 10,
                Name: "Hareesha",

                Email: "mailto:hareesha@abc.com",

                Email: "hareesha@abc.com",

                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "7731017512",
            },
            {
                id: 11,
                Name: "Rajasekhar",

                Email: "mailto:raja@abc.com",

                Email: "raja@abc.com",

                Address: "1531 NE 39th St.",
                State: "goa",
                Number: "9618888132",
            },
            {
                id: 12,
                Name: "vinay kumar",

                Email: "mailto:vinay@abc.com",

                Email: "vinay@abc.com",

                Address: "1531 NE 39th St.",
                State: "chennai",
                Number: "9121695791",
            },
            {
                id: 13,
                Name: "Dharanesh",

                Email: "mailto:dharanesh@abc.com",

                Email: "dharanesh@abc.com",

                Address: "1531 NE 39th St.",
                State: "trivanathapuram",
                Number: "9182174034",
            },
            {
                id: 14,
                Name: "Rahul",

                Email: "mailto:rahul@abc.com",

                Email: "rahul@abc.com",

                Address: "1531 NE 39th St.",
                State: "kerala",
                Number: "9550524020",
            },
            {
                id: 15,
                Name: "Saicharan",

                Email: "mailto:charan@abc.com",

                Email: "charan@abc.com",

                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "9666443645",
            },
            {
                id: 16,
                Name: "Kalyani",

                Email: "mailto:kalyani@abc.com",

                Email: "kalyani@abc.com",

                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "9182293015",
            },
            {
                id: 17,
                Name: "Vijetha",

                Email: "mailto:vijju@abc.com",

                Email: "vijju@abc.com",

                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "8501065037",
            },
            {
                id: 18,
                Name: "Indraja",

                Email: "mailto:indra@abc.com",

                Email: "indra@abc.com",

                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "8096306202",
            },
            {
                id: 19,
                Name: "Shankar",

                Email: "mailto:shankar@abc.com",

                Email: "shankar@abc.com",

                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "8328304976",
            },
            {
                id: 20,
                Name: "venkateswarlu",

                Email: "mailto:venkat@abc.com",

                Email: "venkat@abc.com",

                Address: "1531 NE 39th St.",
                State: "chennai",
                Number: "9182713577",
            },
            {
                id: 21,
                Name: "sathish",

                Email: "mailto:satish@abc.com",

                Email: "satish@abc.com",

                Address: "1531 NE 39th St.",
                State: "chennai",
                Number: "7093763322",
            },
            {
                id: 22,
                Name: "Padmaja",

                Email: "mailto:padhu@abc.com",
                Email: "padhu@abc.com",

                Address: "1531 NE 39th St.",
                State: "chennai",
                Number: "7207524414",
            },
        ]
    })

    const [data, setData] = useState({
        list: [],
        arr: []
    })



    const handleUp = (e) => {
        const arr = state.users.sort((a, b) => a.Name.localeCompare(b.Name))
        console.log('arr', arr)
        // const arr1 =  state.users.sort((a, b) => a.State.localeCompare(b.State))
        // console.log('arr',arr1) 
        setState({ ...state, arr: arr })
    }

    const handleDown = () => {
        const arr = state.users.sort((b, a) => a.Name.localeCompare(b.Name))
        console.log('arr', arr)
        setState({ ...state, arr: arr })
    }

    const [page, setPage] = useState({
        pages: [],

        array:[]
    })

    const [currentPage, setCurrentPage] = useState(0)
    const [postPage, setpostPage] = useState(5)
    let array = []
    let pages = state.users
    const indexFirst = currentPage * postPage
    const indexLast = indexFirst - postPage
    const currentPost = pages.slice(indexFirst, indexLast)
    console.log("currentPost",currentPost)
    array.push(currentPost)
    console.log(array)
    const handleButton = (e) => {
        for (let i = 0; i < state.users.length; i++) {
            
        }
        setPage({ ...page, pages: e.target.background = "active #ddd" })
    }

            

   
    
  
    const currentSlide = (e) => {
        let newArr = []
        for (let i=0;i<state.users.length-1;i++){
                 let array=state.users.splice(0,5)
                 newArr.push(array) 
              console.log(newArr)
              }
        setPage({ ...page, pages: e.target.background = "active #ddd" })
    }
    const plusSlides=()=>{

    }


    return (
        <div>
            <Table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name{<img src={up_arrow} alt="up-arrow" onClick={handleUp} />}{<img src={down_arrow} alt="down-arrow" onClick={handleDown} />}</th>
                        <th>Email{<img src={up_arrow} alt="up-arrow" onClick={handleUp} />}{<img src={down_arrow} alt="down-arrow" onClick={handleDown} />}</th>
                        <th>Address{<img src={up_arrow} alt="up-arrow" onClick={handleUp} />}{<img src={down_arrow} alt="down-arrow" onClick={handleDown} />}</th>
                        <th>State{<img src={up_arrow} alt="up-arrow" onClick={handleUp} />}{<img src={down_arrow} alt="down-arrow" onClick={handleDown} />}</th>
                        <th>Number{<img src={up_arrow} alt="up-arrow" onClick={handleUp} />}{<img src={down_arrow} alt="down-arrow" onClick={handleDown} />}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.users.length > 0 &&
                        state.users.map((each, index) => {
                            return (
                                <tr key={index}>
                                    <td>{each.id}</td>
                                    <td>{each.Name}</td>
                                    <td>{each.Email}</td>
                                    <td>{each.Address}</td>
                                    <td>{each.State}</td>
                                    <td>{each.Number}</td>
                                </tr>

                            )
                        })
                    }

                </tbody>
            </Table>

            <div className="pagination">
                <button type="button" onClick={handleButton}>1</button>
                <button type="button" onClick={handleButton}>2</button>
                <button type="button" onClick={handleButton}>3</button>
                <button type="button" onClick={handleButton}>4</button>
                <button type="button" onClick={handleButton}>5</button>
                <button type="button" onClick={handleButton}>6</button>
            </div>


            <div >
                <button onClick={plusSlides}>❮</button>
                <button onClick={currentSlide} className="primary">1</button>
                <button onClick={currentSlide}>2</button>
                <button onClick={currentSlide}>3</button>
                <button onClick={currentSlide}>4</button>
                <button onClick={currentSlide}>5</button>
                <button onClick={plusSlides}>❯</button>
            </div>
        </div>
    );
}

export default Sorting;