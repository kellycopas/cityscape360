// Airplane page loader, display until page content has fully loaded, then fade out.

$(window).on('load', function(){
     $('#page-loader').fadeOut(3000);
});

$(document).ready(function(){
	document.getElementsByTagName("html")[0].style.visibility = "visible";
});