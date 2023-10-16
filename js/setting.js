const firebaseConfig = {
  apiKey: "AIzaSyB_GbFNggyrLBGkpcH28TvApyRPOG85LNY",
  authDomain: "blank-1d72a.firebaseapp.com",
  databaseURL: "https://blank-1d72a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blank-1d72a",
  storageBucket: "blank-1d72a.appspot.com",
  messagingSenderId: "727833147547",
  appId: "1:727833147547:web:29b9d341c0536b65652e3e"
};
firebase.initializeApp(firebaseConfig);

//header영역
$(function() {
  $('.headerList li').on('click', function() {
  let i = $(this).index();
  
  $('header ul li').removeClass('headerList_on')
  $('header ul li').eq(i).addClass('headerList_on')
})
$('.serchMe').on('click', function() {
  $('.headerSerachBack').toggleClass('headerSon')
})
$('.main_heart').on('click', function() {
  $('.main_heart').attr({
    src : 'img/heart_full.png'
  })
})
})


//유저정보확인
let userInfo = localStorage.getItem('user');
console.log(userInfo)
console.log(JSON.parse(userInfo).displayName);
$('#userName').html(JSON.parse(userInfo).displayName)

//onAuthStateChanged() - 로그인/로그아웃/새로고침 
firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
        //console.log(typeof(user));
        console.log(user.uid)
        //로컬스토리지는 문자형만 저장-user 정보는 객체형이므로 문자형으로 변환하여 로컬스토리지에 저장함.
        localStorage.setItem('user', JSON.stringify(user))
    }
})