$.fn.extend({
	leftSelector : function(){
		var _this = this;
		$(this).mouseenter(function(){
			$(this).find(".selectorOut").css("display","block");
			$(this).find(".selector").animate({
				top : 0
			});
			$(this).find(".puIcon").css("transform","rotate(180deg)");
		}).mouseleave(function(){
			var height = $(this).find(".selector").height();
			$(this).find(".selector").animate({
				top : -height
			},200);
			$(this).find(".puIcon").css("transform","rotate(0deg)");
			setTimeout(function(){
				$(_this).find(".selectorOut").css("display","none")
			},200);
		});
	}
});
$(".leftSecondLi").leftSelector();
$(".rightSecondLi").leftSelector();