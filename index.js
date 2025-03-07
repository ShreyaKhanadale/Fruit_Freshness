/* script.js */
function updateLevels() {
    document.getElementById("temp-value").innerText = Math.floor(Math.random() * 10 + 20) + " °C";
    document.getElementById("humidity-value").innerText = Math.floor(Math.random() * 50 + 30) + " %";
    document.getElementById("gas-value").innerText = Math.floor(Math.random() * 500 + 100) + " PPM";
}
function logout() {
    window.location.href = "logout.html"; // Redirects to the logout page
}

setInterval(updateLevels, 2000);
updateLevels();
function getRandomStatus() {
    const statuses = ["✅ Fresh", "⚠️ Near Expiry", "❌ Expired"];
    return statuses[Math.floor(Math.random() * statuses.length)];
}
function updateInventory() {
    const inventoryData = [
        { product: "🍎 Apples", quantity: Math.floor(Math.random() * 20), expiry: "03-03-2025", status: getRandomStatus() },
        { product: "🍌 Bananas", quantity: Math.floor(Math.random() * 20), expiry: "02-03-2025", status: getRandomStatus() },
        { product: "🍊 Oranges", quantity: Math.floor(Math.random() * 20), expiry: "04-03-2025", status: getRandomStatus() },
        { product: "🍐 Guava", quantity: Math.floor(Math.random() * 20), expiry: "10-03-2025", status: getRandomStatus() }
        ];
        
    
    let tableBody = document.getElementById("inventory-table");
    tableBody.innerHTML = "";
    inventoryData.forEach(item => {
        let row = `<tr><td>${item.product}</td><td>${item.quantity}</td><td>${item.expiry}</td><td>${item.status}</td></tr>`;
        tableBody.innerHTML += row;
    });
}
setInterval(updateInventory, 5000);
updateInventory();
