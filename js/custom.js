/*
  Project Name : Translator
  Author Company : Ewebcraft
  Project Date: 12 january, 2016
  Author Website : http://www.ewebcraft.com
  Author Email : ewebcraft@gmail.com
*/

$(window).load(function(){
    $('#loader').fadeOut("slow");
});

(function($) {
	"use strict";

				/* for Animation */

				new WOW().init();

				/* for Animation */					
			    
			    /* Smooth-Scroll */

				$(".scroll").on('click',function(event){
					
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
				});

				/* Smooth-Scroll */

				// pretty photo function call
				$("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});

				// $('.language-carousel > li').tooltip();

				if($(".counter").length > 0) {
					//$('.steps-container').waypoint(function(direction){
					  //alert('j');
					  $('.counter').counterUp({
					     delay: 10,
					     time: 1000
					  });
					//   this.destroy();
					// });
				}

				/* client carousel */

				$('#client-slider .client-carousel').bxSlider({
				   minSlides: 1,
			       maxSlides: 5,
			       slideWidth: 200,
			       slideMargin: 10,
			       moveSlides: 1,
			       controls: false,
			       pager: false,
			       auto: true,
			       autoStart: true,
			       autoHover: true,
			       infiniteLoop: true,
			       speed: 4000,
			       pause: 0,
			       easing: 'linear',
			       responsive: true,
			       autoDirection: 'next',
			       useCSS: false,
			       preventDefaultSwipeX: false,
			       preventDefaultSwipeY: true,
			       touchEnabled: false,
				});

				/* language carousel */

				$('#slider-1 .language-carousel').bxSlider({
				   minSlides: 1,
			       maxSlides: 10,
			       slideWidth: 200,
			       slideMargin: 10,
			       moveSlides: 1,
			       controls: false,
			       pager: false,
			       auto: true,
			       autoStart: true,
			       autoHover: true,
			       infiniteLoop: true,
			       speed: 4000,
			       pause: 0,
			       easing: 'linear',
			       responsive: true,
			       autoDirection: 'next',
			       useCSS: false,
			       preventDefaultSwipeX: false,
			       preventDefaultSwipeY: true,
			       touchEnabled: false,
				});

				/* community slider */
				$(".communitySlider").bxSlider ({
					mode: 'vertical',
					//slideWidth: ;
  					slideMargin: 0,
  					controls: false,
  					pager: false,
  					auto: true,
			        autoStart: true,
			        autoHover: true,
			        speed: 1000,
				});	

				/* testimonial slider */
				$('.testimonial-slider').bxSlider({
				  pagerCustom: '#bx-pager',
				  mode: 'vertical',
				  controls: false
				});

				/* blog slider */
				$(".blogSlider").bxSlider ({
					nextSelector: '#slider-next',
  					prevSelector: '#slider-prev',
  					nextText: '<i class="fa fa-chevron-right"></i>',
  					prevText: '<i class="fa fa-chevron-left"></i>',
  					slideMargin: 0,
  					pager: false,
  					auto: true,
			        autoStart: true,
			        autoHover: true,
			        speed: 1000,
				});	


			//map initialization function
			
		 	function initialize() {
				var mapCanvas = document.getElementById('map-canvas');
				var mapOptions = {
				  center: new google.maps.LatLng(51.508742,-0.120850), // Set your Location Here
				  zoom: 14,
				  scrollwheel: false,
				  mapTypeId: google.maps.MapTypeId.ROADMAP
				}
				var map = new google.maps.Map(mapCanvas, mapOptions);
			   
			   /*********Start Map Pin code******/
			   var marker = new google.maps.Marker({
				  map: map,
				  title:"Translator",
				  
				  position: new google.maps.LatLng(51.508742,-0.120850) // Set Map Marker Location Here
				  
				});
			   var infowindow = new google.maps.InfoWindow({
					content:"Translator Template" // Here you can add your content to show on marker click 
				});
				google.maps.event.addListener(marker, "click", function(){
				  infowindow.open(map,marker);
				});
				/*********End Map Pin code******/
			}
			if($("#map-canvas").length > 0) {
				/*Google Map Initializer*/
			 	google.maps.event.addDomListener(window, 'load', initialize);
				/*End Google Map initializer*/	
			}

			if($(".selectpicker").length > 0) {
				$('.selectpicker').selectpicker();
			}

			if ($('#prices').length > 0) {
			   
			   $('#price-table-container').mixItUp({
				   	animation: {
				        enable: false       
				    },
				    callbacks: {
				        onMixLoad: function(){
				            $(this).mixItUp('setOptions', {
				                animation: {
				                    enable: true,
				                    effects: 'fade stagger',
							        duration: 600,
							        easing: 'ease'    
				                },
				            });
				        }
				    },
				   	load: {
					    filter: '.copywriting',
					    sort: false
					}
			   })
			}

			/* Translator */
			
			$(document).ready(function(){
				
				if (navigator.language == "zh-TW" ){
						
						$("#outPutLanguage").val('Chinese');
						$('.selectpicker').selectpicker('refresh')
					}
					
				
				
				$("#translation_button").click(function(){
					if ($("#lang-input").val()=="good")
						$("#lang-output").val("hao");					
				});

				$(function() {
						var inputEl = $("#lang-input"),
							defVal = inputEl.val();
						inputEl.bind({
							focus: function() {
								var _this = $(this);
								if (_this.val() == defVal) {
									_this.val('');
								}
							},
							blur: function() {
								var _this = $(this);
								if (_this.val() == '') {
									_this.val(defVal);
								}
							}
						});
					})
	
				$("#down_load").click(function(){

					setTimeout(function(){$("#su_download").css("display","none");},3000);
					$("#su_download").text("Download Successfully!");
					$("#su_download").show();
				});
		
			
				$("#submit").click(function(){
					setTimeout(function(){$("#su_download").css("display","none");},3000);  
					$("#su_download").text("submit Successfully!");					
					$("#su_download").show();
				
				});
				
				
				$("#clear_lan").click(function(){
					$("#lang-input").val("");
					
					if (navigator.language == "zh-TW" ){
						$("#outPutLanguage").val('Chinese');
						$('.selectpicker').selectpicker('refresh')
					}
					$("#lang-output").val("");
					
					});
				
				$("#change_lan").click(function(){	
					
					if ($("#lang-input").val()!="Input Language"&& $("#lang-output").val()!="Output Language"){
				    
						var temp = $('#lang-detection').val();				
						$("#lang-detection").val($("#outPutLanguage").val());					 
						$("#outPutLanguage").val(temp);
						$('.selectpicker').selectpicker('refresh')}
				});				
			
                   
				$(function() {
	 
					$("#lang-input").keyup(function() { 
						if ($("#lang-input").val() == "good") {		   
						  $("#lang-detection").val('English');
						  $('.selectpicker').selectpicker('refresh')
						}
					});
				});
			
		
				$("#sel_btn").click(function(){
								$("#myFileInput").click();
					 
						});
				   
		
								
				$("#try").click(function(){
					$("#ulList").empty();
					var fp = $("#myFileInput");
					var lg = fp[0].files.length; // get length
					var items = fp[0].files;
					var fragment = "";
					 
					if (lg > 0) {
						for (var i = 0; i < lg; i++) {
							var fileName = items[i].name; // get file name
							var fileSize = items[i].size; // get file size 
							var fileType = items[i].type; // get file type
				 
							// append li to UL tag to display File info
							fragment += "<li>" + fileName + " (<b>" + fileSize + "</b> bytes) - Type :" + fileType + "</li>";
						}
			 
						$("#ulList").append(fragment);
					}
				
					
					$("#myFileInput").change(function(){
						$("#ulList").empty();
						var fp = $("#myFileInput");
						var lg = fp[0].files.length; // get length
						var items = fp[0].files;
						var fragment = "";
						 
						if (lg > 0) {
							for (var i = 0; i < lg; i++) {
								var fileName = items[i].name; // get file name
								var fileSize = items[i].size; // get file size 
								var fileType = items[i].type; // get file type
					 
								// append li to UL tag to display File info
								fragment += "<li>" + fileName + " (<b>" + fileSize + "</b> bytes) - Type :" + fileType + "</li>";
								}
				 
						$("#ulList").append(fragment);
						}
				
				});
				
			});


				
			});
			
			
		
			
/* Login Form */

			$('.login-form').find('.form-control').each(function() {
			  var targetItem = $(this).parent();
			  if ($(this).val()) {
			    $(targetItem).find('label').css({
			      'top': '10px',
			      'fontSize': '14px'
			    });
			  }
			})
			$('.login-form').find('.form-control').focus(function() {
			  $(this).parent('.input-block').addClass('focus');
			  $(this).parent('.input-block').addClass('forHover');
			  $(this).parent().find('label').animate({
			    'top': '10px',
			    'fontSize': '14px'
			  }, 300);
			})
			$('.login-form').find('.form-control').blur(function() {
			  $(this).parent('.input-block').removeClass('forHover');
			  if ($(this).val().length == 0) {
			    $(this).parent('.input-block').removeClass('focus');
			    $(this).parent().find('label').animate({
			      'top': '24px',
			      'fontSize': '16px'
			    }, 300);
			  }
			})			

})(jQuery);