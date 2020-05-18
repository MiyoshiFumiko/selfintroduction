$('.welcome-box').mouseover(function(){
    $('#thankyou').slideToggle();
})

$('#about').click(function(){
    $('.About').slideToggle();

})

$('#favorite').click(function(){
    $('.Favorite').slideToggle();

})

$('li > span').click(function(){
    $(this).siblings().slideToggle();

})

$('#contact').click(function(){
    $('.contact').slideToggle();

})

$(function(){
    $('#okzoom').okzoom({
        width: 250,  // ルーペの幅
        height:250,  // ルーペの高さ
        round:true,  // ルーペの形
        border: "1px solid black", // ルーペのボーダー指定
        shadow: "0 0 5px #ffffff"  // ルーペの影指定
    });
});