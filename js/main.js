// 팝업 열기닫기 
$(document).ready(function(){
    $('.btn a').click(function(e){
        e.preventDefault();
        // $('.content').slideToggle('active')
        $('.content').toggleClass('active')
    });
    //해당 위치 스크롤시 텍스트 이미지 애니메이션 작동
    $(window).scroll(function(){
        if($(this).scrollTop()>=1000){
            $('.txt_1, .txt_2').addClass('on');
        }else {
            $('.txt_1, .txt_2').removeClass('on');
        }
    })
    //해당 위치 스크롤시 스토어 애니메이션 작동
    $(window).scroll(function(){
        if($(this).scrollTop()>=2400){
            $('.map, .catering').addClass('on');
        }else {
            $('.map, .catering').removeClass('on');
        }
    })
    $('.familysite button, familysite a').click(function(e){
        e.preventDefault();
        // $('.content').slideToggle('active')
        $('.familysite').toggleClass('on')
    });
});





new Swiper('.sw-visual',{
    pagination : {
        el: '.pagination',
        clickable : true,
    },
    navigation : {
        prevEl : '.prev',
        nextEl : '.next',
    }
});

new Swiper('.sw-event',{
    loop: true,
    autoplay : true,
    touchRatio: 0,
    pagination : {
        el: '.swiper-pagination',
        clickable : true,
        
    }

});

           
var carouselElm = document.querySelector('.slider')
new HoverCarousel(carouselElm)     