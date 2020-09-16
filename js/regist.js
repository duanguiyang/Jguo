


var phone=$(".code_a");//手机号部分
var phone_verify=/^1[3-9]{1}[0-9]{9}$/;
var a=true;
if(a){
    phone.focus(function(){//手机号码获取焦点
      
        console.log(phone_verify.test(phone.val()));
        if(phone_verify.test(phone.val())==false){
            $(".div_a").html("*请输入正确的手机号");
            $(".img_a").hide();    
          }else{
            $(".img_a").show();
              a=false;        
          }
         
    })
}
    phone.blur(function(){//手机号码失去焦点
        if(phone_verify.test(phone.val())==true){
            $(".div_a").html("");
            $(".img_a").show();         
        }else if(phone.val()==""){
            $(".div_a").html("*手机号码不能为空");
            $(".img_a").hide();
        }   
    })


var username=$(".code_d");//用户名
var name_verify=/^\S+$/;
if(a){
    username.focus(function(){//用户名获取焦点
        if(name_verify.test(username.val())==false){
            $(".div_b").html("*请输入你的用户名");
            $(".img_b").hide();          
        }else{
            $(".div_b").html("");
            $(".img_b").show();
            a=false;
        } 
    })
}

username.blur(function(){//用户名失去焦点
    if(name_verify.test(username.val())==true){
        $(".div_b").html("");
        $(".img_b").show();
    }else if(username.val()==""){
        $(".div_b").html("*用户名不能为空");
        $(".img_b").hide();               
    }else if(username.val()!=""){
        $(".img_b").show();
    }

})
//
//图片默认隐藏
$(".img_a").hide();
$(".img_b").hide();
$(".img_c").hide();
$(".img_d").hide();
$(".registered").hide();

var password=$(".code_e");//密码部分
var password_verify=/^\w{6,}$/;
if(a){
    password.focus(function(){
        if(password_verify.test(password.val())==false){
            $(".div_c").html("密码长度为6-16");
            $(".img_c").hide(); 
        }else{      
            $(".div_c").html("");    
            $(".img_c").show();
            a=false;
        }
    })
}


password.blur(function(){
    if(password_verify.test(password.val())==true){
        $(".div_c").html(""); 
        $(".img_c").show();
    }else if(password.val()==""){
        $(".div_c").html("密码不能为空");
        $(".img_d").hide(); 
    }
})

var pass=$(".code_f");//确认密码
if(a){
    pass.focus(function(){
        if(pass.val()!=password.val()){
            $(".div_d").html("两次密码不一致");
            $(".img_d").hide(); 
        }else if((pass.val()=="")){
            $(".img_d").hide(); 
            a=false;
        }else if(pass.val()==password.val()){
            $(".div_d").html("");
            $(".img_d").show(); 
        }
    })  
}

pass.blur(function(){
    if((pass.val()=="")){
        $(".div_d").html(""); 
        $(".img_d").hide();
    }else if((pass.val()!=password.val())){
        $(".div_d").html("两次密码不一致");
        $(".img_d").hide();
    }else if((pass.val()==password.val())){
        $(".div_d").html("");
        $(".img_d").show();
    }
})

//获取验证码计时器
var timer=null;
var index=60;
var ing=true;
if(true){
    $(".auth_text").on("click",function(){
        clearInterval(timer);
        set();        
    })
}
function set(){
   timer= setInterval(function(){
       ing=false;
        index--;
        $(".auth_text").css("color","black");
        $(".auth_text").text("还需"+index+'秒获取');
        if(index<=0){
            clearInterval(timer); 
            index=60;
            ing=true;
            $(".auth_text").text("重新获取");
             
        }
        
    },1000)
}


function reg(phone_val,pass_val){//注册接口调用
    $.ajax({
        url:"http://192.168.1.47:3000/users",
        type:"post",
        data:{
            type:"register",
            phone:phone_val,
            pass:pass_val
        },
        success:function(json){
            console.log(json);
        }

    })
}

// function biu(){//成功弹出
//   timer= setTimeout(function(){
//     $(".registered").show();
//     },500);
    

// }
// $(".cross").on("click",function(){
//     $(".registered").hide();

//     $("body").css({
//         "backgroundColor":"white",
//         "z-index":"5"
//     })
//     $(".middle_box").css({
//         "backgroundColor":"white",
//     });
//  $(".middle").css("backgroundColor","#e9e8e8");


// })
// //显示隐藏
// function bring(){
//     $(".code_a").val("");
//     $(".code_d").val("");
//     $(".code_e").val("");
//     $(".code_f").val("");
//     $(".img_a").hide();
//     $(".img_b").hide();
//     $(".img_c").hide();
//     $(".img_d").hide();
// }
// //层级
//  function ceng(){
//     $("body").css({
//         "backgroundColor":"rgba(0, 0, 0,.3)",
//         "z-index":"4"
//     })
//     $(".registered").css({
//         "backgroundColor":"white",
//         "z-index":"6"
//     });
//     $(".middle_box").css({
//         "backgroundColor":"rgba(0, 0, 0,.3)",
//         // "opacity":"0"
//     });
//  $(".middle").css("backgroundColor","rgba(0, 0, 0,.3)");
//  }

$(".but").on("click",function(){//立即注册
    var  phone_val=$(".code_a").val();
    var  pass_val=$(".code_e").val();

if(phone_verify.test(phone.val())==true&&name_verify.test(username.val())==true&&
password_verify.test(password.val())==true&&pass.val()==password.val()){
    reg(phone_val,pass_val);  
    // bring();
    // biu();
    // ceng();
    return;
}
})






