$(document).ready(function() {
	$('.owl-carousel').owlCarousel();
});

$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 25,
	nav: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 4,
		},
	},
});

//Navbar Scroll
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 200) {
			$('#mainnav').addClass('show');
		}

		if ($(window).scrollTop() < 201) {
			$('#mainnav').removeClass('show');
		}
	});
});

//Date Picker
$(document).ready(function() {
	$('#nepali-calendar').nepaliDatePicker();
});

//Time Picker
$(function() {
	$('#datetimepicker3').datetimepicker({
		format: 'LT',
	});
});
