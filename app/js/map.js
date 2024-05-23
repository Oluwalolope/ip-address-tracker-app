//map and tiles
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//adding a custom marker
const myIcon = L.icon({
  iconUrl: 'assets/images/icon-location.svg',
  iconSize: [38, 45],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const marker = L.marker([51.5, -0.09], { icon: myIcon }).addTo(map).bindPopup('Current location').openPopup();