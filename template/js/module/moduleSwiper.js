export default function moduleSwiper() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,

    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        autoplay: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    var swiperHome = new Swiper(".sliderSwiper", {
        slidesPerView: 2.5,
        spaceBetween: 30,
        autoplay: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 2.5,
                spaceBetween: 50,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

    var swiperfeel = new Swiper(".feelSwiper", {
        slidesPerView: 3.5,
        spaceBetween: 30,
        autoplay: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 50,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiperSlider = new Swiper(".newsSlider-swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiperSliders = new Swiper(".newsSmall-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}