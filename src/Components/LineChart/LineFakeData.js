export const lineChartData = {
    labels: [
        'Jan', 
        'Mar', 
        'May', 
        'Jul',
        'Sep',
        'Nov'
    ], // X axis labels
    datasets: [
        {
        label: '',
        // data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 35000, 25000, 40000], 
        data: [0, 10000, 5000, 15000, 10000, 20000], // Y axis labels
        borderColor: '#4e73df',
        fill: true, // for background color
        backgroundColor: 'rgba(238, 240, 253, 0.6)',
        tension: 0.3
        }
    ]
};