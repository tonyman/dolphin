$(document).on('ready', inicio);

function inicio() {
	//console.log("sape");
	menu();
	$(".filter-button").on('click', filtro);
	$(".fancybox").fancybox({
		openEffect: "none",
		closeEffect: "none"
	});
	$(".nav-tabs li a").on('click', noclic)
	//$( 'ul.nav.nav-tabs  a' ).on('click', noclic);

}

function noclic(e) {
	e.preventDefault()
}
function menu(){
	$(".dropdowng").hover(            
		function subir() {
			$('.dropdown-menug', this).stop( true, true ).fadeIn("fast");
			//$(this).toggleClass('open');
			//$('b', this).toggleClass("caret caret-up");                
		},
		function bajar() {
			$('.dropdown-menug', this).stop( true, true ).fadeOut("fast");
			//$('b', this).toggleClass("caret caret-up");                
		});
}

function filtro(){
	var value = $(this).attr('data-filter');

	if(value == "all")
	{
		$('.filter').show('1000');
	}
	else
	{
		$(".filter").not('.'+value).hide('3000');
		$('.filter').filter('.'+value).show('3000');

	}

	if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");
	}
	$(this).addClass("active");
}

(function( $ ) {
    //Function to animate slider captions 
    function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
			$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
	$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
	$('#carousel-example-generic').carousel({
		interval:3000,
		pause: "false"
	});

	
	//fakewaffle.responsiveTabs(['xs', 'sm']);
	
})(jQuery);


