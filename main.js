//leancloud初始化
var APP_ID = 'd1l7dVxFlCO3k9LxT9RhPriS-gzGzoHsz';
    var APP_KEY = 'JNExPRwDMdWrrowE7XIyfNgs';
        AV.init({
        appId: APP_ID,
        appKey: APP_KEY
        });
 //登陆
    let signInForm = document.querySelector('form[name=signIn]')
    signInForm.onsubmit = (e)=>{
        e.preventDefault();
        let username = signInForm.username.value
        let password = signInForm.password.value
        AV.User.logIn(username, password).then(function (loginedUser) {
        
            alert('登陆成功！欢迎回来！')
            window.location.reload();
        }, function (error) {
            alert('帐号或密码有误，请重新输入')
            window.location.reload();
        });
    }

//leancloud设置
 var APP_ID = 'd1l7dVxFlCO3k9LxT9RhPriS-gzGzoHsz';
    var APP_KEY = 'JNExPRwDMdWrrowE7XIyfNgs';
    AV.init({
    appId: APP_ID,
    appKey: APP_KEY
    });

   let user = AV.User.current()
    if(user){
       welcome.textContent = '你好，'+ user.attributes.username
        logOut.removeAttribute('hidden')
    }

    let signUpForm = document.querySelector('form[name=signUp]')
    logOut.onclick=()=>{
        AV.User.logOut();
        window.location.reload()
    }
    signUpForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        // 新建 AVUser 对象实例
        var user = new AV.User();
        // 设置用户名
        user.setUsername(signUpForm.username.value);
        // 设置密码
        user.setPassword(signUpForm.password.value);
        // 设置邮箱
        user.setEmail(signUpForm.email.value);
        user.signUp().then(function (loginedUser) {
            alert('注册成功！')
            /*console.log(loginedUser);*/
           /* window.location.reload()*/
            signInForm.removeAttribute('hidden');
            signUpForm.setAttribute('hidden','hidden');
            AV.User.logOut();
            window.location.reload()
        }, function (error) {
            alert(error);
        });
    })


   let $contain =document.querySelector('#contain')
   let $signUp = document.querySelector('.sign-up')
   let $signIn = document.querySelector('.sign-in')
   /*var self = $("#contain");

 function rotateLeft(el) {
            el.addClass("animation-rotate-left");
        }
        
        function rotateLeftBack(el) {
            el.addClass("animation-rotate-left-back");
        }
        
        function rotateRight(el) {
            el.addClass("animation-rotate-right");
        }
        
        function rotateRightBack(el) {
            el.addClass("animation-rotate-right-back");
        }
        
        function loadPrev(){
            rotateRightBack(self);
            signUpForm.removeAttribute('hidden');
            signInForm.setAttribute('hidden','hidden')
        }
        
        function loadNext(){
            rotateLeftBack(self);
            signInForm.removeAttribute('hidden');
            signUpForm.setAttribute('hidden','hidden');
        }

        function rmright(){
            $('contain').removeClass('animation-rotate-right animation-rotate-right-back');
        }
        function rmleft(){
             $('contain').removeClass('animation-rotate-left animation-rotate-left-back')
        }

*/
    function rmup(){
       signUpForm.removeAttribute('hidden');
       signInForm.setAttribute('hidden','hidden');
    }
 
    function rmin(){
       signInForm.removeAttribute('hidden');
       signUpForm.setAttribute('hidden','hidden');
    }
    function rmupA(){
         $('#contain').removeClass('transgo');
    }
    function rminA(){
         $('#contain').removeClass('transback');
    }

    function resetF1(){
     signUpForm.style.transform='rotateY(0deg)';
    }
    function resetF2(){
     signInForm.style.transform='rotateY(0deg)';
    }


    $signUp.onclick = ()=>{
       /*signUpForm.removeAttribute('hidden');
       signInForm.setAttribute('hidden','hidden');*/
      /* rotateRight(self);
       setTimeout(loadPrev, 500);
       setTimeout(rmright, 1000);*/
       $('#contain').addClass('transgo')
       setTimeout(rmup, 500);
       setTimeout(rmupA, 1000);
    }
    
     
    $signIn.onclick = ()=>{
      /* signInForm.removeAttribute('hidden');
       signUpForm.setAttribute('hidden','hidden');*/
        /* rotateLeft(self);
       setTimeout(loadNext, 500);
        setTimeout(rmleft, 1000);*/
     $('#contain').addClass('transback')
     setTimeout(rmin, 500);
     setTimeout(rminA, 1000);
    }


