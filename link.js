
			$(function(){
				
            $(("#gotop")).click(function(){
                $("body").animate({
                    scrollTop:0
                    },1000);
                });
				
            $(window).scroll(function() {
                if ($(this).scrollTop() > 20){
                    $(("#gotop")).fadeIn("fast");
                } else {
                    $(("#gotop")).stop().fadeOut("fast");
                }
            });
			
			
			$((".button3")).click(function(){
             
			});
            });
