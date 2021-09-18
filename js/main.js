// Tab Section Functional Using JQury

$(document).ready(function(){
	$(".tab-two-content").hide();
	$(".tab-three-content").hide();

	$(".t-one").click(function(){
		$(".tab-one-content").show();
		$(".tab-two-content").hide();
		$(".tab-three-content").hide();
	});

	$(".t-two").click(function(){
		$(".tab-one-content").hide();
		$(".tab-two-content").show();
		$(".tab-three-content").hide();
	});

	$(".t-three").click(function(){
		$(".tab-one-content").hide();
		$(".tab-two-content").hide();
		$(".tab-three-content").show();
	});

});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        769:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

