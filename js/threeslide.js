(function($){
	var animated = false;
	$.extend({
		threeLeft : function(offet){
				if(animated){
					return;
				}
				animated = true;
		 		var width = parseInt($(".threeMainInner a").width());
				var left1 = parseInt($(".threeMainInner").css("left"));
					left1 = left1 + offet;
					$(".threeMainInner").animate({left:left1},200,function(){
						animated = false;
					});		
		},
		threeAnmiate : function(){			
			$(".threeInner .prev").click(function(){
				var wid = parseInt($(".threeMainInner").css("left"));
				if(wid >= -242){
					$(".threeInner .prev").css("display","none");
				}
					$.threeLeft(242);
					if(wid >= -968){
					$(".threeInner .next").css("display","block");
				}
			});
			$(".threeInner .next").click(function(){
				var wid = parseInt($(".threeMainInner").css("left"));
				if(wid <= -968){
					$(".threeInner .next").css("display","none");
				}
					$.threeLeft(-242);
				if(wid <= 0){
					$(".threeInner .prev").css("display","block");
				}
			});
		}
	});
	$.threeAnmiate(); 
})(jQuery);
