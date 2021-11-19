# Packages we use

-> react-chartjs-2 
-> chart.js


### For Line Chart
1) Create here the the component for LineChart
2) Import the Line from 'react-chartjs-2'
3) Now render the Line component in LineChart 
4) Inside the Line Component we need to send some props

    a) data = {}
    --> data contain certain things like labels(which display on x-axis), and dataSets    (actual values which display on the table)
    --> example...! data = {
        labels: ['jan', 'feb', 'mar', 'apr'],
        datasets: [
            {
                label: "sales in 2020 (M)", 
                data: [12, 14, 21, 10],
                and some design things here like background and all
            }
        ]
    }

    b) options = {}
    --> Here we set mostly the things which we display in y-axis like from where we start
    how much gap in 2 values 
    --> example: 
    3
    2
    1
    0  --> starts with 0 increment with 1 till 3 this things we write in options
