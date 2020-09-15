//分享
$('.rshoptlr').hover(function(){
    $(this).children('.bshare-custom').show();
},function(){
    $(this).children('.bshare-custom').hide();
})

//喜欢点赞
var zan =true;
$('.rshoptll').on('click',function(){
    var num = $(this).children('p').text().split(' ')[1]-0;
    if(zan==true){
        num++;
        $(this).removeClass('rshoptll');
        $(this).addClass('rshoptlladd');
        $(this).children('p').text('喜欢 '+num);
        zan=false;
    }
    else{
        num--;
        $(this).removeClass('rshoptlladd');
        $(this).addClass('rshoptll');
        $(this).children('p').text('喜欢 '+num);
        zan=true;
    }
})