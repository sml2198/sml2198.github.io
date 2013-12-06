$(function () {

	function changeMenu(dest) {
		// $("#home, #about").css("display","none");
		// $("#"+dest).css("display","block");
		$("#nav-home").removeClass("active");
		$("#nav-about").removeClass("active");
		$("#home").addClass("hidden");
		$("#about").addClass("hidden");
		
		$("#"+dest).removeClass("hidden");
		$("#nav-"+dest).addClass("active");
	}

	changeMenu("home");
	
	$("#nav-home").click(function() {
		changeMenu('home');
	});
	
	$("#nav-about").click(function() {
		changeMenu('about');
	});

});