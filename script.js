// Create video script element
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Take data attributes from video-container
var videoID = $(".video-container").data("video-id");
var videoYouTubeLink = $(".video-container").data("video-youtube-link");
var videoWidthAdd = $(".video-container").data("video-width-add");
var videoHeightAdd = $(".video-container").data("video-height-add");

// Set up the YouTube video with player defaults
var player, playerDefaults = {
	autoplay: 0,
	autohide: 1,
	modestbranding: 1,
	rel: 0,
	showinfo: 0,
	controls: 0,
	disablekb: 1,
	enablejsapi: 0,
	iv_load_policy: 3
};

var video = {
	'videoId': videoID, 'suggestedQuality': 'hd720'
};

function onYouTubePlayerAPIReady(){
	player = new YT.Player('player', {
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}, 
		playerVars: playerDefaults
	});
}

function onPlayerReady(){
	player.loadVideoById(video);
	player.mute();
}

function vidRescale() {
	var width = $(window).width() + videoWidthAdd,
	height = $(window).height() + videoHeightAdd;

	if (width/height > 16/9) {
		player.setSize(width, width/16*9);
		$('.player .screen').css({
			'left': '0px'
		});
	} else {
		player.setSize(height/9*16, height);
		$('.player .screen').css({
			'left': -($('.player .screen').outerWidth()-width)/2});
		}
	}

	$(window).on('load resize', function() {
		vidRescale();
	});
