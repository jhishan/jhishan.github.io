$(document).ready(function() {
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).position().top;
        var elemBottom = elemTop + $(elem).height();
        var elemHeight = $(elem).height();
        return ((elemTop-docViewTop) < (elemHeight/1.8));
    }

	var myImages = document.getElementsByClassName('photos');
	var title = $('.pageTitle');
	var mainWidth = $('#page-content-wrapper').width();

	$(window).scroll(function(){
		for (var i = 0; i<myImages.length; i++){
			if(isScrolledIntoView(myImages[i])){
				title.html(myImages[i].getAttribute('alt'));
			}
		};
		if ($(window).scrollTop()<40){
			title.html('Jhishan');
		};
	});
});
