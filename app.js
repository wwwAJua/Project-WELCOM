$(function () {

	var introH = $("#intro").innerHeight(),
		header = $("#header"),
		scrollOffset = $(window).scrollTop();


	/* FixedHeader */
	checkScroll(scrollOffset);

	$(window).on("scroll", function () {

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	});

	function checkScroll(scrollOffset) {

		if (scrollOffset >= introH) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed");
		}

	};

	/* SmoothScroll */

	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		var blockid = $(this).data('scroll'),
			$this = $(this),
			blockOffset = $(blockid).offset().top;

		$('#nav a').removeClass('active');
		$this.addClass('active');

		$('html,body').animate({
			scrollTop: blockOffset
		}, 500/*ScrollSpeed*/);
	});

	/*menu nav toggle*/



	$('#nav_toggle').on('click', function (event) {
		event.preventDefault();/*убираем стандартное поведение кнопки*/

		$("#nav").slideToggle("slow");	/*Выдвижная панель*/

		$(this).toggleClass('active');
		$('#nav').toggleClass('active');
	});


	/* collapce*/

	$('[data-collapce]').on('click', function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapce');
		$(blockId).slideToggle();
	});

	/*slider*/

	$('[data-slider]').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1

	});

});