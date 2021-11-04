import React from 'react'
import {Bar } from 'react-chartjs-2';


const CarChart = (props:{trips:any}) => {

    const uniqueCars= Array.from(new Set(props.trips.map((l: { car: any; }) => l.car)));
    
    let result = props.trips.reduce( (acc: { [x: string]: any; }, o: { car: string | number; }) => (acc[o.car] = (acc[o.car] || 0)+1, acc), {} );
    result = Object.values(result);

    return <Bar
            data= {{
                labels: uniqueCars,
                datasets: [{
                    label: 'Car Usage',
                    data: result,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]}}
            height={500}
            width={1000}
            options= {{ title: {display: true,
                text: 'Car Chart', fontSize: 22},scales:{
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                mantainAspectRatio : false          
            }}
        />
}

export default CarChart;