// Get the elements by their IDs
let hours = document.getElementById('Hours');
let minutes = document.getElementById('Minutes');
let seconds = document.getElementById('Seconds');

// Function to update the time
function updateTime() {
    let currentTime = new Date();
    hours.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}

// Initial call to update the time
updateTime();

// Update the time every second
setInterval(updateTime, 1000);