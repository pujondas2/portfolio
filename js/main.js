$(document).ready(function(){

// Mobile Menu
jQuery('#mobile-menu').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
});

// Video
$('.image-popup').magnificPopup({
    type: 'image'
    // other options
});

// Testimonial
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


})