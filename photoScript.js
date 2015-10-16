
$(document).ready(function() {
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).position().top;
        var elemBottom = elemTop + $(elem).height();
        var elemHeight = $(elem).height();
        return ((elemTop-docViewTop) < (elemHeight/1.8));
    }

	url = "https://api.syncano.io/v1/instances/jhishan/webhooks/p/5b76a6113b3e9bd1e2a18799d91833c42efcd5e8/ajax_photos/?page_size=5";
	whiteSpace="<div class=\"whiteSpace\"></div>";
	nextUrl = "";

	$.get(url, function(data){
		var data = JSON.parse(data.result.stdout);

		for (i = 0; i < data.length-1; i++) {
			image_element = "<img class=\"photos\"src=" + data[i].photo_url+" alt=" +data[i].photo_alt +"></img>"
			$( "body" ).append( image_element );
			$( "body" ).append( whiteSpace );
		}
		nextUrl = data[5];

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
		if($(window).scrollTop() + $(window).height() > $(document).height()-30) {
			$(window).unbind('scroll');
			
			if(nextUrl != null){
	       		$.ajax({
	            type:"get",
	            headers: {"X-API-KEY": "83351a56a36a81c69862c8af458d77210cc821f9", "X-USER-KEY":"8069b8ea797806f8904664af41e0e2a4340121c6"},
	            url: nextUrl,
	            processData: false,
	            success: function(msg) {
					for (i = 0; i < msg.objects.length; i++) {
						image_element = "<img class=\"photos\"src=" + msg.objects[i].photo.value+" alt=" +msg.objects[i].alt+"></img>"
						$( "body" ).append( image_element );
						$( "body" ).append( whiteSpace );
					}
					nextUrl=msg.next;
	            }
	    		});

    		}
   		}
	});




});