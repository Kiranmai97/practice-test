import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';


const AxiosFetch = () => {

    const [state, setState] = useState({
        user: []
    })

    // `Axios with Async and await`

    useEffect(() => {
        const axios = require("axios");
        async function getJSONAsync() {
            let json = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log('axiosAsync');
            return json;
        }

        (async () => {
            let response = await getJSONAsync();
            console.log('>>>>>>>>>>> abc', response.data.data);
            setState({...state, user:response.data})
        })();
    }, []);

    // `  Axios with Promise`

    // const axiosPromise = require('axios').default;
    // const axiosPromise = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => {
    //             console.log(response.data);
    //             setState({ ...state, user: response.data })
    //         })
    //         .catch(err => {
    //             // Handle Error Here
    //             console.error(err);
    //         });
    // console.log("axiosPromise")
    // }

    //    ` fetch the data`

    // const Fetch = () => {
    //     const url = 'https://jsonplaceholder.typicode.com/posts'
    //     fetch(url).then(res => res.json())
    //         .then(res => setState({ ...state, user: res })
    //         )
    // }

    // ` fetch with async and await`

    // const FetchAsync = () => {
    //     async function getJSONAsync() {
    //         let json = await fetch('https://jsonplaceholder.typicode.com/posts')
    //             .then(res => res.json())
    //             .then(res => setState({ ...state, user: res }))
    //         console.log("fetchAsync")
    //     }
    //     (async () => {
    //         let response = await getJSONAsync();
    //         // console.log('>>>>>>>>>>> abc', response.json());
    //         setState({ ...state, user: response.json() })
    //     })();
    // }


    // `fetch with Promise`
    // const FetchPromise = () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(response => {
    //             console.log('fetchPromise');
    //             setState({ ...state, user: response })
    //         })
    //         .catch(err => {
    //             // Handle Error Here
    //             console.error(err);
    //         });
    // }




    useEffect(() => {
        // axiosPromise();
        // Fetch();
        // FetchAsync();
        // FetchPromise();
    }, [])
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.user.map((each, index) => {
                            return (
                                <tr key={index}>
                                    <td>{each.userId}</td>
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

export default AxiosFetch