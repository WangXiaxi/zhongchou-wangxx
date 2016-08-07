$.fn.extend({
	startIn : function(){
		var $outAbanner1 = $(".outAbanner1"),
			$outAbanner2 = $(".outAbanner2"),
			$outAbanner3 = $(".outAbanner3");
		$(".righttwo").crea($outAbanner1,twoBan);
		$(".rightthree").crea($outAbanner2,threeBan);
		$(".rightfour").crea($outAbanner3,fourBan);
		$(".righttwo").abanner(0,$outAbanner1);
		$(".rightthree").abanner(500,$outAbanner2);
		$(".rightfour").abanner(1000,$outAbanner3);
	},
	crea : function(qwe,Ban){
		var index;
		for(var i = 0,len = Ban.length;i < (len + 2);i++){
			index = i-1;
			if(i == 0){
				index = 1;
			};
			if(i == 3){
				index = 0;
			};
			qwe.append(
				"<div class=\"pub-b\">"+
					"<div class=\"date\">"+
						"<span>上线日期</span><span class=\"dateSum\">"+Ban[index].date+"</span>"+
					"</div>"+
					"<a><img src=\""+Ban[index].imgSrc+"\" alt=\"淘宝众筹\"></a>"+
				"</div>"
			);
		};
	},
	anima : function($outAbanner,leftA){
		$outAbanner.animate({
			left:leftA
		},500, function(){
        if(leftA > -290){
            $outAbanner.css('left', -580);
            }
        if(leftA < -580){
            $outAbanner.css('left', -290);
        	}
        });
	},
	setTime : function(offSet,$out){ 
		var leftA;
			leftA = parseInt($out.css("left")) + offSet;
			$out.anima($out,leftA);
	},
	abanner : function(times,$outAbanner){
		var bgColor = function(_this){
			$(_this).addClass("curr").siblings(".pubChan").removeClass("curr");
		}
		$(".pubChan.difChan1").click(function(){
			bgColor(this);
			setTimeout(function(){$(this).setTime(290,$outAbanner);},times);
		});
		$(".pubChan.difChan2").click(function(){ 
			bgColor(this);
			setTimeout(function(){$(this).setTime(-290,$outAbanner);},times);
			});
		}
});

$(".rightBanner").startIn();
