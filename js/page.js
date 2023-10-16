$(function() {
  //database 연결
  const db = firebase.firestore(); //텍스트 중심의 데이터 저장소
  const storage = firebase.storage(); //이미지나 오디오 저장소

  let $header = $('header');
  let $headerTop = $('header').height()


$(window).scroll(function() {  
  let i = Math.floor($(this).scrollTop())
  if ($headerTop < i) {
    $header.removeClass('hon')
    $('.headerTitle img').attr({
      src : 'img/limbo_logo_reverse.png'
    })
  }
  else {
    $header.addClass('hon')
    $('.headerTitle img').attr({
      src : 'img/limbo_logo.png'
    })
  }
})
})