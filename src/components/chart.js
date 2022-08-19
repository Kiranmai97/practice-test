import React, { useState } from 'react'
import "./design.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Pie, Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);




const ChartBox = () => {

    const [state, setState] = useState({
        list: [],
        datasets: []

    })

    const handleInput = (e) => {
        setState({ ...state, list: e.target.value })
    }

    const submit = () => {
        console.log("generate")
        const list1 = (state.list).split(',')
        const num = list1.map((each) => {
            return (Number(each))
        })
        console.log(num, typeof num[0])
        setState({ ...state, datasets: num })
    }
    const labels = ['Fruits', 'Animals','Cars','Buildings','Music','Memories'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: state.datasets,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

            {
                label: '# of Votes',
                data: state.datasets,
                backgroundColor: [
                    'rgba(290, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
            {
                label: 'Dataset 1',
                data:state.datasets ,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
        ],
    }



    return (
        <div>
            <input type='text' placeholder='enter any Values' onChange={handleInput} />
            <button onClick={submit} >Generate</button>

            <div className='charts'>
                <Line className='linechart' data={data}/>
                <Pie className='piechart' data={data} />
                <Bar className='barchart' data={data} />
                </div>


        </div>
    )
}

export default ChartBox