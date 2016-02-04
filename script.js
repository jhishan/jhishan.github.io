$(document).ready(function() {
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).position().top;
        var elemBottom = elemTop + $(elem).height();
        var elemHeight = $(elem).height();
        return ((elemTop-docViewTop) < (elemHeight/1.8));
    }

	var profilePicture = $('.profilePicture');
	var myImages = document.getElementsByClassName('img');
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

	$('.kickerLinks').on('click', function(e){
    	var currentAttrValue = jQuery(this).attr('data-tab');
       	var myTabs = document.getElementsByClassName('tabContent');
       	for (var i = 0; i < myTabs.length; i++){
       		if(myTabs[i].id == currentAttrValue){
       			$(myTabs[i]).css("display", "block");
       			console.log("true");
       		} else{
       			$(myTabs[i]).css("display", "none");
       			console.log("false");
       		}
       	}

        $(this).addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });


	url = "https://api.syncano.io/v1/instances/jhishan/webhooks/p/5b76a6113b3e9bd1e2a18799d91833c42efcd5e8/ajax_photos/?page_size=10";
	whiteSpace="<div class=\"whiteSpace\"></div>";
	nextUrl = "";

	$.get(url, function(data){
		var data = JSON.parse(data.result.stdout);

		for (i = 0; i < data.length-1; i++) {
			image_element = "<img class=\"photos\"src=" + data[i].photo_url+" alt=\"" +data[i].photo_alt +"\"></img>"
			$( "#images" ).append( image_element );
			$( "#images" ).append( whiteSpace );
		}
		nextUrl = data[10];

		loader = $( ".loader" );
		loader.removeClass("loader")
		loader.addClass("paragraphs")
		$( "#firstLoadingText" ).text("enjoy, photos are added weekly");

	});


	var myImages = document.getElementsByClassName('photos');
	var title = $('.pageTitle');

	$(function(){
	    var scrollFunction = function(){

			for (var i = 0; i<myImages.length; i++){
				if(isScrolledIntoView(myImages[i])){
					title.html(myImages[i].getAttribute('alt'));
				}
			};
			if ($(window).scrollTop()<40){
				title.html('Jhishan');
			};

			if($(window).scrollTop() + $(window).height() > $(document).height()-30) {
				if(nextUrl != null){
					$(window).unbind("scroll");
					//loading_more = "<p class=\"loadingText\"> loading more ... </p>"
					//$( "body" ).append(loading_more);
					// ONLY DO THIS IF IM ON THAT TAB, RIGHT NOW IT DOES IT ALL THE TIME THIS IS VERY BAD!!!!!!!!!!
					//!!!!!
					// ^ LOOOOOOOOK AT THIS! MAKE SURE YOU FIX THIS
		       		$.ajax({
		            type:"get",
		            headers: {"X-API-KEY": "83351a56a36a81c69862c8af458d77210cc821f9", "X-USER-KEY":"8069b8ea797806f8904664af41e0e2a4340121c6"},
		            url: nextUrl,
		            processData: false,
		            success: function(msg) {
						for (i = 0; i < msg.objects.length; i++) {
							image_element = "<img alt=\""+ msg.objects[i].alt+"\" class=\"photos\" src=" + msg.objects[i].photo.value+"></img>";
							$( "#images" ).append( image_element );
							$( "#images" ).append( whiteSpace );
						}
						if(msg.next != null){
							nextUrl = "https://api.syncano.io" + msg.next;
						} else{
							nextUrl =  null;
						}
						//$( ".loadingText" ).remove();
						$(window).scroll(scrollFunction);


		            }
		    		});

	    		}
	   		}

	    };
	    $(window).scroll(scrollFunction);
	});
	var width = $(window).width();
	if(width < 500){
		$(".verticleBar").css("height", "300px");
		$(".rightContainer").css("height", "300px");
		$(".leftContainer").css("height", "300px");

		$(".timeLinePics").css("margin-top", "60px");
		$(".timeLineText").css("margin-top", "15px");

	}
	$( window ).resize(function() {
		width = $(window).width();
		if(width < 500){
			$(".verticleBar").css("height", "300px");
			$(".rightContainer").css("height", "300px");
			$(".leftContainer").css("height", "300px");

			$(".timeLinePics").css("margin-top", "60px");
			$(".timeLineText").css("margin-top", "15px");

		} else{
			$(".verticleBar").css("height", "500px");
			$(".rightContainer").css("height", "500px");
			$(".leftContainer").css("height", "500px");

			$(".timeLinePics").css("margin-top", "120px");
			$(".timeLineText").css("margin-top", "150px");
		}
	});

});
