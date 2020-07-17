$(document).ready(function() {


    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        draggable: true,
        speed: 1000,
        fade: false,
        adaptiveHeight: true,
        prevArrow: '<span class="arrow_ant"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="arrow_prox"><i class="fas fa-chevron-right"></i></span>'
    });


    $('.slider_doutor').slick({
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        dots: false,
        arrows: true,
        draggable: true,
        speed: 1000,
        fade: false,
        adaptiveHeight: true,
        prevArrow: '<span class="arrow_ant"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="arrow_prox"><i class="fas fa-chevron-right"></i></span>',
        responsive: [
            {breakpoint: 1300,settings: {slidesToShow: 3}},
            {breakpoint: 800,settings: {slidesToShow: 2}},
            {breakpoint: 550,settings: {slidesToShow: 1}}
        ]
    });

    $(".faq").accordion({
        questionClass: '.header',
        answerClass: '.content',
        itemClass: '.faqitem'
    });


});