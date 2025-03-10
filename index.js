/* script.js */
function updateLevels() {
    document.getElementById("temp-value").innerText = Math.floor(Math.random() * 10 + 20) + " °C";
    document.getElementById("humidity-value").innerText = Math.floor(Math.random() * 50 + 30) + " %";
}
function logout() {
    window.location.href = "logout.html"; // Redirects to the logout page
}

setInterval(updateLevels, 2000);
updateLevels();

function getRandomStatus() {
    const statuses = ["✅ Fresh",  "❌ Expired"];
    return statuses[Math.floor(Math.random() * statuses.length)];
}
function getRandomWastage() {
    return Math.floor(Math.random() * 5) + " pcs";
}

function updateInventory() {
    const inventoryData = [
        { product: "🍎 Apples", quantity: Math.floor(Math.random() * 20), wastage: getRandomWastage(), status: getRandomStatus() },
        { product: "🍌 Bananas", quantity: Math.floor(Math.random() * 20), wastage: getRandomWastage(), status: getRandomStatus() },
        { product: "🍊 Oranges", quantity: Math.floor(Math.random() * 20), wastage: getRandomWastage(), status: getRandomStatus() },
        { product: "🍐 Guava", quantity: Math.floor(Math.random() * 20), wastage: getRandomWastage(), status: getRandomStatus() }
    ];
    
    let tableBody = document.getElementById("inventory-table");
    tableBody.innerHTML = "";
    inventoryData.forEach(item => {
        let row = `<tr><td>${item.product}</td><td>${item.quantity}</td><td>${item.wastage}</td><td>${item.status}</td></tr>`;
        tableBody.innerHTML += row;
    });
}
setInterval(updateInventory, 5000);
updateInventory();
