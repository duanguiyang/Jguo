
    //加载更多部分
    $(".more").on("click",function(){
        $(".more_a").show();
        $(".more").hide(); 
        set();
    })
    function set(){
        setTimeout(function(){
            $(".more_box").show();
            $(".more_a").hide(); 
        },2000)
    }
  
