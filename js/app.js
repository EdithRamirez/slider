$(window).load(function() {
	$("#slider-nav .flex-active-slide").addClass('activo');
	$('#slider-nav').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: true,
		slideshow: false,
		itemWidth: 1,
		asNavFor: '#slider',
	});
	$('#slider').flexslider({
		animation: "fade",
		controlNav: false,
		animationLoop: true, //regrese animacion de slider
		slideshow: false,
		    customDirectionNav: $(".custom-navigation a"),

		sync: "#slider-nav"
	});
	//evento al darle click al li del slider derecho
	$('#slider-nav .slides li').click(function(){
		console.log('click en li')
		//elimina clase activo que contiene borde
		$(".slides li").removeClass('activo');
		//agrega clase activo 
		$("#slider-nav .flex-active-slide").addClass('activo');
	});
	//evento al darle click flechas navegacion del slider izquierdo
	$('.custom-navigation a').click(function(){
		console.log('click en li a');
		$(".slides li").removeClass('activo');
		$("#slider-nav .flex-active-slide").addClass('activo');
	});
});