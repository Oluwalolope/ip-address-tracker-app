//Get a reference for the input form
const inputForm = document.querySelector('form');

//Get a reference for the output fields
const outputAddress = document.querySelector('.address');
const outputLocation = document.querySelector('.location p');
const outputTimezone = document.querySelector('.timezone p');
const outputIsp = document.querySelector('.isp p');

//Api Key
const apiKey = 'at_d6YdRmS1XEgSSJqHnZJHcIXevbLJS';

//Regex
const domainRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

//map and tiles
const map = L.map('map').setView([51.505, -0.09], 14);
const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const tiles = L.tileLayer(tileUrl, { maxZoom: 19, attribution });
tiles.addTo(map);

//adding a custom marker
const myIcon = L.icon({
    iconUrl: 'assets/images/icon-location.svg',
    iconSize: [38, 45],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

const marker = L.marker([51.5, -0.09], {icon: myIcon}).addTo(map);


//Listen for the form being submitted
inputForm.addEventListener('submit', (e) => {
  e.preventDefault(); //prevent the page from refreshing
  let input = inputForm.querySelector('input[type=text]').value;

  getIpAddressInfo(input);
});

const getIpAddressInfo = async (input) => {
  let response;
  //If the user inputs a domain
  if (domainRegex.test(input)) {
    response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${input}`
    );
  }
  //Get the clients ip address on page load
  else if (input === null) {
    response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`
    );
  }
  //Else the user inputed an ip address
  else {
    response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${input}`
    );
  }
  const data = await response.json();

  domainRegex.test(input) && data.domains
    ? outputAddress.innerHTML = `<h3>Domain</h3>
            <p>${data.domains[0]}</p>`
    : outputAddress.innerHTML = `<h3>ip address</h3>
            <p>${data.ip}</p>`;

  data.isp
    ? (outputIsp.textContent = data.isp)
    : (outputIsp.textContent = 'N/A');

  outputLocation.textContent = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`;
  outputTimezone.textContent = `GMT ${data.location.timezone}`;

  //render map
  map.setView([data.location.lat, data.location.lng]);
  marker.setLatLng([data.location.lat, data.location.lng]);
};
getIpAddressInfo(null);