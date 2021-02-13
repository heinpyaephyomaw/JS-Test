

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function topUp(url){
    setTimeout(function (){
        location.href = `${url}`;
    },2000);
}

$(".show-down").on("click",function(){
    let show = $(".collapse").hasClass("show");
    if(show){
        $(".down").addClass("feather-plus");
        $(".down").removeClass("feather-minus");
    }else{
        $(".down").removeClass("feather-plus");
        $(".down").addClass("feather-minus");
    }
})

let ScreenHeight = $(window).height();

$(window).scroll(function(){
    let scroll = $(this).scrollTop();
    if(scroll > ScreenHeight/2){
        $(".nav-drop").addClass("nav-down");
    }else{
        $(".nav-drop").removeClass("nav-down");
    }
});
