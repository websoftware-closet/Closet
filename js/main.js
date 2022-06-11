$(document).ready(function () {
  $('#main_title').fadeIn('slow');
});

// 마우스 커서 위치에 따라 달라지는 애니메이션 효과
// 이거는 무조건 맨 밑에 있어야함
// 조던 애니메이션
var mainText = document.getElementById("jodan_animation"); //document로 id를 받아온다
window.addEventListener("scroll", function () { //window scroll 이벤트 지정
  let value = window.scrollY; //window의 scroll Y축의 값이 로그로 찍힘 이걸로 어떤 지점에서 사라지고 나타나고 결정가능
  console.log("scrollY", value); //로그
  if (value < 1300) { //1300 보다 작으면 (창 위로 올라가면)
    mainText.style.animation = 'disappear 1s ease-out forwards'; //사라짐
  } else { //1300보다 크거나 같으면 (창 밑으로 내려갈때)
    mainText.style.animation = 'slide 1s ease-out'; //나타남
  }
});
//조던 설명 애니메이션
var mainText2 = document.getElementById("jodan-window");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);
  if (value < 1300) {
    mainText2.style.animation = 'dis-right2left 1.25s ease-out forwards';
  } else {
    mainText2.style.animation = 'slide-right2left 1.25s ease-out';
  }
});
//중고거래 설명 애니메이션
var mainText3 = document.getElementById("used-trade-text");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);
  if (value < 3200) {
    mainText3.style.animation = 'dis-right2left2 1.25s ease-out forwards';
  } else {
    mainText3.style.animation = 'slide-right2left2 1.25s ease-out';
  }
});
//중고거래 이미지 애니메이션 1
var mainText4 = document.getElementById("googlemap");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);
  if (value < 3200) {
    mainText4.style.animation = 'disappear_googlemap 1.25s ease-out forwards';
  } else {
    mainText4.style.animation = 'slide_googlemap 1.25s ease-out';
  }
});
//중고거래 이미지 애니메이션 2
var mainText5 = document.getElementById("usedbox");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);
  if (value < 3200) {
    mainText5.style.animation = 'disappear_usedtrade 1.25s ease-out forwards';
  } else {
    mainText5.style.animation = 'slide_usedtrade 1.25s ease-out';
  }
});

function ioioClick(){
  window.location.href = "https://www.musinsa.com/showcase/5BOXMG20hotsummer/";
}

function RMTCRWClick(){
  window.location.href = "https://www.musinsa.com/showcase/romanticcrown22ss/index.html?v=1654872803";
}

function AnderssonClick(){
  window.location.href = "https://www.musinsa.com/showcase/anderssonbell22summer/index.html?v=1654873075";
}

function LAFUDGEClick(){
  window.location.href = "https://www.musinsa.com/showcase/lafudgestore22summer/index.html?v=1654873128";
}

function markClick(){
  window.location.href = "https://www.musinsa.com/showcase/whatitisnt22summer/index.html?v=1654873204";
}

const promotionEl = document.querySelector('.promotion');
constpromotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
      promotionEl.classList.add('hide');
  }
  else{
    promotionEl.classList.remove('hide');
  }
});