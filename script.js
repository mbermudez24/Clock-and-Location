// script.js

// Function to update time and date
function updateTime() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString();
  dateElement.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

// Function to fetch location
function fetchLocation() {
  const locationElement = document.getElementById("location");

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        locationElement.textContent = `Latitude: ${latitude.toFixed(
          2
        )}, Longitude: ${longitude.toFixed(2)}`;
      },
      (error) => {
        locationElement.textContent =
          "Unable to fetch location. Please allow location access.";
      }
    );
  } else {
    locationElement.textContent = "Geolocation is not supported by your browser.";
  }
}

// Initialize the clock and location fetch
document.addEventListener("DOMContentLoaded", () => {
  updateTime();
  fetchLocation();
  setInterval(updateTime, 1000); // Update time every second
});
