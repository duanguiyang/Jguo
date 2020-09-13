//天外飞仙
$('.banner-text').animate({
    top:'70px',
    right:'245px',
    width:'305px',
    height:'175px'
},2000)
//倒计时
function tim(){
    var time1 = new Date('11 11,2020');
    var time2 = new Date();
    var cha = time1.getTime()-time2.getTime();
    var dat = parseInt(cha/1000/60/60/24);
    var hou = parseInt(cha/1000/60/60%24);
    var min = parseInt(cha/1000/60%60);
    var sc = parseInt(cha/1000%60);
    $('.banner-timer').text('申请时间剩余：'+dat+'天'+hou+'时'+min+'分'+sc+'秒');
}
setInterval(tim,1000);
//轮播图
var timer1 = null;
var timer2 = null;
var index = 0;
function change(){

}
function automove(){
    timer1 = setInterval(function(){
        clearInterval(timer2);
        index++;
        if(index>=$('.slu').length){
            index=0;
        }
        var start = $('.slideshow-in').scrollLeft();
        var end = 1175 * index;

        var step = 0;
        var maxstep = 30;
        var everystep = (end - start) / maxstep;

        timer2 = setInterval(function(){
            step++;
            if(step>=maxstep){
                step=0;
                clearInterval(timer2);
            }
            start+=everystep;
            $('.slideshow-in').scrollLeft(start);
        },30)
    },3000)
    
}
automove();
$('.slideshow-ul').children('div').hover(function(){
    clearInterval(timer1);
},function(){
    automove();
})
$('.slideshow-left').on('click',function(){
    
})
$('.slideshow-right').on('click',function(){
    
})
