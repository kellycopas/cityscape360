// Code for random generator button on home page.
// Based on code from - https://learninginhand.com/blog/random-messages-and-links


// Create array of urls.
var urls = new Array();
urls[0] = "http://kellycopas.panel.uwe.ac.uk/cityscape/image_gallery.html";
// more urls can be added here...

// Function to pick a URL from random and go to that location.
function rand(){
	var random = Math.floor(Math.random() * urls.length);
	window.location = urls[random];
}