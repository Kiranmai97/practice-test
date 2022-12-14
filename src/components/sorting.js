import React, { useState } from "react";
import { Table } from "react-bootstrap"
import up_arrow from '../icons/up_arrow.svg';
import down_arrow from '../icons/down_arrow.svg';
import './components.css'



function Sorting() {
    const [state, setState] = useState({
        users: [

            {
                id: 1,
                // img: 'https://www.dreamstime.com/photos-images/nature.html',
                // // img:url('https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/'),
                Name: "Yeshvanth",
                Email: "vivek@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "8008100333",
            },
            {
                id: 2,
                Name: "Lokesh",
                Email: "loki@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "9618004758",
            },
            {
                id: 3,
                Name: "Kiranmai",
                Email: "mahi@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "9885565700",
            },
            {
                id: 4,
                Name: "mounika",
                Email: "mouni@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "9573104064",
            },
            {
                id: 5,
                Name: "pavanreddy",
                Email: "pavan@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "7893882164",
            },
            {
                id: 6,
                Name: "Lakshmireddy",
                Email: "reddy@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                APNumberNNumber: "9703123245",
            },
            {
                id: 7,
                Name: "Divya",
                Email: "divya@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "8019915527",
            },
            {
                id: 8,
                Name: "Ruthvika",
                Email: "ruth@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "8309964287",
            },
            {
                id: 9,
                Name: "Sangeetha",
                Email: "geetha@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "9511226260",
            },
            {
                id: 10,
                Name: "Hareesha",
                Email: "hareesha@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "7731017512",
            },
            {
                id: 11,
                Name: "Rajasekhar",
                Email: "raja@abc.com",
                Address: "1531 NE 39th St.",
                State: "goa",
                Number: "9618888132",
            },
            {
                id: 12,
                Name: "vinay kumar",
                Email: "vinay@abc.com",
                Address: "1531 NE 39th St.",
                State: "chennai",
                Number: "9121695791",
            },
            {
                id: 13,
                Name: "Dharanesh",
                Email: "dharanesh@abc.com",
                Address: "1531 NE 39th St.",
                State: "trivanathapuram",
                Number: "9182174034",
            },
            {
                id: 14,
                Name: "Rahul",
                Email: "rahul@abc.com",
                Address: "1531 NE 39th St.",
                State: "kerala",
                Number: "9550524020",
            },
            {
                id: 15,
                Name: "Saicharan",
                Email: "charan@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "9666443645",
            },
            {
                id: 16,
                Name: "Kalyani",
                Email: "kalyani@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "9182293015",
            },
            {
                id: 17,
                Name: "Vijetha",
                Email: "vijju@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "8501065037",
            },
            {
                id: 18,
                Name: "Indraja",
                Email: "indra@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "8096306202",
            },
            {
                id: 19,
                Name: "Shankar",
                Email: "shankar@abc.com",
                Address: "1531 NE 39th St.",
                State: "hyderabad",
                Number: "8328304976",
            },
            {
                id: 20,
                Name: "venkateswarlu",
                Email: "venkat@abc.com",
                Address: "1531 NE 39th St.",
                State: "chennai",
                Number: "9182713577",
            },
            {
                id: 21,
                Name: "sathish",
                Email: "satish@abc.com",
                Address: "1531 NE 39th St.",
                State: "chennai",
                Number: "7093763322",
            },
            {
                id: 22,
                Name: "Padmaja",
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

    const [currentPage, setCurrentPage] = useState(1);
    const [postPage, setPostPage] = useState(5);
    
 
    const first = currentPage * postPage;
    const second = first-postPage;
    const total = state.users.slice(second,first)
    console.log(total)
  

    let pageNumber = []
    let res = state.users.length;
    let sum = postPage;
    for(let i=1;i<Math.ceil(res/sum);i++){
        pageNumber.push(i)
        console.log("pagenumber",pageNumber)
     }
   

    const pageDrop = (e) => {
        setPostPage(e.target.value)
    }


    return (
        <div>
            <Table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name{<img src={up_arrow} alt="up-arrow" onClick={handleUp}  className = "up_arrow"/>}{<img src={down_arrow} alt="down-arrow" onClick={handleDown}  className = "down_arrow" />}</th>
                        <th>Email{<img src={up_arrow} alt="up-arrow" onClick={handleUp} className = "up_arrow" />}{<img src={down_arrow} alt="down-arrow" onClick={handleDown}  className = "down_arrow"/>}</th>
                        <th>Address{<img src={up_arrow} alt="up-arrow" onClick={handleUp} className = "up_arrow" />}{<img src={down_arrow} alt="down-arrow" onClick={handleDown}  className = "down_arrow"/>}</th>
                        <th>State{<img src={up_arrow} alt="up-arrow" onClick={handleUp}  className = "up_arrow"/>}{<img src={down_arrow} alt="down-arrow" onClick={handleDown}  className = "down_arrow"/>}</th>
                        <th>Number{<img src={up_arrow} alt="up-arrow" onClick={handleUp} className = "up_arrow"/>}{<img src={down_arrow} alt="down-arrow" onClick={handleDown} className = "down_arrow" />}</th>
                    </tr>
                </thead>
                <tbody>
                    {
               
                        total.map((each, index) => {
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
            <select name="" onChange={pageDrop} >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            {
                pageNumber&&
        pageNumber.map((each) => {
            return (
                <button onClick={() => setCurrentPage(each)}>{each}</button>
            )
        })
    }
           


        </div>
    );
}

export default Sorting;