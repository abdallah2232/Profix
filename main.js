$(function() {
  // Tracing all animation related to window scroll
  $(window).scroll(function() {

    // Check the end of the main navbar to show the fixed navbar
    var mainNavbarEnd = $('.header-navigator').offset().top + $('.header-navigator').outerHeight();
    if($(this).scrollTop() > mainNavbarEnd && $(this).outerWidth() > 776) {
      $('.fixed-navigator').clearQueue().slideDown(100).css('overflow', 'visible');
    } else  {
      $('.fixed-navigator').clearQueue().slideUp(100).css('overflow', 'visible');
    }// end Check the end of the main navbar to show the fixed navbar


    // .pricink-package animation
    //var pricingPackagePoint = $('header').outerHeight();
    //console.log(pricingPackagePoint, $(this).scrollTop() );
    if($(this).scrollTop() > 50 && $('.pricing-package').data('animation-show') == 'show') {
        console.log("test don 1");
          $('.pricing-package').data('animation-show', 'don');

          $('.pricing-package .wrapper > h2').css({
            'animation-name':'float-from-left',
            'display':'block'
          });

          $('.pricing-package .wrapper > p').css({
            'animation-name':'float-from-right',
            'display':'block'
          });

          $('.pricing-card ').css({
            'animation-name':'float-from-bottom',
            'display':'block'
          });

          $('.our-features').css('display', 'block')
          $('.our-features').data('animation-show', 'show');
    }// end .pricing-package Animation


    // .our-features animation
    var ourFeaturesPoint = $('.our-features').offset().top;
    // console.log(ourFeaturesPoint, $(this).scrollTop());
    if($(this).scrollTop() > ourFeaturesPoint - 200 && $('.our-features').css('display') == 'block' &&   $('.our-features').data('animation-show') == 'show') {
        console.log("test don 2");

        $('.our-features').data('animation-show', 'don');

        $('.our-features p').css({
          'animation-name':'float-from-right',
          'display':'block'
        });

        $('.our-features h2').css({
          'animation-name':'float-from-left',
          'display':'block'
        });

        $('.feataure').css({
          'animation-name':'float-from-bottom',
          'display':'block'
        });

        // start .services-process-section animation
        //$('.services-process-section ').css({'display':'block'});
        // end .services-process-section animation

        $('.services-process-section').css('display', 'block');

        $('.services-process-section ').data('animation-show', 'show')

    }// end .our-features animation


    // start .services-process-section animation
    var serviceProcessPoint = $('.services-process-section').offset().top;
    if($(this).scrollTop() > serviceProcessPoint - 100 && $('.services-process-section').css('display') == 'block' && $('.services-process-section ').data('animation-show') == 'show') {

       $('.services-process-section ').data('animation-show', 'don');
       //
       $('.services-process-section .wrapper').css({
         'display':'block',
         'padding':'60px 0 90px'
       });

       $('.services-offered').css('display','block')

       $('.services-offered').data('animation-show', 'show');

       // $('.services-process-section .process-heading h2').css({
       //   // 'animation-name':'float-from-left',
       //   'display':'block'
       // });
       //
       // $('.services-process-section .process-heading p').css({
       //   'display':'block'
       // });
       //
       // $('.process-simple-step').css({
       //   'animation-name':'float-from-left'
       // });
    }// end .services-process-section animation


    // start .services-offered animation
    var serviceOfferedPoint = $('.services-offered').offset().top;
    if($(this).scrollTop() > serviceOfferedPoint - 100 && $('.services-offered').css('display') == 'block' && $('.services-offered ').data('animation-show') == 'show') {

      // console.log('Last');

       $('.services-offered ').data('animation-show', 'don');

       $('.services-offered .wrapper').css('display','grid');

       $('.projects-statistics').css('display','block')

       $('.projects-statistics').data('animation-show', 'show');
    }// end .services-offered animation


    //
    var projectStatisticsPoint = $('.projects-statistics').offset().top;
    if($(this).scrollTop() > projectStatisticsPoint - 100 && $('.projects-statistics').css('display') == 'block' && $('.projects-statistics').data('animation-show') == 'show') {
       // console.log("Test Last");

       $('.projects-statistics').data('animation-show', 'don');

       $('.projects-statistics .wrapper').css('display', 'block');

       counter();

       $('.customers-rating').css('display', 'block');

       $('.customers-rating').data('animation-show', 'show');

    }//


    //
    var customerRatingPoint = $('.customers-rating').offset().top;
    if($(this).scrollTop() >  - 100 && $('.customers-rating').data('animation-show') == 'show' && $('.customers-rating').css('display') == 'block') {
        console.log("Test Last");

        $('.customers-rating').data('animation-show', 'don');

        $('.customers-rating .wrapper').css('display', 'block');

        // temp
        $('.contactus-free').css('display', 'block');
        $('.contact-maps').css('display', 'block');
        $('footer').css('display', 'block');
        $('#scroll-tmp').css({
          'display': 'none',
          'height': '0'
        });
    }//



    // //
    // var  = $('').offset().top;
    // if($(this).scrollTop() >  - 100 && $('').data('animation-show') == 'show' && $('').css('display') == 'block') {
    //    $('').data('animation-show', 'don');
    //    $('').css('display', 'block');
    //    $('').data('animation-show', 'show');
    // }//


  });// End Tracing all animation related to window scroll



  // Slider showcase animation
  $("#main-slider").cycle({
     fx: 'scrollLeft',
     next:   '#show-left',
     prev:   '#show-right',
     pager:  '#showcase-pager'
  });

  $('.showcase').hover(function() {
    $('#show-left').clearQueue().fadeIn();
    $('#show-right').clearQueue().fadeIn();
  }).mouseleave(function() {
    $('#show-left').clearQueue().fadeOut();
    $('#show-right').clearQueue().fadeOut();
  });

  $('#showcase-pager a').on('click', function() {
    $(this).addClass('active-nav-link').siblings().removeClass('active-nav-link');
  });
  // End slider showcase animation




  // main navigation link hover animation
  $('ul.navigator-link li').hover(function() {
    $(this).find('> span').css('width', '100%');
    $(this).find('.navigator-link-inner').css('height', '180px');

  }).mouseleave(function() {
    $(this).find('span').css('width', '0%');
    $(this).find('.navigator-link-inner').css('height', '0');
  });// End main navigation link hover animation




  // Responsive navigator respond to a click
  $('.responsive-navigator-bars').click(function() {
    var flag = $('.responsive-navigator-inner').data('show');
    if(!flag) {
      $('.responsive-navigator-inner').css('height', '420px')
      $('.responsive-navigator-inner').data('show', 'true')
    } else {
      $('.responsive-navigator-inner').css('height', '0')
      $('.responsive-navigator-inner').data('show', false)
    }
  });// End Responsive navigator respond to a click





	 // Start of services offerd and it's options animation
	 // image hover action
	 $('.services-options .option .option-img').hover(function() {
		 $(this).find('img').css({'animation-name':'zooming-in-img', 'transform':'scale(1.3)'})
		 $(this).find('.option-image-overlay').css({'animation-name':'opacity-in', 'opacity':'1'})
		 $(this).find('.option-image-overlay i').css('animation-name','scope-out')
	 }).mouseleave(function() {
		 $(this).find('img').css({'animation-name':'', 'transform':'scale(1)'})
		 $(this).find('.option-image-overlay').css({'animation-name':'', 'opacity':'0'})
		 $(this).find('.option-image-overlay i').css('animation-name','')
	 });// end image hover action
	 // End of services offerd and it's options animation



   // Start of customers istatistics section animation onkeyup
   function counter () {
     $('.project-statistics').counterUp({
       delay: 10,
       time: 1000
     });
   }
   // Start of customers istatistics section animation onkeyup




});
