/*
Theme Name: SLAMR
Author: CREATEBRILLIANCE - Media & Consulting
Author URI: http://www.createbrilliance.com
Version: 1.1
*/

var SLAMR;

( function($) {"use strict";

SLAMR = window.SLAMR || {};

/****************************************************************************************************
 * NAV
 *
 *
 *
****************************************************************************************************/
SLAMR.nav= function(options){

	// add class after scrolling
	//don't do this on small devices
	

	$(window).resize(function(){
		scrollEffect();
	});
	
	function scrollEffect() {

			if(!($(window).width() > 768)){	
				if(!$(".navbar-fixed-top").hasClass("top-nav-collapse")){
					$(".navbar-fixed-top").addClass("top-nav-collapse");	
				}
			}else{
				if($(".navbar-fixed-top").hasClass("top-nav-collapse")){
					$(".navbar-fixed-top").removeClass("top-nav-collapse");	
				}
			}

			$(window).scroll(function() {
				if($(window).width() > 768){						
						if ($(".navbar").offset().top > 50) {
							$(".navbar-fixed-top").addClass("top-nav-collapse");
						} else {
							$(".navbar-fixed-top").removeClass("top-nav-collapse");					
						}
					}else{
						$(".navbar-fixed-top").addClass("top-nav-collapse");
					}		
			});

	};
	
	scrollEffect();

	if(options == "dropdown"){
		$('.navbar-nav .dropdown').onePageNav({
			currentClass : 'active-sub',
			changeHash : true,
			scrollSpeed : 750,
			scrollOffset : 0,
			scrollThreshold : 0.5,
			easing : 'easeOutExpo',
			filter : ':not(.ex)'
		});
	}else{
		$('.navbar-nav').onePageNav({
			currentClass : 'active',
			changeHash : false,
			scrollSpeed : 750,
			scrollOffset : 0,
			scrollThreshold : 0.5,
			easing : 'easeOutExpo',
			filter : ':not(.ex)'
		});
	};

};
/****************************************************************************************************
 * SLIDE DOWN HEAD
 *
 *
 *
****************************************************************************************************/
SLAMR.slideDownHead = function(option){
	if(option){
		$(document).ready(function(){
			$(".pageHead").css({
				"top":"-500px",
				"opacity":"0"
			});
			$(".pageHead .hero h1, .pageHead .hero h3").css({
				"opacity":"0"
			});
		});
		$(window).load(function(){
			$(".pageHead").stop(true,true).delay(500).animate({"top":"0px", "opacity":"1"},500, "easeOutCubic", function(){
				$(".pageHead .hero h1").animate({"opacity":"1"},500, function(){
					$(".pageHead .hero h3").animate({"opacity":"1"},300);
				});
			});
		});
	}
}
/****************************************************************************************************
 * PARALLAX
 *
 *
 *
****************************************************************************************************/
SLAMR.parallax = function(option){
	
		if(option){
			if (!Modernizr.touch){
				var s = skrollr.init({
					mobileDeceleration: 1,
					constants: {
				
					},
					edgeStrategy: 'set',
					forceHeight: false,
					smoothScrolling: true,
					easing: {
						WTF: Math.random,
							inverted: function(p) {
							return 1-p;
							}
					}
				});
			} 	
		};	
};
/****************************************************************************************************
 * PRELOADER
 *
 *
 *
****************************************************************************************************/
SLAMR.preloader = function() {


		
		$(window).load(function() {
			$('#preloader').fadeOut(800, function() {
				$('body').css('overflow', 'visible');
			});
		});
			
};

/****************************************************************************************************
 * SUPERSLIDES
 *
 *
 *
****************************************************************************************************/
SLAMR.slider = function(selector, options){
	
	$(window).load(function() {			
		$(selector).superslides(options);
	});
	
};
	
/****************************************************************************************************
 * OWL CAROUSEL
 *
 *
 *
****************************************************************************************************/
SLAMR.owlCarousel = function (options){
	
	$.each(options, function(index,value) {
          
          if(value != null){
          	//if carousel has parameters 
         	$(index).owlCarousel(value);
          }else{
          	//if there are no parameters
          	$(index).owlCarousel();
          }
              
       });


		
};


/****************************************************************************************************
 * ANIMATED SKILLBAR
 *
 *
 *
****************************************************************************************************/
SLAMR.skillbar = function(animated){
		
		if(animated == "animated"){
				if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
					// Triggering only when it is inside viewport

						$('.skillbar').waypoint(function(){
							var $this = $(this);
									$this.find('.skillbar-bar').animate({width:$this.attr('data-percent')},2000);
						}, {
							triggerOnce : true,
							offset : function() {
								return $(window).height() - $(this).outerHeight();
							}
						});
			
				}else {
					$('.skillbar').each(function(){
						var $this = $(this);
						$this.find('.skillbar-bar').css({width:$this.attr('data-percent')});							
					});
						
				}
		
		}else{
			//if not animated					
				$('.skillbar').each(function(){
					var $this = $(this);
					$this.find('.skillbar-bar').css({width:$this.attr('data-percent')});							
				});
		}
		
};
/****************************************************************************************************
 * YOUTUBE VIDEO PLAYER
 *
 *
 *
****************************************************************************************************/
SLAMR.videoBgYT = function(selector,video){
	if(!Modernizr.touch){
		$(selector).tubular({videoId:video,wrapperZIndex: 9999}); 	
	}else{
		$(selector).html("<img src='img/bg-head-1.jpg' alt='' />");
	};
	 
};


/****************************************************************************************************
 * header carousel
 *
 *
 *
****************************************************************************************************/
SLAMR.bootstrapCarousel = function (options){
	
		$.each(options, function(index,value) {
          
          if(value != null){
          	//if carousel has parameters 
         	$(index).carousel(value);
          }else{
          	//if there are no parameters
          	$(index).carousel();
          }
              
       });

};

/****************************************************************************************************
 * FITVIDS
 *
 *
 *
****************************************************************************************************/	
SLAMR.fitVids = function (selector){	
	$(selector).fitVids();	      
};
/****************************************************************************************************
 * PORTFOLIO FILTER
 * 
 *
 *
 *
****************************************************************************************************/

SLAMR.portfolioFilter = function (selector, item){
	
	$(selector).click(function(e){
		e.preventDefault();
		$(selector).removeClass("current");
		$(this).addClass("current");
		var filter = $(this).attr("data-group");
			
		if(filter != "all"){			
			$(item).each(function(){
				var theItem = $(this);
				$(".portfolio-link",theItem).addClass("inactive");
				var categories = $(this).attr("data-group");			
				if (typeof categories !== 'undefined' && categories !== false){
					categories = categories.split(",");
					$.each(categories, function(i,currentCat){
						if (filter == currentCat){

							$(".portfolio-link",theItem).removeClass("inactive");
							return;
						}
					});
				}			
			});			
		}else{
			$(item).each(function(){
				$(".portfolio-link", $(this)).removeClass("inactive");
			});
		}
	});
	
	
	//hover effects
	$(document).ready(function(){
		$(item).each(function(){
			$(this).hover( 
				  function() {
				  	if(!$(".portfolio-link", this).hasClass("inactive")){
				  		$(".portfolio-link", this).addClass("hover");
				  	}			    
				  },
				  function() {
				    $(".portfolio-link", this).removeClass("hover");
				  }
				);
		});
	});
	
	
	
	
	
	
}
/****************************************************************************************************
 * PORTFOLIO
 * 
 *
 *
 *
****************************************************************************************************/

SLAMR.portfolio = function (selector,options){
	$(selector).portfolioExpander(options);
}	

/****************************************************************************************************
 *  SCROLLING ANIMATIONS
 *	
 *	takes data-animation, data-animation-delay as data attributes. Element needs to have class animation
 *
****************************************************************************************************/			
SLAMR.scrollAnim = function(option){	
		$(window).load(function() {
			if(option == "yes"){		
					//trigger css3 animations
					// Handle appear event for animated elements
					var wpOffset = 80;
					if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
						wpOffset = 100;

						$.fn.waypoint.defaults = {
							context : window,
							continuous : true,
							enabled : true,
							horizontal : false,
							offset : 0,
							triggerOnce : false
						};

						$('.animated').waypoint(function() {
							var elem = $(this);
							var animation = elem.data('animation');
							if (!elem.hasClass('visible') && elem.attr('data-animation') !== undefined) {
								if (elem.attr('data-animation-delay') !== undefined) {
									var timeout = elem.data('animation-delay');
									setTimeout(function() {
										elem.addClass(animation + " visible");
									}, timeout);
								} else {
									elem.addClass(elem.data('animation') + " visible");
								}
							}
						}, {
							offset : wpOffset + '%'
						});
					} else {
						//if mobile, don't do it just display elements
						$('.animated').each(function() {
							$(this).css("visibility", "visible");
						});
					}



				}else{
				//don't trigger css3 animation, but display elements
						$('.animated').each(function() {
							$(this).css("visibility", "visible");
						});
				}
		}); //window load
};
/****************************************************************************************************
 * HELPER
 *
 *
 *
****************************************************************************************************/
	if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {

		$(".background-middle-full").removeClass("fixed");
	};



