
$( document ).ready(function() {
    console.log( "ready!" );

	$('#element').typeIt({
     	speed: 50,
     	breakLines: true,
     	autoStart: false, 
     	loop: true, 
     	loopDelay: 750
	})
	.tiType('Hi, I\'m Ali FitzGerald')
	.tiPause(500)
	.tiDelete(22)
	.tiType('Welcome! ')
	.tiBreak() .tiPause(750)
	.tiSettings({speed: 50})
	.tiDelete()



	var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
        duration: 100,    // the scene should last for a scroll distance of 100px
        offset: 50        // start this scene after scrolling for 50px
    })
    .setPin("") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

});