 //database 연결
 const db = firebase.firestore(); //텍스트 중심의 데이터 저장소
 const storage = firebase.storage(); //이미지나 오디오 저장소

 $('#loginButton').on('click', function() {
    let loginEmail = $('#loginEmail').val();
    let loginPwd = $('#loginPassword').val();

    /* firebase.auth().signInWithEmailAndPassword(loginEmail, loginPwd).then((result)=> {
        console.log(result.user);
        confirm("로그인되었습니다. 홈화면으로 이동합니다.");
        window.location.href='mypage.html'
    }) */

    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPwd).then((result)=> {
        console.log(result.user);
        confirm("로그인되었습니다. 홈화면으로 이동합니다.");
        window.location.href='index.html'
    })
})