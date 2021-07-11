// jQuery 
$(document).ready(function(){
    // preloader 
    $(window).on("load", function(){
        $(".preloader").fadeOut(1000);
    });

    /*-----------------
    sticky
    -----------------*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 85) {
            $('.header').addClass('navbar-fixed-top');
        } else {
            $('.header').removeClass('navbar-fixed-top');
        }
    });

    // video area here
    // magnific-popup 
    $('.expandVideo').magnificPopup({
        type: 'iframe'
    });
    
});
// swiper slider 
$(document).ready(function(){
    var swiper = new Swiper(".screenSwContent", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        autoplay:true,
        slidesPerView: "auto", 
        coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
        },
        pagination: {
        el: ".swiper-pagination",
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
/*########################
#theEndJAVASCRIPT########################
########################*/