document.addEventListener("DOMContentLoaded", function () {
    const labels = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
    const temperatureData = [4.5, 5, 4.8, 6, 7.2, 5.5, 4.9, 4.3, 5.1, 6.3];
    const humidityData = [75, 72, 74, 78, 80, 76, 73, 70, 74, 79];
    const ethyleneData = [0.2, 0.3, 0.4, 0.6, 1, 0.5, 0.3, 0.2, 0.4, 0.7];
    const vocData = [0.1, 0.2, 0.3, 0.5, 0.8, 0.4, 0.2, 0.1, 0.3, 0.6];
    const co2Data = [400, 450, 470, 500, 550, 480, 420, 400, 460, 510];

    function createChart(ctx, label, data, color) {
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    borderColor: color,
                    borderWidth: 2,
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                }
            }
        });
    }

    createChart(document.getElementById('temperatureChart').getContext('2d'), 'Temperature (°C)', temperatureData, 'rgb(255, 99, 132)');
    createChart(document.getElementById('humidityChart').getContext('2d'), 'Humidity (%)', humidityData, 'rgb(54, 162, 235)');
    createChart(document.getElementById('ethyleneChart').getContext('2d'), 'Ethylene (ppm)', ethyleneData, 'rgb(75, 192, 192)');
    createChart(document.getElementById('vocChart').getContext('2d'), 'VOCs (ppm)', vocData, 'rgb(153, 102, 255)');
    createChart(document.getElementById('co2Chart').getContext('2d'), 'CO₂ (ppm)', co2Data, 'rgb(255, 159, 64)');
});

// Logout function
function logout() {
    alert("Logging out...");
    window.location.href = "login.html";
}
