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
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 1480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
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
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 1480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
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
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});