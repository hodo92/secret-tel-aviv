$("a[href^='#']").click(function(e) {
	e.preventDefault();
	//alert("test");
	var position = $($(this).attr("href")).offset().top;
	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});