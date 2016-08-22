(function($){
	$.fn.extend({
	scrollFixed : function(){
		var onScro = function(offt){
				var dex = offt-1;
				$(".fixed").find("ul li").eq(dex).find("a").addClass("on").parent().siblings().find("a").removeClass("on");
			};
		$(window).scroll(function(){
			var scro = $(window).scrollTop();
			if(scro >= 1357) {
				$(".fixed").find("ul").addClass("le");
			}else if(scro < 1357){
				$(".fixed").find("ul").removeClass("le");
			}
			if (scro >= 1357&&scro < 2272) {
				onScro(1);
			}else if (scro >= 2272&&scro < 3094) {
				onScro(2);
			}else if (scro >= 3094&&scro < 3916) {
				onScro(3);
			}else if (scro >= 3916&&scro < 4738) {
				onScro(4);
			}else if (scro >= 4738&&scro < 5560) {
				onScro(5);
			}else if (scro >= 5560) {
				onScro(6);
			}
		});
	},
	fixedClick : function(){
		var distance = [1357,2272,3094,3916,4738,5560];
		var index;
		var i;
		for(i = 0;i < 6;i++){
			$(this).find("li").eq(i).click(function(){
				index = $(this).index();
				window.scrollTo(0,distance[index]);
			});
		}	
	}
});
$(".fixed").scrollFixed();
$(".fixed").fixedClick();
})(jQuery);