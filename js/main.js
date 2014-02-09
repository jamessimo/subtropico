(function($){

// HOME
var homeContainer = $('#home .main-container');

//ABOUT
var aboutContainer = $('#about-page .main-container');

//CONTACT
var contactContainer = $('#contact-page .main-container');

if ($(window).height() >= 615 && $(window).width() >= 480 ) {
	homeContainer.height($(window).height() - ($('header').height()+$('footer').height() + 80));
	aboutContainer.height($(window).height() - ($('header').height()+$('footer').height() + 80));
	contactContainer.height($(window).height() - ($('header').height()+$('footer').height() + 80));
}
if (homeContainer) {
	$('#home #spiel').css(
		'margin-top', $(this).height()/2 + ($('header').height()+$('footer').height() + 80) - homeContainer.height()
	);	
}


})(jQuery);	