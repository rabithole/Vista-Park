/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/

// Speed of the automatic slideshow
var slideshowSpeed = 4000;

// Variable to store the images we need to set as background
// which also includes some text and url's.
var photos = [ 
		{
		"title" : "",
		"image" : "red_hair.jpg",
		"url" : "",
		"firstline" : "",
		"secondline" : ""
	}, {
		"title" : "",
		"image" : "sunset_sharpened.jpg",
		"url" : "",
		"firstline" : "",
		"secondline" : ""
	}, {
		"title" : "Two ships passing",
		"image" : "two_ships_passing.jpg",
		"url" : "",
		"firstline" : "Watch the ",
		"secondline" : "ships go by!"
	},  {
		"title" : "A ship up close",
		"image" : "close_ship.jpg",
		"url" : "",
		"firstline" : "Logs",
		"secondline" : "On A Big Boat!"
	}, {
		"title" : "Watch the sunset. ",
		"image" : "colorful_sunset.jpg",
		"url" : "",
		"firstline" : "Take time to watch the",
		"secondline" : "sunset"
	}, {
		"title" : "Sunset in Skamokawa",
		"image" : "google_map_background.jpg",
		"url" : "",
		"firstline" : "Enjoy the",
		"secondline" : "beach!"
	},{
		"title" : "Sunset in Skamokawa",
		"image" : "amazing_sunset_background.jpg",
		"url" : "",
		"firstline" : "Slow down",
		"secondline" : "watch the sun go down"
	},{
		"title" : "Our big field is perfect to play in!",
		"image" : "grass_toward_astoria.jpg",
		"url" : "",
		"firstline" : "Come and play",
		"secondline" : "in our really big field!"
	},{
		"title" : "Tuggin at night!",
		"image" : "night_towing_tug.jpg",
		"url" : "",
		"firstline" : "Working the",
		"secondline" : "NIGHT SHIFT!"
	},{
		"title" : "Hammin it up",
		"image" : "piece_sign_background.jpg",
		"url" : "",
		"firstline" : "Have fun",
		"secondline" : "in the sand!"
	}
	
];



$(document).ready(function() {
		
	// Backwards navigation
	$("#back").click(function() {
		stopAnimation();
		navigate("back");
	});
	
	// Forward navigation
	$("#next").click(function() {
		stopAnimation();
		navigate("next");
	});
	
	var interval;
	$("#control").toggle(function(){
		stopAnimation();
	}, function() {
		$(this).css({ "background-image" : "url(images/btn_pause.png)" });// Change the background image to "pause"		
		navigate("next");	// Show the next image	
		interval = setInterval(function() {// Start playing the animation
			navigate("next");
		}, slideshowSpeed);
	});
	
	
	var activeContainer = 1;	
	var currentImg = 0;
	var animating = false;
	var navigate = function(direction) {
		// Check if no animation is running. If it is, prevent the action
		if(animating) {
			return;
		}
		
		// Check which current image we need to show
		if(direction == "next") {
			currentImg++;
			if(currentImg == photos.length + 1) {
				currentImg = 1;
			}
		} else {
			currentImg--;
			if(currentImg == 0) {
				currentImg = photos.length;
			}
		}
		
		// Check which container we need to use
		var currentContainer = activeContainer;
		if(activeContainer == 1) {
			activeContainer = 2;
		} else {
			activeContainer = 1;
		}
		
		showImage(photos[currentImg - 1], currentContainer, activeContainer);
		
	};
	
	var currentZindex = -1;
	var showImage = function(photoObject, currentContainer, activeContainer) {
		animating = true;
		
		// Make sure the new container is always on the background
		currentZindex--;
		
		// Set the background image of the new active container
		$("#headerimg" + activeContainer).css({
			"background-image" : "url(images/" + photoObject.image + ")",
			"display" : "block",
			"z-index" : currentZindex
		});
		
		// Hide the header text
		$("#headertxt").css({"display" : "none"});
		
		// Set the new header text
		
		
		
		// Fade out the current container
		// and display the header text when animation is complete
		$("#headerimg" + currentContainer).fadeOut(function() {
			setTimeout(function() {
				$("#headertxt").css({"display" : "block"});
				animating = false;
			}, 0);
		});
	};
	
	var stopAnimation = function() {
		// Change the background image to "play"
		$("#control").css({ "background-image" : "url(images/btn_play.png)" });
		
		// Clear the interval
		clearInterval(interval);
	};
	
	// We should statically set the first image
	navigate("next");
	
	// Start playing the animation
	interval = setInterval(function() {
		navigate("next");
	}, slideshowSpeed);
	
});