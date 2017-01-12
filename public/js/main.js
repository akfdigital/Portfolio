
$( document ).ready(function() {
    console.log( "ready!" );

	$('#element').typeIt({
     	speed: 50,
     	breakLines: true,
     	autoStart: false
	})
	.tiType('Hi, I\'m Ali FitzGerald')
	.tiPause(500)
	.tiDelete(14)
	.tiType('AKFDigital, ')
	.tiBreak() .tiPause(750)
	.tiType('Happy you\'re here.')
	.tiBreak() .tiPause(750)
	.tiType(' Maybe I can help you')
	.tiSettings({speed: 700})
	.tiType('...')
	.tiPause(750)
	.tiSettings({speed: 50})
	.tiDelete()
	.tiType('Thanks!');

});