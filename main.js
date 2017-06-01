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




    let $signUp = document.querySelector('.sign-up')
    $signUp.onclick = ()=>{
       signUpForm.removeAttribute('hidden');
       signInForm.setAttribute('hidden','hidden');
    }
    
     let $signIn = document.querySelector('.sign-in')
    $signIn.onclick = ()=>{
       signInForm.removeAttribute('hidden');
       signUpForm.setAttribute('hidden','hidden');
    }