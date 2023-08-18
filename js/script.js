let ipSearch = document.getElementById("search");
let ipSearchBtn = document.getElementById("search-btn");
let ipAddressText = document.getElementById("ip-address");
let locationText = document.getElementById("location");
let timezoneText = document.getElementById("time-zone");
let ispText = document.getElementById("isp");

const regex = new RegExp(
  "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}$"
);

const map = L.map("map").setView([0, 0], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  // maxZoom: 13,
  attribution: "© OpenStreetMap",
}).addTo(map);
const marker = L.marker([0, 0]).addTo(map);

function fetchIPInformation(ipAddress) {
  url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_RYrTixOoDj5ZIUKy8lQ1EpgzSNOdE&ipAddress=${ipAddress}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      ipAddressText.innerHTML = data.ip;
      locationText.innerHTML = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`;
      timezoneText.innerHTML = `UTC ${data.location.timezone}`;
      ispText.innerHTML = data.isp;
      setMap(data.location.lat, data.location.lng);
    });
}

function setMap(latitude, longitude) {
  map.setView([latitude, longitude], 13);
  marker.setLatLng([latitude, longitude]);
}

clientUrlApi = "https://api.ipify.org/?format=json";

fetch(clientUrlApi)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    fetchIPInformation(data.ip);
  });

ipSearchBtn.addEventListener("click", () => {
  let ip = ipSearch.value;
  if (regex.test(ip)) {
    fetchIPInformation(ip);
  } else {
  }
});

ipSearch.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    ipSearchBtn.click();
  }
});
