import React from 'react'

// Line
import { Line } from 'react-chartjs-2'

const LineChart = () => {
    const data ={
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
            {
                label: "Tasks Completed In Month of 2021's",
                data: [12, 21, 11, 10],
                borderColor: 'rgb(75, 192, 192)'
            }
        ]
    }
    const option = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    return <Line data={data} options={option} />
}

export default LineChart
