/*$(document).ready(function() {
	$.ajax({
		url : "/getData",
		method : "GET",
		datatype : "json",
		success : function(data) {
			for (i = 0; i < data.length; i++) {
				var seats = data[i].Booking;
				if (seats == 1) {
					if (i == 0) {
						$('.seat_1').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
					}
					if (i == 1) {
						$('.seat_2').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
					}
					if (i == 2) {
						$('.seat_3').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
					}
					if (i == 3) {
						$('.seat_4').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
					}
					if (i == 4) {
						$('.seat_5').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
					}
					if (i == 5) {
						$('.seat_6').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
					}
					if (i == 6) {
						$('.seat_7').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
					}
					if (i == 7) {
						$('.seat_8').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
					}
					if (i == 8) {
						$('.seat_9').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
					}
				} 
			}
		}
	});

});*/