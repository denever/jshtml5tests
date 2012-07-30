function onload(){
    $( "#slider1" ).slider(
	{
	    value: 0,
	    min: 0,
	    max: 1,
	    step: 0.1,
	    slide: function( event, ui ) {
		$( "#about" ).fadeTo('fast', ui.value);
		}
	    }
    );
    $( "#slider2" ).slider(
	{
	    value: 0,
	    min: 0,
	    max: 1,
	    step: 0.1,
	    slide: function( event, ui ) {
		$( "#contacts" ).fadeTo('fast', ui.value);
		}
	    }
    );
    $( "#slider3" ).slider(
	{
	    value: 0,
	    min: 0,
	    max: 1,
	    step: 0.1,
	    slide: function( event, ui ) {
		$( "#press" ).fadeTo('fast', ui.value);
		}
	    }
    );
    $( "#slider4" ).slider(
	{
	    value: 0,
	    min: 0,
	    max: 1,
	    step: 0.1,
	    slide: function( event, ui ) {
		$( "#about" ).fadeTo('fast', ui.value);
		}
	    }
    );
    $( "#slider5" ).slider(
	{
	    value: 0,
	    min: 0,
	    max: 1,
	    step: 0.1,
	    slide: function( event, ui ) {
		$( "#about" ).fadeTo('fast', ui.value);
		}
	    }
    );
    $( "#slider6" ).slider(
	{
	    value: 0,
	    min: 0,
	    max: 1,
	    step: 0.1,
	    slide: function( event, ui ) {
		$( "#about" ).fadeTo('fast', ui.value);
		}
	    }
    );
}
