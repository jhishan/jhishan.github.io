function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).position().top;
    var elemBottom = elemTop + $(elem).height();
    var elemHeight = $(elem).height();
    return ((elemTop-docViewTop) < (elemHeight/1.8));
}


var changeTab = function(){
	$('.kickerLinks').on('click', function(e){
    	var currentAttrValue = jQuery(this).attr('data-tab');
       	var myTabs = document.getElementsByClassName('tabContent');
       	for (var i = 0; i < myTabs.length; i++){
       		if(myTabs[i].id == currentAttrValue){
       			$(myTabs[i]).css("display", "block");
       		} else{
       			$(myTabs[i]).css("display", "none");
       		}
       	}
        $(this).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
};

var jankyResponsiveWebDesign = function(){
	var width = $(window).width();
    if(width <= 900){
        $(".portfolioImage").css("width", "96%");
        $(".portfolioText").css("width", "96%");
    }
	if(width < 500){
		$(".verticleBar").css("height", "330px");
		$(".rightContainer").css("height", "330px");
		$(".leftContainer").css("height", "330px");

		$(".timeLinePics").css("margin-top", "60px");
		$(".timeLineText").css("margin-top", "15px");
        $(".timeLineText").css("font-size", "12px");

	}
	$(window).resize(function() {
		width = $(window).width();
        if(width <= 900){
            $(".portfolioImage").css("width", "96%");
            $(".portfolioText").css("width", "96%");
        } else{
            $(".portfolioImage").css("width", "46%");
            $(".portfolioText").css("width", "46%");
        }
		if(width < 500){
			$(".verticleBar").css("height", "330px");
			$(".rightContainer").css("height", "330px");
			$(".leftContainer").css("height", "330px");

			$(".timeLinePics").css("margin-top", "60px");
			$(".timeLineText").css("margin-top", "15px");
            $(".timeLineText").css("font-size", "12px");

		} else{
			$(".verticleBar").css("height", "500px");
			$(".rightContainer").css("height", "500px");
			$(".leftContainer").css("height", "500px");

			$(".timeLinePics").css("margin-top", "120px");
			$(".timeLineText").css("margin-top", "150px");
            $(".timeLineText").css("font-size", "16px");
        }
	});
};


$(document).ready(function() {
    imagesTabWithAjax();
    changeTab();
    jankyResponsiveWebDesign();
});
