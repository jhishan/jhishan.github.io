
$(document).ready(function() {
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).position().top;
        var elemBottom = elemTop + $(elem).height();
        var elemHeight = $(elem).height();
        return ((elemTop-docViewTop) < (elemHeight/1.8));
    }
	url = "https://api.syncano.io/v1/instances/jhishan/webhooks/p/1dd3dc13a3bdd9ec600d3347bcf6b2d62718abcb/photo_stream/"

	whiteSpace="<div class=\"whiteSpace\"></div>"

	$.get(url, function(data){
		var data = JSON.parse(data.result.stdout);
		for (i = 0; i < data.length; i++) {
			image_element = "<img class=\"photos\"src=" + data[i].photo_url+" alt=" +data[i].photo_alt +"></img>"
			$( "body" ).append( image_element );
			$( "body" ).append( whiteSpace );
		}
		$( "#loadingText" ).text("enjoy, below are the favorite photos that I took this week");
	});


	var myImages = document.getElementsByClassName('photos');
	var title = $('.pageTitle');

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