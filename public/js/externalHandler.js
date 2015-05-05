$(document).ready(function(){
	/*$('.booking').attr('disabled', 'disabled');*/
	$.ajax({
		url : "/getData",
		method : "GET",
		datatype : "json",
		success : function(data) {
			Contents = data;
			for (i = 0; i < data.length; i++) {
					seats = data[i].Booking;
					if (seats == 1) {
						if (i == 0) {
							$('.seat_1').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
							allow="true";
						}
						if (i == 1) {
							$('.seat_2').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
							allow="true";
						} 
						if (i == 2) {
							$('.seat_3').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
							allow="true";
						} 
						if (i == 3) {
							$('.seat_4').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
							allow="true";
						} 
						if (i == 4) {
							$('.seat_5').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
							allow="true";
						} 
						if (i == 5) {
							$('.seat_6').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
							allow="true";
						} 
						if (i == 6) {
							$('.seat_7').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
							allow="true";
						} 
						if (i == 7) {
							$('.seat_8').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
							allow="true";
						} 
						if (i == 8) {
							$('.seat_9').css("background","url('./css/images/Seatlayout.png') no-repeat -214px -213px");
							allow="true";
						} 
					}
			}
		}
	});
   	$('.popper').popover({
	    placement: 'right',
	    container: 'body',
	    html: true,
	    content:function () {
	        		return $(this).next('.popper-content').html();
	    		}
	});

	$(document).on("click", 'td',function() {
		val=$(this).attr("id"); 
	    if(Contents[val].Booking == 0) {	     		
	     	$(this).toggleClass("main");
	     	console.log("this is seatNo:"+val)
	     } else {
	     		alert("please select proper seat");
	     }
	});
	$(document).on("click", '.booking',function() {
		if(Contents[val].Booking == 0) {	     		
     		$.ajax({
     			url : "/insertData?value="+val,
     			method : "GET",
     			datatype : "json",
     			success:function(data){
     				alert("inserted");
     				console.log(data);
     			}
     		});
     	} 
		
	});
   	$(document).mouseover(function() {
		$('td').css("cursor","pointer");
		$('.seat_1').attr('title', '1');
		$('.seat_2').attr('title', '2');
		$('.seat_3').attr('title', '3');
		$('.seat_4').attr('title', '4');
		$('.seat_5').attr('title', '5');
		$('.seat_6').attr('title', '6');
		$('.seat_7').attr('title', '7');
		$('.seat_8').attr('title', '8');
		$('.seat_9').attr('title', '9');
	});
});