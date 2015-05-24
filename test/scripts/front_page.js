//Front page Js file


//This video can be found in week 2 first video, at the end of the video. 
function resize() {
	var canvas = docuement.getElementById("canvas");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
}

window.addEventListener("resize", resize, false);