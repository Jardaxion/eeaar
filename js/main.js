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
    $('.sliderMain__content').slick({
        nextArrow: '.sliderMain__rightArrow',
        prevArrow: '.sliderMain__leftArrow',
        customPaging : function(slider, i) {
            return '<div class="slider__dots"></div>';
        },
        dots: true,
        autoplay: true,
        speed: 650,
        autoplaySpeed: 5000,
        slidesPerRow: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 961,
                settings: {
                    arrows: false
                },
            }
        ]
    });

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