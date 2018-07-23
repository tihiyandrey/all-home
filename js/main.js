$(document).ready(function () {
	// Carousel for offer
	$("#owl-carousel-offer").owlCarousel({
		items: 3,
		nav: true,
    	dotsEach: true
	});

	$("#owl-carousel-video").owlCarousel({
		items: 3,
		nav: true,
    	dotsEach: true
	});

	$("#owl-carousel-review").owlCarousel({
		items: 3,
		nav: true,
    	dotsEach: true
	});

	// Tabs for price list
	$('.price-list--content-tab').hide();
	$('.price-list--content-tab:first').show();
	$('.price-list--tabs ul li:first').addClass('active');

	$('.price-list--tabs ul li').click(function(event) {
		$('.price-list--tabs ul li').removeClass('active');
		$(this).addClass('active');
		$('.price-list--content-tab').hide();

	var selectTabPriceList = $(this).find('a').attr("href");
	$(selectTabPriceList).fadeIn();
	});	

	// Tabs for calculator
	$('.calculator-content--tab').hide();
	$('.calculator-content--tab:first').show();
	$('.calculator-list li:first').addClass('active');

	$('.calculator-list li').click(function(event) {
		$('.calculator-list li').removeClass('active');
		$(this).addClass('active');
		$('.calculator-content--tab').hide();

	var selectTabCalc = $(this).find('a').attr("href");
	$(selectTabCalc).fadeIn();
	});	

	$('[data-fancybox]').fancybox({
		toolbar  : false,
		iframe : {
			preload : false
		}
	});
	var img_1_w = $(".step-2-img-1").width();
    $( "#slider_w1_w" ).slider({
			value : 750,
			min : 300,
			max : 1000,
			step : 1,
			create: function( event, ui ) {
				val = $( "#slider_w1_w" ).slider("value");
				$( "#contentSlider_w1_w" ).val( val + " мм" );
			},
        slide: function( event, ui ) {
			$( "#contentSlider_w1_w" ).val( ui.value + " мм" );
			var w1_w_val = img_1_w * (ui.value/750);
			$(".step-2-img-1").css('width',w1_w_val);
			$('.w1_input_w').html(ui.value + " мм");
        }
    });
    var img_1_h = $(".step-2-img-1").height();
    $( "#slider_w1_h" ).slider({
			value : 1200,
			min : 450,
			max : 1600,
			step : 1,
			orientation: 'vertical',
			create: function( event, ui ) {
				val = $( "#slider_w1_h" ).slider("value");
				$( "#contentSlider_w1_h" ).val( val + " мм" );
			},
        slide: function( event, ui ) {
			$( "#contentSlider_w1_h" ).val( ui.value + " мм" );
			var w1_h_val = img_1_h * (ui.value/1200);
			$(".step-2-img-1").css('height',w1_h_val);
			$('.w1_input_h').html(ui.value + " мм");
        }
    });


    var img_2_w = $(".step-2-img-2").width();
    var img_2_w_l = $("#step-2-img-2_l").width();
    var img_2_w_r = $("#step-2-img-2_r").width();
    $( "#slider_w2_w" ).slider({
			value : 1500,
			min : 600,
			max : 2000,
			step : 1,
			create: function( event, ui ) {
				val = $( "#slider_w2_w" ).slider("value");
				$( "#contentSlider_w2_w" ).val( val + " мм" );
			},
        slide: function( event, ui ) {
			$( "#contentSlider_w2_w" ).val( ui.value + " мм" );	
			$('#step-three-w2 .step_four-content--width').text(ui.value + " мм");
			$('#step-four-w2 .step_four-content--width').text(ui.value + " мм");

			var w2_w_val = img_2_w * (ui.value/1500);
			$("#step-2-img-2_l").css('width',w2_w_val);
			$("#step-2-img-2_r").css('width',w2_w_val);
			$(".step-3-img-2_l").css('width',w2_w_val);
			$(".step-3-img-2_r").css('width',w2_w_val);
			$(".step-4-img-2_l").css('width',w2_w_val);
			$(".step-4-img-2_r").css('width',w2_w_val);

			var total_val_del = Math.ceil(($( "#slider_w2_w" ).slider("value") - ui.value)/2);

			var total_val_del_l = $( "#slider_w2_s" ).slider("value") - total_val_del;

			if (total_val_del_l < 300) {
				total_val_del_l = 300;
			}

			if (total_val_del_l > 1000) {
				total_val_del_l = 1000;
			}

			var total_val_del_r = ui.value - total_val_del_l;

			if (total_val_del_l < 300) {
				total_val_del_l = 300;
			}

			if (total_val_del_r <= 0) {
				total_val_del_r = 0;
				total_val_del_l = ui.value;
			}

			$( "#contentSlider_w2_s_l" ).val( total_val_del_l + " мм" );
			$( "#contentSlider_w2_s_r" ).val( total_val_del_r + " мм" );
			$( "#slider_w2_s" ).slider({
				value : total_val_del_l
		    });			
		    
        }
    });

    $( "#slider_w2_s" ).slider({
		value : 750,
		min : 300,
		max : 1000,
		step : 1,
		create: function( event, ui ) {
			val = $( "#slider_w2_s" ).slider("value");
			$( "#contentSlider_w2_s_l" ).val( val + " мм" );
			$( "#contentSlider_w2_s_r" ).val( val + " мм" );
		},
		slide: function( event, ui ) {
			$( "#contentSlider_w2_s_l" ).val( ui.value + " мм" );
			var w2_s_r = parseInt($('#contentSlider_w2_w').val()) - ui.value;
			$('#step-three-w2 .step_four-content--stvorki').text(ui.value + " мм");
			$('#step-four-w2 .step_four-content--stvorki').text(ui.value + " мм");
			if (w2_s_r < 0) {
				w2_s_r = 0;
				$( "#slider_w2_w" ).slider({
					value : ui.value
			    });
			    $( "#contentSlider_w2_w" ).val( ui.value + " мм" );
			}

			$( "#contentSlider_w2_s_r" ).val( w2_s_r + " мм" );

			var w2_w_val_l = img_2_w_l * (ui.value/1000);
			$("#step-2-img-2_l").css('width',w2_w_val_l);
			$(".step-3-img-2_l").css('width',w2_w_val_l);
			$(".step-4-img-2_l").css('width',w2_w_val_l);

			var w2_w_val_r = img_2_w_r * (w2_s_r/1000);
			$("#step-2-img-2_r").css('width',w2_w_val_r);
			$(".step-3-img-2_r").css('width',w2_w_val_r);
			$(".step-4-img-2_r").css('width',w2_w_val_r);
    	}
    });

    var img_2_h = $(".step-2-img-2").height();
    $( "#slider_w2_h" ).slider({
			value : 1500,
			min : 450,
			max : 1600,
			step : 1,
			orientation: 'vertical',
			create: function( event, ui ) {
				val = $( "#slider_w2_h" ).slider("value");
				$( "#contentSlider_w2_h" ).val( val + " мм" );
			},
        slide: function( event, ui ) {
			$( "#contentSlider_w2_h" ).val( ui.value + " мм" );
			$('#step-three-w2 .step_four-content--height').text(ui.value + " мм");
			$('#step-four-w2 .step_four-content--height').text(ui.value + " мм");
			var w2_h_val = img_2_h * (ui.value/1500);
			$(".step-2-img-2").css('height',w2_h_val);
			$(".step-3-img-2_l").css('height',w2_h_val);
			$(".step-3-img-2_r").css('height',w2_h_val);
			$(".step-4-img-2_l").css('height',w2_h_val);
			$(".step-4-img-2_r").css('height',w2_h_val);

        }
    });


    var img_3_w = $(".step-2-img-3").width();
    var img_3_w_l = $("#step-2-img-3_l").width();
    var img_3_w_c = $("#step-2-img-3_c").width();
    var img_3_w_r = $("#step-2-img-3_l").width();
    $( "#slider_w3_w" ).slider({
			value : 2400,
			min : 900,
			max : 3000,
			step : 1,
			create: function( event, ui ) {
				val = $( "#slider_w3_w" ).slider("value");
				$( "#contentSlider_w3_w" ).val( val + " мм" );
			},
	        slide: function( event, ui ) {
				$( "#contentSlider_w3_w" ).val( ui.value + " мм" );
				$('#step-three-w3 .step_three-content--width').text(ui.value + " мм");
				$('#step-four-w3 .step_three-content--width').text(ui.value + " мм");


				var w3_w_val = img_3_w * (ui.value/2400);
				$("#step-2-img-3_l").css('width',w3_w_val);
				$("#step-2-img-3_c").css('width',w3_w_val);
				$("#step-2-img-3_r").css('width',w3_w_val);

				$(".step-3-img-3_l").css('width',w3_w_val);
				$(".step-3-img-3_c").css('width',w3_w_val);
				$(".step-3-img-3_r").css('width',w3_w_val);

				var total_val_del = Math.ceil(($( "#slider_w3_w" ).slider("value") - ui.value)/3);

				var total_val_del_l = Math.ceil($( "#slider_w3_s" ).slider("value") - total_val_del/2);

				var total_val_del_r = Math.ceil($( "#slider_w3_s" ).slider("value") - total_val_del/2);

				var total_val_del_c = ui.value - total_val_del_l*2;

				if (total_val_del_c < 0) {
					total_val_del_c = 0;
					total_val_del_l = Math.ceil(ui.value/2);
					total_val_del_r = ui.value - total_val_del_l;
				}

				$( "#contentSlider_w3_s_l" ).val( total_val_del_l + " мм" );
				$( "#contentSlider_w3_s_c" ).val( total_val_del_c + " мм" );
				$( "#contentSlider_w3_s_r" ).val( total_val_del_r + " мм" );
				$( "#slider_w3_s" ).slider({
					value : total_val_del_l
			    });			
	        }
    });

    $( "#slider_w3_s" ).slider({
			value : 800,
			min : 300,
			max : 1000,
			step : 1,
			create: function( event, ui ) {
				val = $( "#slider_w3_s" ).slider("value");
				$( "#contentSlider_w3_s_l" ).val( val + " мм" );
				$( "#contentSlider_w3_s_r" ).val( val + " мм" );
			},
	        slide: function( event, ui ) {				
				var w3_s_c = parseInt($('#contentSlider_w3_w').val()) - ui.value*2;
				if (w3_s_c < 0) {
					w3_s_c = 0;
					$( "#slider_w3_w" ).slider({
						value : ui.value*2
				    });
				    $( "#contentSlider_w3_w" ).val( ui.value*2 + " мм" );
				}
				$( "#contentSlider_w3_s_l" ).val( ui.value + " мм" );
				$( "#contentSlider_w3_s_r" ).val( ui.value + " мм" );
				$( "#contentSlider_w3_s_c" ).val( w3_s_c + " мм" );

				var w3_w_val_l = img_3_w_l * (ui.value/1000);
				$("#step-2-img-3_l").css('width',w3_w_val_l);
				$(".step-3-img-3_l").css('width',w3_w_val_l);
				$(".step-4-img-3_l").css('width',w3_w_val_l);
				$("#step-2-img-3_r").css('width',w3_w_val_l);
				$(".step-3-img-3_r").css('width',w3_w_val_l);
				$(".step-4-img-3_r").css('width',w3_w_val_l);

				var w3_w_val_c = img_3_w_c * (w3_s_c/1000);
				$("#step-2-img-3_c").css('width',w3_w_val_c);
				$(".step-3-img-3_c").css('width',w3_w_val_c);
				$(".step-4-img-3_c").css('width',w3_w_val_c);

				$('#step-three-w3 .step_three-content--stvorki').text(w3_s_c + " мм");
				$('#step-four-w3 .step_three-content--stvorki').text(w3_s_c + " мм");

	        }
    });

    var img_3_h = $(".step-2-img-3").height();
    $( "#slider_w3_h" ).slider({
			value : 1600,
			min : 450,
			max : 2400,
			step : 1,
			orientation: 'vertical',
			create: function( event, ui ) {
				val = $( "#slider_w3_h" ).slider("value");
				$( "#contentSlider_w3_h" ).val( val + " мм" );
			},
	        slide: function( event, ui ) {
				$( "#contentSlider_w3_h" ).val( ui.value + " мм" );
				$('#step-three-w3 .step_three-content--height').text(ui.value + " мм");
				$('#step-four-w3 .step_three-content--height').text(ui.value + " мм");

				var w3_h_val = img_3_h * (ui.value/1600);
				$(".step-2-img-3").css('height',w3_h_val);
				$(".step-3-img-3_l").css('height',w3_h_val);
				$(".step-3-img-3_c").css('height',w3_h_val);
				$(".step-3-img-3_r").css('height',w3_h_val);
	        }
    });

    

    $('.calculator-content--step_one .calculator-btn').click(function() {
    	$('#calc_1').hide();
    	$('#calc_2').show();

    	$('.calculator-list li.active').removeClass('active');
    	$('.calculator-list li:nth-child(2)').addClass('active');
    });

    $('.calculator-content--step_two .calculator-btn a.prev').click(function() {
    	$('#calc_2').hide();
    	$('#calc_1').show();

    	$('.calculator-list li.active').removeClass('active');
    	$('.calculator-list li:nth-child(1)').addClass('active');
    });

    $('.calculator-content--step_two .calculator-btn a.next').click(function() {
    	$('#calc_2').hide();
    	$('#calc_3').show();

    	$('.calculator-list li.active').removeClass('active');
    	$('.calculator-list li:nth-child(3)').addClass('active');
    });

    $('.calculator-content--step_three .calculator-btn a.prev').click(function() {
    	$('#calc_3').hide();
    	$('#calc_2').show();

    	$('.calculator-list li.active').removeClass('active');
    	$('.calculator-list li:nth-child(2)').addClass('active');
    });

    $('.calculator-content--step_three .calculator-btn a.next').click(function() {
    	$('#calc_3').hide();
    	$('#calc_4').show();

    	$('.calculator-list li.active').removeClass('active');
    	$('.calculator-list li:nth-child(4)').addClass('active');
    });

    $('.calculator-content--step_four .calculator-btn a.prev').click(function() {
    	$('#calc_4').hide();
    	$('#calc_3').show();

    	$('.calculator-list li.active').removeClass('active');
    	$('.calculator-list li:nth-child(3)').addClass('active');
    });    


    $('input[type="radio"]').on('click',function () {
        if ($('#two_window').is(':checked')) {
            $('#step-two-w2').show();
            $('#step-two-w1').hide();
            $('#step-two-w3').hide();
        } else if ($('#three_window').is(':checked')) {
            $('#step-two-w2').hide();
            $('#step-two-w1').hide();
            $('#step-two-w3').show();
        } else {
        	$('#step-two-w2').hide();
            $('#step-two-w1').show();
            $('#step-two-w3').hide();
        }
    });

    $('input[type="radio"]').on('click',function () {
    	if ($('.color_brown').is(':checked')) {
            $('.step-2-img-1.ff').hide();
            $('.step-2-img-1.br').show();
            $('.step-2-img-1.b4').hide();
            $('.step-2-img-1.d7').hide();
        } else if ($('.color_b46040').is(':checked')) {
            $('.step-2-img-1.ff').hide();
            $('.step-2-img-1.br').hide();
            $('.step-2-img-1.b4').show();
            $('.step-2-img-1.d7').hide();
        } else if ($('.color_d76c43').is(':checked')) {
        	$('.step-2-img-1.ff').hide();
            $('.step-2-img-1.br').hide();
            $('.step-2-img-1.b4').hide();
            $('.step-2-img-1.d7').show();
        } else {
        	$('.step-2-img-1.ff').show();
            $('.step-2-img-1.br').hide();
            $('.step-2-img-1.b4').hide();
            $('.step-2-img-1.d7').hide();
        }
    });

    $('#step-three-w2 input[type="radio"]').on('click',function () {
    	if ($('.color_brown').is(':checked')) {
            $('.step-3-img-2_l.ff').hide();
            $('.step-3-img-2_r.ff').hide();
            $('.step-3-img-2_l.br').show();
            $('.step-3-img-2_r.br').show();
            $('.step-3-img-2_l.b4').hide();
            $('.step-3-img-2_r.b4').hide();
            $('.step-3-img-2_l.d7').hide();
            $('.step-3-img-2_r.d7').hide();
        } else if ($('.color_b46040').is(':checked')) {
            $('.step-3-img-2_l.ff').hide();
            $('.step-3-img-2_r.ff').hide();
            $('.step-3-img-2_l.br').hide();
            $('.step-3-img-2_r.br').hide();
            $('.step-3-img-2_l.b4').show();
            $('.step-3-img-2_r.b4').show();
            $('.step-3-img-2_l.d7').hide();
            $('.step-3-img-2_r.d7').hide();
        } else if ($('.color_d76c43').is(':checked')) {
        	$('.step-3-img-2_l.ff').hide();
            $('.step-3-img-2_r.ff').hide();
            $('.step-3-img-2_l.br').hide();
            $('.step-3-img-2_r.br').hide();
            $('.step-3-img-2_l.b4').hide();
            $('.step-3-img-2_r.b4').hide();
            $('.step-3-img-2_l.d7').show();
            $('.step-3-img-2_r.d7').show();
        } else {
        	$('.step-3-img-2_l.ff').show();
            $('.step-3-img-2_r.ff').show();
            $('.step-3-img-2_l.br').hide();
            $('.step-3-img-2_r.br').hide();
            $('.step-3-img-2_l.b4').hide();
            $('.step-3-img-2_r.b4').hide();
            $('.step-3-img-2_l.d7').hide();
            $('.step-3-img-2_r.d7').hide();
        }
    });

    $('#step-three-w3 input[type="radio"]').on('click',function () {
    	if ($('.color_brown').is(':checked')) {
            $('.step-3-img-3_l.ff').hide();
            $('.step-3-img-3_c.ff').hide();
            $('.step-3-img-3_r.ff').hide();
            $('.step-3-img-3_l.br').show();
            $('.step-3-img-3_c.br').show();
            $('.step-3-img-3_r.br').show();
            $('.step-3-img-3_l.b4').hide();
            $('.step-3-img-3_c.b4').hide();
            $('.step-3-img-3_r.b4').hide();
            $('.step-3-img-3_l.d7').hide();
            $('.step-3-img-3_c.d7').hide();
            $('.step-3-img-3_r.d7').hide();
        } else if ($('.color_b46040').is(':checked')) {
            $('.step-3-img-3_l.ff').hide();
            $('.step-3-img-3_c.ff').hide();
            $('.step-3-img-3_r.ff').hide();
            $('.step-3-img-3_l.br').hide();
            $('.step-3-img-3_c.br').hide();
            $('.step-3-img-3_r.br').hide();
            $('.step-3-img-3_l.b4').show();
            $('.step-3-img-3_c.b4').show();
            $('.step-3-img-3_r.b4').show();
            $('.step-3-img-3_l.d7').hide();
            $('.step-3-img-3_c.d7').hide();
            $('.step-3-img-3_r.d7').hide();
        } else if ($('.color_d76c43').is(':checked')) {
        	$('.step-3-img-3_l.ff').hide();
            $('.step-3-img-3_c.ff').hide();
            $('.step-3-img-3_r.ff').hide();
            $('.step-3-img-3_l.br').hide();
            $('.step-3-img-3_c.br').hide();
            $('.step-3-img-3_r.br').hide();
            $('.step-3-img-3_l.b4').hide();
            $('.step-3-img-3_c.b4').hide();
            $('.step-3-img-3_r.b4').hide();
            $('.step-3-img-3_l.d7').show();
            $('.step-3-img-3_c.d7').show();
            $('.step-3-img-3_r.d7').show();
        } else {
        	$('.step-3-img-3_l.ff').show();
            $('.step-3-img-3_c.ff').show();
            $('.step-3-img-3_r.ff').show();
            $('.step-3-img-3_l.br').hide();
            $('.step-3-img-3_c.br').hide();
            $('.step-3-img-3_r.br').hide();
            $('.step-3-img-3_l.b4').hide();
            $('.step-3-img-3_c.b4').hide();
            $('.step-3-img-3_r.b4').hide();
            $('.step-3-img-3_l.d7').hide();
            $('.step-3-img-3_c.d7').hide();
            $('.step-3-img-3_r.d7').hide();
        }
    });


    $('input[type="radio"]').on('click',function () {
        if ($('#two_window').is(':checked')) {
            $('#step-three-w2').show();
            $('#step-three-w1').hide();
            $('#step-three-w3').hide();
        } else if ($('#three_window').is(':checked')) {
            $('#step-three-w2').hide();
            $('#step-three-w1').hide();
            $('#step-three-w3').show();
        } else {
        	$('#step-three-w2').hide();
            $('#step-three-w1').show();
            $('#step-three-w3').hide();
        }
    });

    $('input[type="radio"]').on('click',function () {
        if ($('#two_window').is(':checked')) {
            $('#step-four-w2').css('display','inline-block');
            $('#step-four-w1').hide();
            $('#step-four-w3').hide();
        } else if ($('#three_window').is(':checked')) {
            $('#step-four-w2').hide();
            $('#step-four-w1').hide();
            $('#step-four-w3').css('display','inline-block');
        } else {
        	$('#step-four-w2').hide();
            $('#step-four-w1').css('display','inline-block');
            $('#step-four-w3').hide();
        }
    });




    var proverbs = new Array('Поворотное влево','Поворотное / откидное влево','Поворотное вправо','Поворотное /откидное вправо');

	var orig_proverb = $('#step-two-w1 .step_two-content-img--name span').text();
	var i = 0;
	$('#step-two-w1 .step-2-img-1').click(function(){
		if(i==proverbs.length){
		  i=-1;
		  $('#step-two-w1 .step_two-content-img--name span').text(orig_proverb);
		  $('#step-three-w1 .step_three-content-img--name span').text(orig_proverb);
		  $('#step-four-w1 .step_four-content-img--name span').text(orig_proverb);
		}
		else{
		  $('#step-two-w1 .step_two-content-img--name span').text(proverbs[i]);
		  $('#step-three-w1 .step_three-content-img--name span').text(proverbs[i]);
		  $('#step-four-w1 .step_four-content-img--name span').text(proverbs[i]);
		}
		console.log(i);
		i++;
	});

	var orig_proverb_w2 = $('#step-two-w1 .step_two-content-img--name span').text();
	
	$('#step-two-w2 #step-2-img-2_l').click(function(){
		if(i==proverbs.length){
		  i=-1;
		  $('#step-two-w2 .step_two-content-img--name span.w2-l').text(orig_proverb_w2);
		  $('#step-three-w2 .step_four-content-img--name span.w2-l').text(orig_proverb_w2);
		  $('#step-four-w2 .step_four-content-img--name span.w2-l').text(orig_proverb_w2);
		}
		else{
		  $('#step-two-w2 .step_two-content-img--name span.w2-l').text(proverbs[i]);
		  $('#step-three-w2 .step_four-content-img--name span.w2-l').text(proverbs[i]);
		  $('#step-four-w2 .step_four-content-img--name span.w2-l').text(proverbs[i]);
		}
		console.log(i);
		i++;
	});

	$('#step-two-w2 #step-2-img-2_r').click(function(){
		if(i==proverbs.length){
		  i=-1;
		  $('#step-two-w2 .step_two-content-img--name span.w2-r').text(orig_proverb_w2);
		  $('#step-three-w2 .step_four-content-img--name span.w2-r').text(orig_proverb_w2);
		  $('#step-four-w2 .step_four-content-img--name span.w2-r').text(orig_proverb_w2);
		}
		else{
		  $('#step-two-w2 .step_two-content-img--name span.w2-r').text(proverbs[i]);
		  $('#step-three-w2 .step_four-content-img--name span.w2-r').text(proverbs[i]);
		  $('#step-four-w2 .step_four-content-img--name span.w2-r').text(proverbs[i]);
		}
		console.log(i);
		i++;
	});

	var orig_proverb_w3 = $('#step-two-w3 .step_two-content-img--name span').text();
	
	$('#step-two-w3 #step-2-img-3_l').click(function(){
		if(i==proverbs.length){
		  i=-1;
		  $('#step-two-w3 .step_two-content-img--name span.w3-l').text(orig_proverb_w3);
		  $('#step-three-w3 .step_three-content-img--name span.w3-l').text(orig_proverb_w3);
		  $('#step-four-w3 .step_three-content-img--name span.w3-l').text(orig_proverb_w3);
		}
		else{
		  $('#step-two-w3 .step_two-content-img--name span.w3-l').text(proverbs[i]);
		  $('#step-three-w3 .step_three-content-img--name span.w3-l').text(proverbs[i]);
		  $('#step-four-w3 .step_three-content-img--name span.w3-l').text(proverbs[i]);
		}
		console.log(i);
		i++;
	});

	$('#step-two-w3 #step-2-img-3_c').click(function(){
		if(i==proverbs.length){
		  i=-1;
		  $('#step-two-w3 .step_two-content-img--name span.w3-c').text(orig_proverb_w3);
		  $('#step-three-w3 .step_three-content-img--name span.w3-c').text(orig_proverb_w3);
		  $('#step-four-w3 .step_three-content-img--name span.w3-c').text(orig_proverb_w3);
		}
		else{
		  $('#step-two-w3 .step_two-content-img--name span.w3-c').text(proverbs[i]);
		  $('#step-three-w3 .step_three-content-img--name span.w3-c').text(proverbs[i]);
		  $('#step-four-w3 .step_three-content-img--name span.w3-c').text(proverbs[i]);
		}
		console.log(i);
		i++;
	});

	$('#step-two-w3 #step-2-img-3_r').click(function(){
		if(i==proverbs.length){
		  i=-1;
		  $('#step-two-w3 .step_two-content-img--name span.w3-r').text(orig_proverb_w3);
		  $('#step-three-w3 .step_three-content-img--name span.w3-r').text(orig_proverb_w3);
		  $('#step-four-w3 .step_three-content-img--name span.w3-r').text(orig_proverb_w3);
		}
		else{
		  $('#step-two-w3 .step_two-content-img--name span.w3-r').text(proverbs[i]);
		  $('#step-three-w3 .step_three-content-img--name span.w3-r').text(proverbs[i]);
		  $('#step-four-w3 .step_three-content-img--name span.w3-r').text(proverbs[i]);
		}
		console.log(i);
		i++;
	});
	
});

