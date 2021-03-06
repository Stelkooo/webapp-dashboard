const trafficCanvas = document.getElementById("traffic-chart");
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
        backgroundColor: 'rgba(116, 119, 191, .5)',
        borderWidth: 1,
        fill: true,
        hoverRadius: 4,
        tension: .4,
    }]
}
let trafficOptions = {
    aspectRatio: 2.5,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});
const dailyCanvas = document.getElementById("daily-chart");
const dailyChartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyChartData,
    options: dailyOptions
});
const mobileCanvas = document.getElementById("mobile-users-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#81C98F',
            '#51B6C8'
        ]
    }]
};
const mobileOptions = {
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                font: {
                    weight: 700,
                }
            }
        }
    }
};
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

const trafficRadios = document.getElementsByClassName('radio')

const trafficHourly = document.getElementById('hourly');
const trafficDaily = document.getElementById('daily');
const trafficWeekly = document.getElementById('weekly');
const trafficMonthly = document.getElementById('monthly'); 

const hourlyData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500];
const dailyData = [];
hourlyData.forEach(e => dailyData.push(e * 24 * Math.random()));
const weeklyData = []; 
hourlyData.forEach(e => weeklyData.push(e * 24 * 7 * Math.random()));
const monthlyData = [];
hourlyData.forEach(e => monthlyData.push(e * 24 * 7 * 4 * Math.random()));

const updateTrafficChart = (newData) => {
    trafficChart.data.datasets[0].data = newData;
    trafficChart.update();
}

for (let i = 0; i < trafficRadios.length; i++) {
    const radio = trafficRadios[i];
    radio.addEventListener('click', (e) => {
        const radioId = e.target.id;
        if (radioId === 'hourly') {
            updateTrafficChart(hourlyData);
        } else if (radioId === 'daily') {
            updateTrafficChart(dailyData);
        } else if (radioId === 'weekly') {
            updateTrafficChart(weeklyData);
        } else if (radioId === 'monthly') {
            updateTrafficChart(monthlyData);
        }
    });
}

