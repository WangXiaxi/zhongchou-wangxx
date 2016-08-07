$.extend({
	 threeLeft : function(offet){
	 		var width = parseInt($(".threeMainInner a").width());
			var left1 = parseInt($(".threeMainInner").css("left"));
				left1 = left1 + offet;
				if(left1 <= -width*5){
					left1 = -width*5;
				}else if(left1 <= -width*4&&left1 > -width*5){
					left1 = -width*4;
				}else if(left1 <= -width*3&&left1 > -width*4){
					left1 = -width*3;
				}else if(left1 <= -width*2&&left1 > -width*3){
					left1 = -width*2;
				}else if(left1 <= -width&&left1 > -width*2){
					left1 = -width;
				}else if(left1 >-width){
					left1 = 0;
				}

				$(".threeMainInner").css("left",left1);		
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