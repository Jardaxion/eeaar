$(document).ready(() => {
    $('.js-open-menu').on('click', function(e){
        e.preventDefault();

        $('.js-menu').addClass('active');
        $('body').addClass('noScroll');
    })

    $('.js-menu-exit').on('click', function(e){
        e.preventDefault();

        $('.js-menu').removeClass('active');
        $('body').removeClass('noScroll');
    })

    //Слайдеры
    //Начальный слайдер
    // $('.sliderMain__content').slick({
    //     nextArrow: '.sliderMain__rightArrow',
    //     prevArrow: '.sliderMain__leftArrow',
    //     customPaging : function(slider, i) {
    //         return '<div class="slider__dots"></div>';
    //     },
    //     dots: true,
    //     autoplay: true,
    //     speed: 650,
    //     autoplaySpeed: 5000,
    //     slidesPerRow: 1,
    //     infinite: true,
    //     swipe: false
    // });
    let sldMain = new Swiper('.sliderMain__content', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.sliderMain__rightArrow',
            prevEl: '.sliderMain__leftArrow',
        },
        pagination: {
            el: '.sliderMain__dots',
        },
    })
    //Отзывы
    // $('.reviews__reviews').slick({
    //     arrows: true,
    //     dots: false,
    //     autoplay: false,
    //     nextArrow: '.reviews__rightArrow',
    //     prevArrow: '.reviews__leftArrow',
    //     slidesToShow: 2,
    // })
    let sldRev = new Swiper('.reviews__swiper', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 28,
        navigation: {
            nextEl: '.reviews__rightArrow',
            prevEl: '.reviews__leftArrow',
        },
    })
    //Слайдер как происходит получение услуги
    // $('.questions__content').slick({
    //     dots: false,
    //     autoplay: false,
    //     nextArrow: '.questions__rightArrow',
    //     prevArrow: '.questions__leftArrow',
    //     slidesToShow: 3,
    //     infinite: false,
    //     responsive: [
    //         {
    //             breakpoint: 961,
    //             settings: {
    //                 slidesToShow: 1
    //             },
    //         }
    //     ]
    // })
    let sldQuest = new Swiper('.questions__content', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 17,
        navigation: {
            nextEl: '.questions__rightArrow',
            prevEl: '.questions__leftArrow',
        },
        breakpoints: {
            960: {
                slidesPerView: 3
            }
        }
    })
    //Прокручиваемая строка с картиками
    $('.partners__content').marquee({
        duration: 10000,
        startVisible: true,
    })

    //Модальные окна
    //Открытие
    $('.js-open-modal').on('click', function(e){
        e.preventDefault();

        if($('.js-open-desktop-menu').hasClass('reverse')){
            openCloseMenu();
        }

        if($('.js-open-mobile-menu').hasClass('reverse')){
            openCloseMobMenu();
        }

        openModal($(this).data('modal'));
    })
    //Закрытие
    $('.js-close-modal').on('click', function(e){
        e.preventDefault();

        closeModal();
    })
    $('.modal').on('click', function(e){
        e.preventDefault();

        if(e.target === document.querySelector('.modal')){
            closeModal();
        }

    })
    //Переоткрытие
    $('.js-reOpen-modal').on('click', function(e){
        e.preventDefault();

        reOpenModal($(this).data('modal'));
    })

    //Закрытие открытие вопроса в faq
    $('.js-close-open-question').on('click', function(){
        $(this).toggleClass('select');

        $(this).parent().next().slideToggle();
    })

    max('.packages__package');
    max('.package__list');
})

//Модальные окна
//Открытие
function openModal(id){
    $('.modal#'+id).addClass('active');
    $('.modal__background').addClass('active');
    $('body').addClass('noScroll');
}

//Закрытие
function closeModal() {
    $('.modal.active').removeClass('active');
    $('.modal__background').removeClass('active');
    $('body').removeClass('noScroll');
}

//Закрытие одного модального окна и открытие другого
function reOpenModal(id) {
    $('.modal.active').removeClass('active');
    $('.modal#'+id).addClass('active');
}

//Вычесление максимума
function max(className){
    let max = 0;
    $(className).each(function() {
        max = $(this).height() > max ? $(this).height() : max;
    })

    $(className).height(max);
}