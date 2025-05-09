

if($('.js-range-slider').length > 0 ){
    var $range = $(".js-range-slider"),
        $from = $(".from"),
        $to = $(".to"),
        range,
        min = $range.data("min"),
        max = $range.data("max"),
        from,
        to;

    var updateValues = function () {
        $from.prop("value", from);
        $to.prop("value", to);
    };

    $range.ionRangeSlider({
        onChange: function (data) {
            from = data.from;
            to = data.to;
            updateValues();
        }
    });

    range = $range.data("ionRangeSlider");
    var updateRange = function () {
        range.update({
            from: from,
            to: to
        });
    };

    $from.on("input", function () {
        from = +$(this).prop("value");
        if (from < min) {
            from = min;
        }
        if (from > to) {
            from = to;
        }
        updateValues();
        updateRange();
    });

    $to.on("input", function () {
        to = +$(this).prop("value");
        if (to > max) {
            to = max;
        }
        if (to < from) {
            to = from;
        }
        updateValues();
        updateRange();
    });
}
$(document).ready(function(){ 
  $(".mobile-toggle").click(function(k){
    k.preventDefault();
    $(this).toggleClass("active");
    $(".mobile-nav").toggleClass("active");
    $('body,html').toggleClass('scrollno');
  });   
  $(".close-menu").click(function(k){
    k.preventDefault();
    $('.mobile-toggle').removeClass("active");
    $(".mobile-nav").removeClass("active");
    $('body,html').removeClass('scrollno');
  });    
    $('.menu-has-item').mouseenter(function() {
        $('body').addClass("show-megamenu scrollno");
    }).mouseleave(function () {
        $('body').removeClass("show-megamenu scrollno");
    }); 
  /********* On scroll heder Sticky *********/
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          $("header").addClass("head-sticky");
      } else {
          $("header").removeClass("head-sticky");
      }
  });
  //END
  /******* Accordian JS *******/
    function close_accordion_section() {
        jQuery('.accordion .accordion-title').removeClass('active');
        jQuery('.accordion .accordion-content').slideUp(300).removeClass('open');
    } 
    jQuery('.accordion-title').click(function (e) {
        // Grab current anchor value
        var currentAttrValue = jQuery(this).attr('href');
        if (jQuery(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();
            // Add active class to section title
            jQuery(this).addClass('active');
            // Open up the hidden content panel
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }
        e.preventDefault();
    });  
    //FAQ ACCORDIAN
 
    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).toggleClass("active");
            $(this).siblings(".content").slideToggle(200);
        } else { 
            $(this).toggleClass("active");
            $(this).siblings(".content").slideToggle(200);
        }
    });
    $('ul.tabs li').click(function(){ 
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
        $('.home-collection-slider').slick('refresh');
	})
     
     function addToCartSuccess() {
        // $.get( "/cart?view=mini", function( data ) {
        // $('#crt').html(data);
        $('#crt').removeClass('loading');
        // });
    }
    function refreshCart(cart) {
        $('.cart-count').text(cart.item_count);
    }
    
    $('body').on('click','.buttonAddtoCart',function(e){
        e.preventDefault();
    
        $('.productGrid .productItem').removeClass('qvopen');
        $('body').addClass('cartOpen');
        $('.fullPage').addClass('witmenu');

    });

    $('body').on('click','.fullPage.witmenu, .closemenu, .closecart', function(e){
        e.preventDefault();
        $('body').removeClass('menuOpen');
        $('.fullPage').removeClass('witmenu');
        $('body').removeClass('cartOpen');
    });
    $('.cart-btn').on('click',function(e){
        e.preventDefault();
        setTimeout(function(){
        $('body').addClass('cartOpen');
        $('.fullPage').addClass('witmenu');
        }, 50);
    });
  
    $("#crt").on('click', "a.remove_item", function(r){
        $('#crt').addClass('loading');
        r.preventDefault();
        // var id = $(this).data("id");
        $(this).parents('.quick-cart-item').remove();
        $('.itemCount').text($('.cartDrawer .quick-cart-item').length );
        if($('.cartDrawer .quick-cart-item').length == 0) {
            $('#crt').empty();
            $('#crt').append('<p class="emptyCart text-center">You have no items in your shopping cart.</p>');
            $('#crt').removeClass('has-item');
            $('#crt').removeClass('loading');
            
        } else {
            addToCartSuccess();
        }
        
        // $.getJSON("/cart.js", function(cart) {
        //   refreshCart(cart);
        // });
    });  
    var header_height = $('.holsper-header').outerHeight() + 10;
    $('header').next('.wrapper').css('margin-top', header_height + 'px');    
 
     $('.our-fav-main-slider').slick({
        slidesToShow: 2,
        infinite: false,
        arrows: false, 
        variableWidth:false,
        asNavFor: '.our-fav-nav',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1, 
                }
            }
        ]
    });
    $('.our-fav-nav').slick({
        slidesToShow:3, 
        asNavFor: '.our-fav-main-slider',
        dots: false,
        arrows: false, 
        infinite: false,
        focusOnSelect: true
    }); 
    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.our-dav-nav').slick('slickGoTo', slideno - 1);
    });
    if($('.home-collection-slider').length > 0 ){
        $('.home-collection-slider').slick({
            rows: 2,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 4, 
            responsive: [
            {
                breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: false,
                        dots:true
                    }
                },
                {
                breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        dots:true
                    }
                } 
            ]
        });
    } 
   if($('.pdp-collection').length > 0 ){
        $('.pdp-collection').slick({
            autoplay: false, 
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,  
            arrows: true,
            dots: false,
            buttons: false,
            prevArrow: $('.prev'),
           nextArrow: $('.next'),
            responsive: [   
                {
                breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1 
                    }
                }
            ] 
        });
    }
    if($('.home-fab-slider').length > 0 ){
        $('.home-fab-slider').slick({
            autoplay: false, 
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,  
            arrows: true,
            dots: false,
            buttons: false,
            responsive: [  
                {
                breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1 
                    }
                }
            ] 
        });
    }
    if($('.brushed-cotton-slider').length > 0 ){
        $('.brushed-cotton-slider').slick({
            autoplay: false,
            centerMode: false,
            slidesToShow: 4,
            slidesToScroll: 1,  
            arrows: true,
            dots: false,
            buttons: false,
            responsive: [ 
                {
                    breakpoint: 992,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,  
                    }
                },  
                {
                breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        dots:true
                    }
                },
                {
                breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots:true
                    }
                }
            ]
        });
    }
    if($('.review-slider').length > 0 ){
        $('.review-slider').slick({
            autoplay: false,
            centerMode: false,
            slidesToShow: 2,
            slidesToScroll: 1,  
            arrows: true,
            dots: false,
            buttons: false,
            responsive: [  
                {
                breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        arrows: false,
                        dots:true
                    }
                } 
            ]
        });
    }
    /*sticky product-detail add to cart start here*/   
    var fixmeTop = $("header").outerHeight();
        $(window).scroll(function() {
            fixmeTop =+ $(".pdp-qty-add-box").offset().top;
            console.log($(window).scrollTop(),'--',fixmeTop);
        $(window).scrollTop() >= fixmeTop ? $(".cartfixedbtn").addClass("sticky-menu") : $(".cartfixedbtn").removeClass("sticky-menu")
    });
    /*sticky product-detail add to cart end here*/
});  
/*pdp one page scroll script start here*/ 
document.querySelectorAll('.product-image-link[href^="#"]').forEach(anchor => {
    var headeroffset = $("header").height();
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        top: headeroffset,
        behavior: 'smooth'
      });
    });
  });
  /*pdp one page scroll script end here*/ 
  /*qty spinner start here*/
  (function ($) {
    // Efeito spinner sem plugin - pagina carrinho - increment
    var quantity = 0;
    $('.quantity-increment').click(function(){;
      var t = $(this).siblings('.quantity');
      var quantity = parseInt($(t).val());
      $(t).val(quantity + 1); 
    });
    // Efeito spinner sem plugin - pagina carrinho - decrement
    $('.quantity-decrement').click(function(){
      var t = $(this).siblings('.quantity');
      var quantity = parseInt($(t).val());
      if(quantity > 1){
        $(t).val(quantity - 1);
      }
    }); 
    })(jQuery);
/*qty spinner end here*/ 
//mobile fitst slick with window reload
$(window).on('load resize orientationchange', function() {
    $('.mobile_slider').each(function() {
        var $mobile_slider = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 768) {
            if ($mobile_slider.hasClass('slick-initialized')) {
                $mobile_slider.slick('unslick');
            }
        } else {
            if (!$mobile_slider.hasClass('slick-initialized')) {
                $mobile_slider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    infinite: true,
                    arrows: false,
                    dots:true,
                    touchThreshold: 100,
                    swipeToSlide: true,
                    waitForAnimate: false,
                });
            }
        }
    });
  //END 
});