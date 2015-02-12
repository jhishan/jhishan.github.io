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
		if ($(window).scrollTop() <40){
			title.html('Jhishan');			
		};		
	});

	$('.tab-links p').on('click', function(e){
    	var currentAttrValue = jQuery(this).attr('href');
 
        $(currentAttrValue).show().siblings().hide();
 
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });


});
