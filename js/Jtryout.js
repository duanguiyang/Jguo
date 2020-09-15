$('.banner-text').animate({
    top:'70px',
    right:'245px',
    width:'305px',
    height:'175px'
},2000)
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