const sleepData = [7, 6.5, 7.5, 6, 8, 7.5, 6.5];

const ctx = document.getElementById('sleepChart').getContext('2d');

const sleepChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Hours of Sleep',
            data: sleepData,
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 10, // Set the max value on the y-axis
            },
        },
    },
});