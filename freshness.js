// Sample Fruit Data
let fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" }
];

// Function to Generate Random Sensor Data
function generateData() {
    return {
        temp: (Math.random() * 10 + 20).toFixed(2),
        humidity: (Math.random() * 30 + 50).toFixed(2),
        ethylene: (Math.random() * 5 + 1).toFixed(2),
        vocs: (Math.random() * 10 + 5).toFixed(2),
        co2: (Math.random() * 50 + 350).toFixed(2),
    };
}

// Function to Determine Freshness Status
function getStatus(ethylene) {
    if (ethylene < 2) return '<span class="status good">Fresh</span>';
    else if (ethylene < 4) return '<span class="status moderate">Moderate</span>';
    else return '<span class="status bad">Spoiled</span>';
}

// Update Table Data
function updateTable() {
    let tableBody = document.getElementById("freshnessTable");
    tableBody.innerHTML = "";
    fruits.forEach(fruit => {
        let data = generateData();
        tableBody.innerHTML += `
            <tr>
                <td>${fruit.id}</td>
                <td>${fruit.name}</td>
                <td>${data.temp}°C</td>
                <td>${data.humidity}%</td>
                <td>${data.ethylene} ppm</td>
                <td>${data.vocs} ppm</td>
                <td>${data.co2} ppm</td>
                <td>${getStatus(data.ethylene)}</td>
            </tr>
        `;
    });

    updateGraphs();
}

// Initialize Charts
function createChart(ctx, label, color) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: label,
                borderColor: color,
                backgroundColor: color + "33",
                borderWidth: 2,
                data: [],
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { display: false },
                y: { beginAtZero: false }
            }
        }
    });
}

// Get Chart Elements
const tempChart = createChart(document.getElementById("tempChart"), "Temperature (°C)", "#0066cc");
const humidityChart = createChart(document.getElementById("humidityChart"), "Humidity (%)", "#228b22");
const gasChart = createChart(document.getElementById("gasChart"), "Gas Levels (ppm)", "#cc0000");

// Update Graph Data
function updateGraphs() {
    let now = new Date().toLocaleTimeString();
    let data = generateData();

    function addData(chart, value) {
        if (chart.data.labels.length > 10) {
            chart.data.labels.shift();
            chart.data.datasets[0].data.shift();
        }
        chart.data.labels.push(now);
        chart.data.datasets[0].data.push(value);
        chart.update();
    }

    addData(tempChart, data.temp);
    addData(humidityChart, data.humidity);
    addData(gasChart, data.ethylene);
}

// Update every 3 seconds
setInterval(updateTable, 3000);
updateTable();
