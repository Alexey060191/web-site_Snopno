$('.multiple-items').slick({
    slidesToShow: 1, //сколько слайдов показывать в карусели
    slidesToScroll: 1, // сколько слайдов прокручивать за раз
    dots: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500
});

$('.single-item').slick({
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500
});

