/*
 * Custom
 */
(function() {
  const urlLoc = decodeURIComponent(window.location.href);
  let titleId = 'none';

  if(urlLoc.indexOf('?title=') == -1 ? false : true){
    titleId = urlLoc.match(/\?title=([^&]*)/)[1];
    let newTitle = titleId.replace(/_\|_/g, ' <span>').replace(/_!_/g, '</span> ').replace(/_/g, ' ');
    newTitle = newTitle[0].toUpperCase() + newTitle.slice(1);
    document.querySelector('#mainTitle').innerHTML = newTitle;
  }
}())

$('.instmat-section__button, .utp-section__button, .top-section__button, .tel__callback, .serve-slider__item, .instmat-section__item').on('click', (e) => {
    const textButton = $(e.currentTarget).text().trim();
    const titleForm = $('.modal__title');
    const buttonForm = $('.modal__submit');

    $('body').css('overflow', 'hidden')

    if(/Узнать/.test(textButton)){
        titleForm.text('Узнать стоимость');
        buttonForm.val('Узнать');
    } else if($(e.currentTarget).hasClass('instmat-section__item')) {
      titleForm.text('Бесплатный подбор оборудования');
      buttonForm.val('подобрать');
    } else {
        titleForm.text('Записаться на замер');
        buttonForm.val('записаться');
    };
    $('.modal').fadeIn().removeAttr('css');
    $('.modal__close, .modal__bg').on('click', (e) => {
        $('body').css('overflow', 'auto');
        $('.modal__form')[0].reset();
        $('.modal__success').hide();
        $('.modal').fadeOut(400, () => {
          $('.modal__content').show();
        });
    });
});

function serviceTabs() {
  let sliderId = '#serviceHeat';
  function startSlider(){
    $(sliderId).slick({
      dots: true,
      dotsClass: 'service__dots',
      appendDots: '.service__dots',
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
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
  }

  startSlider('sliderId');

  $('.service__group').on('click', (e) => {
    const $target = $(e.currentTarget);
    const attr = $target.attr('data-slider');

    $('.service__group').removeClass('active');
    $target.addClass('active');
    $('.serve-slider').hide();
    $('.service__dots').html("");
    $(sliderId).slick("unslick");
    sliderId = `#${attr}`;
    startSlider();
    $(`#${attr}`).fadeIn();
  });
}

function addUpButtonLogic() {
  $(document).on('scroll', (e) => {
    const minHeight = 200;
    if(window.pageYOffset > 200) {
      $('.up-button').fadeIn();
    } else {
      $('.up-button').fadeOut();
    }
  });

  $('.up-button').click(function(){
    $('html, body').animate({scrollTop: 0}, 600);
    return false;
  });
}

function sendMessageAJAX() {
  $('.modal__form').on('submit', (e) => {
    $.ajax({
      url: '/post.php',
      type: "POST",
      dataType: "html",
      data: $('.modal__form').serialize(),
      success: function(response) {
        // result = $.parseJSON(response);
        // $().html(result);
      },
      error: function(response) { // Данные не отправлены
        // result = $.parseJSON(response);
        // $().html(result);
      }
    });
    $('.modal__content').fadeOut(400, () => {
      $('.modal__success').fadeIn();
      setTimeout(() => {
        $('.modal__bg').click();
      }, 3000)
      $('.modal__form')[0].reset();
    });
    e.preventDefault();
  });
}


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
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

// $('#serviceHeat').slick({
//     dots: true,
//     dotsClass: 'service__dots',
//     appendDots: '.service__dots',
//     arrows: false,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     swipe: true,
//     adaptiveHeight: true,
//     responsive: [
//         {
//           breakpoint: 1480,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3
//           }
//         },
//         {
//           breakpoint: 1100,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//     ]
// });

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


serviceTabs();
sendMessageAJAX();
addUpButtonLogic();
