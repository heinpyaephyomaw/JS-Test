
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

$(".add").on("click",function(){
  let address = $("#address").val();
     $("#address").val("");

    let phone = $("#phone").val();
    $("#phone").val(" ");

    add(`Phone:  ${phone}`,`Address:  ${address}`);

});

function add(add,ph){
    $("#list").append(`<div class="d-flex align-items-center mb-3"><input type="radio" name="address" class="mr-2"><div>${add}<br>${ph}</div></div>`);
}

$('.catch-on-deli-input').on("click",function(){
    $(".payment-list").addClass("invisible");
    $(".payment-list").removeClass("visible");
});

$('.payment-input').on("click",function(){
    $(".payment-list").addClass("visible");
    $(".payment-list").removeClass("invisible");
})
