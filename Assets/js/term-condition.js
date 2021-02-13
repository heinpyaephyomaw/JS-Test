

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function topUp(url){
    setTimeout(function (){
        location.href = `${url}`;
    },2000);
}

let ScreenHeight = $(window).height();

$(window).scroll(function(){
    let scroll = $(this).scrollTop();
    if(scroll > ScreenHeight/2){
        $(".nav-drop").addClass("nav-down");
    }else{
        $(".nav-drop").removeClass("nav-down");
    }
});





//For Cete One
$(".first_cete").on("mouseover",function(){
    $(".ceteone_detail").show();
});

$(".first_cete").on("mouseleave",function(){
    $(".ceteone_detail").hide();
});

$(".ceteone_detail").on("mouseover",function(){
    $(this).show();
});

$(".ceteone_detail").on("mouseleave",function(){
    $(this).hide();
});


//For Cete Two
$(".second_cete").on("mouseover",function(){
    $(".cetetwo_detail").show();
});

$(".second_cete").on("mouseleave",function(){
    $(".cetetwo_detail").hide();
});

$(".cetetwo_detail").on("mouseover",function(){
    $(this).show();
});

$(".cetetwo_detail").on("mouseleave",function(){
    $(this).hide();
});


//For Cete Three
$(".third_cete").on("mouseover",function(){
    $(".cetethree_detail").show();
});

$(".third_cete").on("mouseleave",function(){
    $(".cetethree_detail").hide();
});

$(".cetethree_detail").on("mouseover",function(){
    $(this).show();
});

$(".cetethree_detail").on("mouseleave",function(){
    $(this).hide();
});

//For Cete Four
$(".four_cete").on("mouseover",function(){
    $(".cetefour_detail").show();
});

$(".four_cete").on("mouseleave",function(){
    $(".cetefour_detail").hide();
});

$(".cetefour_detail").on("mouseover",function(){
    $(this).show();
});

$(".cetefour_detail").on("mouseleave",function(){
    $(this).hide();
});

//For Cete Five
$(".five_cete").on("mouseover",function(){
    $(".cetefive_detail").show();
});

$(".five_cete").on("mouseleave",function(){
    $(".cetefive_detail").hide();
});

$(".cetefive_detail").on("mouseover",function(){
    $(this).show();
});

$(".cetefive_detail").on("mouseleave",function(){
    $(this).hide();
});

//For Cete Six
$(".six_cete").on("mouseover",function(){
    $(".cetesix_detail").show();
});

$(".six_cete").on("mouseleave",function(){
    $(".cetesix_detail").hide();
});

$(".cetesix_detail").on("mouseover",function(){
    $(this).show();
});

$(".cetesix_detail").on("mouseleave",function(){
    $(this).hide();
});

//For Cete Seven
$(".seven_cate").on("mouseover",function(){
    $(".ceteseven_detail").show();
});

$(".seven_cate").on("mouseleave",function(){
    $(".ceteseven_detail").hide();
});

$(".ceteseven_detail").on("mouseover",function(){
    $(this).show();
});

$(".ceteseven_detail").on("mouseleave",function(){
    $(this).hide();
});

//For Cete Eight
$(".eight_cate").on("mouseover",function(){
    $(".ceteeight_detail").show();
});

$(".eight_cate").on("mouseleave",function(){
    $(".ceteeight_detail").hide();
});

$(".ceteeight_detail").on("mouseover",function(){
    $(this).show();
});

$(".ceteeight_detail").on("mouseleave",function(){
    $(this).hide();
});

//For Cete Nine
$(".nine_cate").on("mouseover",function(){
    $(".cetenine_detail").show();
});

$(".nine_cate").on("mouseleave",function(){
    $(".cetenine_detail").hide();
});

$(".cetenine_detail").on("mouseover",function(){
    $(this).show();
});

$(".cetenine_detail").on("mouseleave",function(){
    $(this).hide();
});








