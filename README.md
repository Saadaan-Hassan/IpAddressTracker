# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

**Desktop View**

![](./design/desktop-design.jpg)

**Mobile View**

![](./design/mobile-design.jpg)

### Links

- Solution URL: [IP Address Tracker Solution](https://www.frontendmentor.io/solutions/mapping-triumph-ip-tracker-challenge-conquered-jsL9q83shF)
- Live Site URL: [IP Address Tracker Live](https://saadaan-hassan.github.io/IpAddressTracker/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [IP Geolocation API by IPify](https://geo.ipify.org/)
- [LeafletJS](https://leafletjs.com/)

### What I learned

This challange was a great opportunity to learn how to use the LeafletJS library. I also learned how to use the IP Geolocation API by IPify.

```js

// Fetch API
function fetchIPInformation(ipAddress) {
  url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;

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

// LeafletJS
const map = L.map("map").setView([latitude, longitude], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  // maxZoom: 13,
  attribution: "© OpenStreetMap",
}).addTo(map);
L.marker([latitude, longitude]).addTo(map);
```

### Continued development

I would like to continue to learn how to use the LeafletJS library. I would also like to learn how to use the Google Maps API.

### Useful resources

- [LeafletJS](https://leafletjs.com/) - This is the official documentation for the LeafletJS library. It was very helpful in learning how to use the library.
- [IP Geolocation API by IPify](https://geo.ipify.org/) - This is the official documentation for the IP Geolocation API by IPify. It was very helpful in learning how to use the API.

## Author

- Frontend Mentor - [@Saadaan-Hassan](https://www.frontendmentor.io/profile/Saadaan-Hassan)

## Acknowledgments

I would like to thank [IP Geolocation API by IPify](https://geo.ipify.org/) for providing the API for this project. I would also like to thank [LeafletJS](https://leafletjs.com/) for providing the library for this project.
