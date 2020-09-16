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

//点击返回顶部
$(window).scroll(function(){
    if($(window).scrollTop()>=100){
        $('.fix').fadeIn(300);
    }else{
        $('.fix').fadeOut(300);
    }
})
$('.fix').bind('click',function(){
    $('html').animate({scrollTop:0},300);
})


$('.header-login').on('click',function(){
    $('.backg-gray').show();
})
$('.cha').on('click',function(){
    $('.backg-gray').hide();
})

    
if(localStorage.getItem('tick')){
    $('.reg-phone').val(localStorage.getItem('phone'));
    $('.reg-pass').val(localStorage.getItem('psd'));
    $('.reg-check').attr('checked',localStorage.getItem('tick'));
}

//鼠标焦点
$('.reg-phone').on('focus',function(){
    $('.reg-phone').attr('placeholder','');
})
$('.reg-phone').on('blur',function(){
    $('.reg-phone').attr('placeholder','请输入手机号');
})

$('.reg-pass').on('focus',function(){
    $('.reg-pass').attr('placeholder','');
})
$('.reg-pass').on('blur',function(){
    $('.reg-pass').attr('placeholder','请输入密码');
})


$('.regin').on('click',function(){
    var phone = /^1[3-9]{1}[0-9]{9}$/;
    var pass = /^\w{6,}$/;

    if(phone.test($('.reg-phone').val())==false){
        alert('请输入正确的手机号！');
    }else if(pass.test($('.reg-pass').val())==false){
        alert('请输入正确的密码！');
    }
    else{
        $.ajax({
            url:'http://192.168.1.47:3000/users',
            type:'post',
            data:{
                type:"login",
                phone:$('.reg-phone').val(),
                pass:$('.reg-pass').val()
            },
            success:function(json){
                if($('.reg-check').is(':checked')){
                    localStorage.setItem('phone',$('.reg-phone').val());
                    localStorage.setItem('psd',$('.reg-pass').val());
                    localStorage.setItem('tick',$('.reg-check').is(':checked'));
                }
                else{
                    localStorage.clear();
                }
                alert('登录成功！');
                $('.backg-gray').hide();
            }
        })
    } 
})