$(function(){


/**
 * 
 * language select -> GO
 */
$('#lengInput').click(function(){ // go를 클릭했을때

  url = $('#lengList').val(); // lengList의 값을 불러온다. = html의 value
  window.open(url);  // 윈도우 창에 그 값을 오픈한다.
}); 


/**
 * =============================================================
 * main swiper
 */
var mainswiper = new Swiper(".main-swiper", {
  loop: true,
  slidesPerView: 1,

  pagination: {
    el:".pagination",
    type:"fraction",
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  autoplay: { // 자동재생 옵션
    delay: 3000,
    disableOnInteraction: false, // 터치를 해서 슬라이드를 넘겨도 멈추지 말고 계속 재생을 해라
  },

  // 슬라이드 될때 해당 카테고리 on
  on:{
    "slideChange":(function(){
      if (this.realIndex >= 3) {
        $('.sc-mainslide .group-tab .tab.citizen').addClass('active').siblings().removeClass('active');;
      } else {
        $('.sc-mainslide .group-tab .tab.news').addClass('active').siblings().removeClass('active');;
        
      }
    })
  }
});

$('.main-swiper .autoplay').click(function(e){
  e.preventDefault();

  if($(this).hasClass('on')){ // 만약 autoplay가 on이라는 클래스를 가지고 있다면
    $(this).removeClass('on').attr('aria-label','자동재생 정지')
    mainswiper.autoplay.start() // 플레이 결과값
  }else{
    $(this).addClass('on').attr('aria-label','자동재생 적용')
    mainswiper.autoplay.stop() // 멈춤 결과값
  } 
});

$();


/**
 * 
 * main swiper -> 주요뉴스/시민참여
 */

$('.sc-mainslide .group-tab .tab').click(function(){ // 주요뉴스 or 시민참여를 클릭하면
  index = $(this).data('tab');
  $(this).addClass('active').siblings().removeClass('active'); // tab에 active class가 추가 되고 형제 요소에는 active가 빠짐

  mainswiper.slideTo(index)
});


/**
 * =============================================================
 * banner swiper
 */
var bannerswiper = new Swiper(".banner-swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 43,

  pagination: {
    el:".pagination",
    type:"fraction",
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


$('.sc-bannerswiper .autoplay').click(function(e){
  e.preventDefault();

  if($(this).hasClass('stop')){
     $(this).removeClass('stop').attr('aria-label','자동재생 정지')
     bannerswiper.autoplay.start()
  }else{
      $(this).addClass('stop').attr('aria-label','자동재생 적용')
    bannerswiper.autoplay.stop()
  } 
});


/**
 * =============================================================
 * bottom menu -> on/off
 */
$('.relrate-btn').click(function(){ // 버튼을 클릭했을때



  // @@ 중앙행정기관 link로 이동 코드
  url = $(this).data('url');

  if(url){
    window.open(url);
    return false;
  }


  subAll = $('.sub-area');
  subList = $(this).siblings('.sub-area'); 

  if ($(this).hasClass('on')){ // !! 만약 버튼에 on class가 있다면?
    // @@ 활성화 된 sub를 다시 눌러서 닫기
    $('.relrate-btn').removeClass('on')
    subList.stop().slideUp();

  } else{ // @@ on이 없을때 : sub이 닫히고 열리면서 선택 된 버튼은 색 변경 됨
      $('.relrate-btn').removeClass('on') // 1. 버튼 전체 on을 빼고
      $(this).addClass('on') // 2. 내가 선택한 버튼의 on을 넣는다.

      subAll.stop().slideUp() // 1. sub 전체를 닫고
      subList.stop().slideDown() // 2. 내가 선택한 sub가 열린다.
      /**
       * 
       * $(this).addClass('on')  +  subList.stop().slideDown() 이 두개를 합쳐서
       * => (this).addClass('on').siblings('.sub-area').stop().slideDown() 이렇게 쓸 수 있음
       *  */ 
  }
});



/**
 * bottom menu -> btn rotate
 */
$('.relrate-btn').click(function(){

  relAll = $('.relrate-ico');
  relIco = $(this).find('.relrate-ico')

  if ($(this).hasClass('on')){
    $('.relrate-btn').removeClass('on')
    $(this).addClass('on')

    relAll.animate({rotate: '0deg'},100);
    relIco.animate({rotate: '180deg'},100);
    
  } else{
  $('.relrate-btn').removeClass('on')
  relAll.animate({rotate: '0deg'},100);
}

});


/**
 * =============================================================
 * bottom menu -> tab
 */

$('.sc-relrate .sub-list li:first-child').keydown(function(e){
  key = e.keyCord

  if(key === 9 && e.shiftKey){ // keyCord가 9와 shift키 일때 (tab + shift)

  }
});

$('.sc-relrate .sub-list li:last-child').keydown(function(e){

  if(key === 9 && !e.shiftKey){ // keyCord가 9이고 shift키는 아닐때 (tab)

  }
});



/**
 * =============================================================
 * top btn -> hide/show
 */
let lastScroll = 0;

$(window).scroll(function(){

  var curr = $(window).scrollTop();

  if( curr > lastScroll ){
    $(".fix-btn-top").removeClass('off');
    $(".fix-btn-top").addClass('on');
  }
  else {
    $(".fix-btn-top").removeClass('on');
    $(".fix-btn-top").addClass('off');
  }

});


/**
 * 
 * top btn click -> top
 *  */ 
$(".fix-btn-top").click(function(){

  $("html, body").animate({scrollTop : 0}, 500);
  return false;

});





}); // 지우지 말것!!!