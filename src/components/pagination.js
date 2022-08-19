import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

function Page() {
    const [state, setState] = useState({
        user: []
    })
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => setState({ ...state, user: response.data }))
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [postPage, setPostPage] = useState(5);


    const first = currentPage * postPage;
    const second = first - postPage;
    const total = state.user.slice(second, first)
    let pageNumber = []
    let res = state.user.length;
    let sum = postPage;
    for (let i = 1; i < Math.ceil(res / sum); i++) {
        pageNumber.push(i)
        console.log("pagenumber", pageNumber)
    }


    const pageDrop = (e) => {
        setPostPage(e.target.value)
    }



    return (
        <div>
            <select name="" onChange={pageDrop} >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            {
                pageNumber &&
                pageNumber.map((each) => {
                    return (
                        <button onClick={() => setCurrentPage(each)}>{each}</button>
                    )
                })
            }


            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        total.map((each, index) => {
                            return (
                                <tr key={index}>
                                    <td>{each.id}</td>
                                    <td>{each.title}</td>
                                    <td>{each.body}</td>

                                </tr>
                            )

                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}
export default Page;