/*make header sticky*/
window.onscroll = function() {stickyHeader()};

var navbar = document.getElementById("sticky-top");
var sticky = navbar.offsetTop;

function stickyHeader() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		var stickyHeight = jQuery(".sticky").outerHeight();
		jQuery(".sticky").next("section").css("padding-top", stickyHeight+"px");
	} else {
		navbar.classList.remove("sticky");
	}
}

jQuery(document).ready(function(){
	/*Testimonial slider*/
	$('#testimonial-slider').slick({
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev border-0 rounded-circle position-absolute"><i class="icon-arrow-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next border-0 rounded-circle position-absolute"><i class="icon-arrow-right"></i></button>'
	});

	/*Popular destination slider*/
	$('.popular-destination').slick({
		slidesToShow: 2,
		arrows: false,
		centerMode: true,
		centerPadding: '30px',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: false,					
					slidesToShow: 1
				}
			}
		]
	});

	/*Start and end date calender*/
	$('.calender').datepicker({
		allowInputToggle: true
	});
	
	$('.calender-1').click(function (e) {
        $('#startDate').datepicker("show");
        e.preventDefault();
	});
	
	$('.calender-2').click(function (e) {
        $('#endDate').datepicker("show");
        e.preventDefault();
    });
	
	/*Show hide search form*/
	$("#inputSearch").focus(function(){		
		$(".search-form").show();
		$(this).parent().parent().addClass("curvedBorder",200);
	});
	//$("#inputSearch").blur(function(){			
	//	$(".search-form").hide();
	//	$(this).parent().parent().removeClass("curvedBorder",200);
	//});

	/*top links in mobile*/
	var wd = $( document ).width();
	if(wd < 768 ) {
		$(".navbar").on('click',function(){
			if( $(this).find(".collapse.show").length > 0 ){
				$(".top-links").hide();
			}else {
				$(".top-links").show();
			}			
		});
	}

	/* show overlay */
	var initialht = $(".shadow-box .d-flex").outerHeight();
	
	$(".shadow-box").hover(function(){		
		var boxht = $(this).innerHeight();
		$(this).css("height",boxht+"px");
		$(this).find("img").css("height",boxht+"px");
		$(this).find(".d-flex").addClass("overlay");
	}, function () {
		var boxht = $(this).innerHeight() - initialht;
		$(this).find("img").css("height",boxht+"px");
		$(this).find(".d-flex").removeClass("overlay");
	});
});