import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    CategoryScale, // For handling the x-axis (categorical axis) in charts.
    LinearScale, // For handling the y-axis (numerical axis) in charts.
    PointElement, // Allows you to add and configure individual points on line charts or scatter plots.
    LineElement, // Enables drawing lines between data points on line charts.
    Title, // Adds a title to your chart.
    Tooltip, // Provides tooltips that show additional information when hovering over data points.
    Legend, // Adds a legend to the chart for identifying datasets or categories.
    Filler // Fills the area under a line chart with a background color.
} from 'chart.js';
import { lineChartData } from './LineFakeData.js';
import styles from './LineChart.module.css';

// Registering components with Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



const LineGraph = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            }
        }
    };

    // const data = {lineChartData};

    return (
        <div className={styles.container}>
            <Line 
            options = { options }
            data = { lineChartData }
            />
        </div>
    )
}

export default LineGraph;




























/// How to delete labels and data from chart///

// import React, { useRef } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

// ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

// const ChartComponent = () => {
//   const chartRef = useRef(null);

//   const lineChartData = {
//     labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
//     datasets: [
//       {
//         label: '',
//         data: [0, 10000, 5000, 15000, 10000, 20000],
//         borderColor: '#4e73df',
//         fill: true,
//         backgroundColor: 'rgba(238, 240, 253, 0.6)',
//         tension: 0.3,
//       },
//     ],
//   };

//   const removeLabelAndData = (index) => {
//     const chart = chartRef.current;

//     if (chart) {
//       chart.data.labels.splice(index, 1);
//       chart.data.datasets.forEach((dataset) => {
//         dataset.data.splice(index, 1);
//       });
//       chart.update();
//     }
//   };

//   return (
//     <div>
//       <Line ref={chartRef} data={lineChartData} />
//       <button onClick={() => removeLabelAndData(1)}>Remove March</button>
//     </div>
//   );
// };

// export default ChartComponent;

