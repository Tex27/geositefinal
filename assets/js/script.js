'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
	for (let i = 0; i < elem.length; i++) {
		elem[i].addEventListener("click", function () {
			navbar.classList.toggle("active");
			overlay.classList.toggle("active");
		});
	}
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

	if (window.scrollY >= 200) {
		header.classList.add("active");
		goTopBtn.classList.add("active");
	} else {
		header.classList.remove("active");
		goTopBtn.classList.remove("active");
	}

});

// Add this to your JavaScript
const themeSwitch = document.getElementById("theme-switch-toggle");
const body = document.body;
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

themeSwitch.addEventListener("change", function () {
	if (themeSwitch.checked) {
		body.classList.add("dark-theme");
		sunIcon.style.opacity = 0;
		moonIcon.style.opacity = 1;
		body.setAttribute("data-theme", "dark");
	} else {
		body.classList.remove("dark-theme");
		sunIcon.style.opacity = 1;
		moonIcon.style.opacity = 0;
		body.setAttribute("data-theme", "light");
	}
});



// Example for the first map
/* mapboxgl.accessToken = 'pk.eyJ1IjoidGV4OTk5OSIsImEiOiJjbHJycXZiY3EwZTluMmtwZnAwM3BydTJ5In0.t8gVc0dwxkbYbn-7BMgd8Q';
var map1 = new mapboxgl.Map({
	container: 'map1',
	style: 'mapbox://styles/mapbox/satellite-streets-v11', // Replace with your desired Mapbox style URL
	center: [-7.455346896679032, 39.41518917770577], // Replace with your desired center coordinates
	zoom: 9, // Adjust the initial zoom level
});

// Example for the second map
var map2 = new mapboxgl.Map({
	container: 'map2',
	style: 'mapbox://styles/mapbox/satellite-streets-v11', // Replace with your desired Mapbox style URL
	center: [-7.455346896679032, 39.41518917770577], // Replace with your desired center coordinates
	zoom: 9, // Adjust the initial zoom level
}); */

// Call additional Mapbox-related functionality here

// Example marker with custom icon
/* var marker = document.createElement('div');
marker.className = 'marker'; */

/* const marker = new mapboxgl.Marker(marker)
	.setLngLat([-7.367887977426932, 39.449741703702585])
	.addTo(map1); */

/* const marker = new mapboxgl.Marker()
.setLngLat([-7.367887977426932, 39.449741703702585])
.addTo(map1); */
// You can add markers, popups, etc., using the Mapbox GL JS API

/* const geojson = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			geometry: {
				type: 'point',
				coordinates: [-7.367887977426932, 39.449741703702585]
			},
			properties: {
				title: 'RailBike Marvão',
				description: 'atividade'
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'point',
				coordinates: [0, 0]
			},
			properties: {
				title: 'Teste',
				description: 'teste'
			}
		}
	]
}; */

/* // add markers to map
for (const feature of geojson.features) {
	// create a HTML element for each feature
	const el = document.createElement('div');
	el.className = 'marker';
  
	// make a marker for each feature and add to the map
	new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  }

map1.on('load', () => {
	map1.addLayer({
		id: 'terrain-data',
		type: 'line',
		source: {
			type: 'vector',
			url: 'mapbox://mapbox.mapbox-terrain-v2'
		},
		'source-layer': 'contour'
	});
}); */
