$(function() {
  //database 연결
  const db = firebase.firestore(); //텍스트 중심의 데이터 저장소
  const storage = firebase.storage(); //이미지나 오디오 저장소
 $('.mainTab span').on('click', function() {
   let i = $(this).index();

   $('.mainTab span').removeClass('mainTab_on')
   $('.mainTab span').eq(i).addClass('mainTab_on')
 })
 $('section .mainTab span').on('click', function() {
   let i = $(this).index();

   $('section .mainTab span').removeClass('mainTab_on')
   $('section .mainTab span').eq(i).addClass('mainTab_on')
 })
 $('.headerList li').on('click', function() {
   let i = $(this).index();
   
   $('.main').css({
     display : "none"
   })
   $('.main_tabArea > section').removeClass('mainTab_on')
   $('.main_tabArea > section').eq(i).addClass('mainTab_on')
 })
 /* $('.main_heart').on('click', function() {
   $('.main_heart').attr({
     src : 'img/heart_full.png'
   })
 }) setting.js 로 이동 */
})