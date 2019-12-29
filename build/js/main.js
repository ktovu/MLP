/*
 * Custom
 */

$('.instmat-section__button, .utp-section__button, .top-section__button, .tel__callback').on('click', (e) => {
    const textButton = $(e.currentTarget).text().trim();
    const titleForm = $('.modal__title');
    const buttonForm = $('.modal__submit');

    if(/Узнать/.test(textButton)){
        titleForm.text('Узнать стоимость');
        buttonForm.val('Узнать');
    } else {
        titleForm.text('Записаться на замер');
        buttonForm.val('записаться');
    };
    $('.modal').fadeIn().removeAttr('css');
    $('.modal__close, .modal__bg').on('click', (e) => {
        $('.modal').fadeOut();
    });
});

$('#brandsSlider').slick({
    dots: true,
    dotsClass: 'brands-section__dots',
    appendDots: '.brands-section__dots',
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipe: true,
    adaptiveHeight: true
});

$('#serviceHeat').slick({
    dots: true,
    dotsClass: 'service__dots',
    appendDots: '.service__dots',
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipe: true,
    adaptiveHeight: true
});

$('#worksSlider').slick({
    dots: true,
    dotsClass: 'works-slider-dots',
    appendDots: '.works-slider-dots',
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipe: true,
    adaptiveHeight: true
});