/****************************************************************************************************
 * MAGNIFIC
 *
 *
 *
****************************************************************************************************/
SLAMR.magnific = function (options){
	
	$.each(options, function(index,value) {
          if(value != null){
          	//if carousel has parameters 
         	$(index).magnificPopup(value);
          }else{
          	//if there are no parameters
          	$(index).magnificPopup();
          }
              
       });


		
}

/****************************************************************************************************
 * CONTACT FORM
 *
 *
 *
****************************************************************************************************/
SLAMR.contactForm = function (){


		$("#contact-submit").on('click touchstart', function(e) {
			e.preventDefault();
			$("#contact-submit").html("<i class='fa fa-cog fa-spin'></i> SENDING").prop('disabled', true);
			var $contact_form = $('#contact-form');
			var fields = $contact_form.serialize();
			$.ajax({
				type : "POST",
				url : "inc/contact.php",
				data : fields,
				dataType : 'json',
				success : function(response) {
					if (response.status) {
						$('#contact-form input').val('');
						$('#contact-form textarea').val('');
					}
					$('#contact-form-response').empty().html(response.html);
					$("#contact-submit").html("<i class='fa fa-check'></i> SUBMIT").prop('disabled', false);
				}
			});
			return false;
		});
		
};




}(jQuery)); 

