 //database 연결
 const db = firebase.firestore(); //텍스트 중심의 데이터 저장소
 const storage = firebase.storage(); //이미지나 오디오 저장소
  
 $('#signInButton').on('click', function() {        
     let registName = $('#signInName').val();
     console.log(registName)
     let registEmail = $('#signInEmail').val();
     let registPwd = $('#signInPassword').val();
     let btnBack = $('#back')

     btnBack.on('click', function() {
       // window.location.href='login.html'
     })
     
     firebase.auth().createUserWithEmailAndPassword(registEmail, registPwd).then((result)=> {
             console.log(result);
             console.log(result.user);
             result.user.updateProfile({displayName: registName})
             //confirm('회원가입이 완료되었습니다. 로그인해주세요')
             window.location.href='login.html'
         })

 })