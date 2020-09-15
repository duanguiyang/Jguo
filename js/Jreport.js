$('.newlm-img1').hover(function () {
    $(this).children('newlm-text').slideToggle('slow')
});
$('.report-na').on('click',function(){
    $('.report-hot').hide();
    $('.report-new').show();
    $(this).addClass('report-nh');
    $('.report-ha').removeClass('report-nh');
})
$('.report-ha').on('click',function(){
    $('.report-new').hide();
    $('.report-hot').show();
    $(this).addClass('report-nh');
    $('.report-na').removeClass('report-nh');
})
$('.newlmain-bottom').on('click',function(){
    $(this).children('div').css({'background':'url(./images/img1/loading-icon.gif)','top':'12px'});
    $(this).children('p').text('正在加载...');
})

var zan =true;
$('.newlmt-img2').on('click',function(){
    var num = $(this).next('span').text()-0;
    if(zan==true){
        num++;
        $(this).next('span').text(num);
        $(this).css('background','url(./images/img1/zan2.png)no-repeat -2px -2px');
        zan=false;
    }
    else{
        num--;
        $(this).next('span').text(num);
        $(this).css('background','url(./images/img1/zan.png)no-repeat 0px 0px');
        zan=true;
    }
})