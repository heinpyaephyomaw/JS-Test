
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function topUp(url){
    setTimeout(function (){
        location.href = `${url}`;
    },2000);
}

$('.carousel').carousel({
    interval: false
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




