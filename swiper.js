//외부연동
window.onload = function () {
    //실행식 가져오기
    const swiper = new Swiper('#mainBanner .swiper', {
        loop: true,
        effect: "fade",
        pagination: {
            el: '#mainBanner .swiper-pagination',
            clickable: true,
        },


        navigation: {
            nextEl: '#mainBanner .swiper-button-next',
            prevEl: '#mainBanner .swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }
    });
}
//칠성몰 // https://www.cj.co.kr/kr/index //11번가
// window.addEventListener('load',function(){

// })