

$(".password-show-hide").on("click",function (e){
    e.preventDefault();

    let password = document.getElementById("password");
    if(password.type === "password"){
        password.type =  'text';
    }else{
        password.type = 'password';
    };

    $(this).toggleClass("hide");
    let hide = $(this).hasClass("hide");
    if(hide){
        $(".show-hide-icon").removeClass("feather-eye");
        $(".show-hide-icon").addClass("feather-eye-off");
    }else{
        $(".show-hide-icon").addClass("feather-eye");
        $(".show-hide-icon").removeClass("feather-eye-off");
    };
});


let ScreenHeight = $(window).height();

$(window).scroll(function(){
    let scroll = $(this).scrollTop();
    if(scroll > ScreenHeight/2){
        $(".nav-drop").addClass("nav-down");
    }else{
        $(".nav-drop").removeClass("nav-down");
    }
});


$(".user-login").on("click",function(){
    alert("Hello");
})