
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


function clickChangeImg(current){
    let changeImage = document.getElementById("changeImage");
    let imgPath = "Assets/click-img/";
    let src = imgPath+current;
    changeImage.src = src;
    changeImage.alt = src;
}

function sizenumber(current){
    let size = document.getElementById("size");
    size.innerHTML = `${current}`;
}


$("#choose-color").on("change",function(){
    let val = $(this).val();
    $("#color").html(val);
});



