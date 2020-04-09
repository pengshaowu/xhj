var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    speed:400, //切换时过渡时间
    autoplay:true, //是否自动切换
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
var mySwiper = new Swiper('.swiper-container2', {
    slidesPerView: 3,
    spaceBetween: 30,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
})
var mySwiper = new Swiper('.swiper-container3', {
    slidesPerView: 2,
    spaceBetween: 184,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },
})