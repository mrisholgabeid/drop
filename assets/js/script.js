jQuery(document).ready(function() {
	
	// define our variables
	var fullHeightMinusHeader, sideScrollHeight = 0;
	
	// create function to calculate ideal height values
	function calcHeights() {
		
		// set height of main columns
		fullHeightMinusHeader = jQuery(window).height() - jQuery(".header").outerHeight();
		jQuery(".main, .aside").height(fullHeightMinusHeader);
		
		// set height of sidebar scroll content
		sideScrollHeight = fullHeightMinusHeader - jQuery(".nav").outerHeight();
					
	} // end calcHeights function
	
	// run on page load
	calcHeights();
	
	// run on window resize event
	jQuery(window).resize(function() {
		calcHeights();
	});

	jQuery(".has-dropdown").click(function() {
		jQuery(this).toggleClass("open");
		// event.preventDefault();
	});
	
});