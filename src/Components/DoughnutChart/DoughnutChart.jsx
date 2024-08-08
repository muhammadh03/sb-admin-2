import React from 'react';
import styles from './DoughnutChart.module.css';
import { Doughnut } from 'react-chartjs-2';
import { 
    Chart as ChartJS, // Imports the main Chart component from Chart.js and renames it to ChartJS.
    Tooltip, // Provides tooltips that show additional information when hovering over data points.
    Legend, // Adds a legend to the chart for identifying datasets or categories. 
    ArcElement //Adds support for drawing arc-shaped elements like those used in pie charts and doughnut charts.
} from 'chart.js';

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement,
);


const data = {
    labels: ['Direct', 'Referral', 'Social'],
    datasets: [
        {
            label: '',
            data: [55, 30, 15],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
            weight: 5,
        }
    ]
}


const DoughnutChart = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: 99,
        plugins: {
            legend: {
                position: 'bottom',
            },
        }
    };


    return (
        <div className={styles.container}>
            <Doughnut 
            data={data} 
            options={options} 
            />
        </div>
    )
};

export default DoughnutChart;