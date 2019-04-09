// Show 'continue' button on index.html after 10 seconds.

window.onload = function(){
	setTimeout(delay, 10000);
};

function delay(){
	document.getElementById("cont").className="continue-show";
}