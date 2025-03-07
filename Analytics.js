// Function to update sensor data with random values
function updateSensorData() {
    document.getElementById("temp").innerText = (Math.random() * 10 + 20).toFixed(2) + "°C";
    document.getElementById("humidity").innerText = (Math.random() * 30 + 50).toFixed(2) + "%";
    document.getElementById("ethylene").innerText = (Math.random() * 5 + 1).toFixed(2) + " ppm";
    document.getElementById("vocs").innerText = (Math.random() * 10 + 5).toFixed(2) + " ppm";
    document.getElementById("co2").innerText = (Math.random() * 50 + 350).toFixed(2) + " ppm";
}

// Update every 3 seconds
setInterval(updateSensorData, 3000);
updateSensorData();
