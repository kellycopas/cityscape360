// Header image slideshow code for Bristol page using backstretchJS - https://www.jquery-backstretch.com/

// Create array with header images, fade after 3 seconds and change image.
$("#hero").backstretch([
      "img/bristol_header1.jpg",
      "img/bristol_header2.jpg",
      "img/bristol_header3.jpg",
      "img/bristol_header4.jpg"
      ], {
        fade: 750,
        duration: 3000
    });
