(function($){
	$.fn.extend({
		into : function(option){
			var data = option.data;
				this._data = data;

				this.getBan();
			},
		getBan : function(){
				for(var y = 0;y < 8;y++){
					y === 0 ? $(this).find("ul.Inner").append("<li class=\"firstLi\"></li>") : 
					$(this).find("ul.Inner").append("<li class=\"item\"></li>");
				};
				$(this).find("li.firstLi").html(
					"<img class=\"main-img\">"+
							"<a class=\"firstLiA\">"+
								"<div class=\"info\">"+
									"<div class=\"name\"></div>"+
									"<div class=\"money\">已筹金额&nbsp"+
										"<i class=\"yen\">¥</i><span class=\"moneyNum sum\"></span>"+
									"</div>"+
									"<div class=\"textClick\"><span>查看项目</span><em class=\"icon\"></em></div>"+
								"</div>"+
							"</a>"
					);
				var _data = this._data;
				var $index = $(this).find("li").length;
				$(this).find("li.item").append(
							"<a>"+
								"<div class=\"img\">"+
									"<img  src=\"\">"+
									"<span class=\"name\"></span>"+
								"</div>"+
							"</a>"+
							"<div class=\"tagOut\">"+
							"</div>"+
							"<div class=\"bar\">"+
								"<i class=\"barPub\"></i>"+
							"</div>"+
							"<div class=\"bott\">"+
								"<span class=\"bottPub deal\">"+
									"<em class=\"infoNum rate\"></em>"+
									"<em class=\"infoName\">达成率</em>"+
								"</span><span class=\"bottPub dollar\">"+
									"<em class=\"infoNum sum\"></em>"+
									"<em class=\"infoName\">已筹资金</em>"+
								"</span><span class=\"bottPub supp\">"+
									"<em class=\"infoNum amount\"></em>"+
									"<em class=\"infoName\">支持人数</em>"+
								"</span>"+
							"</div>"
							);
			for(var i = 0;i < $index;i++ ){
				var $_this = $(this).find("li").eq(i);
				if (_data[i].image.indexOf("http") < 0) {
					$_this.find("img").attr("src","https:" + _data[i].image);
				}else{
					$_this.find("img").attr("src",_data[i].image);
				}
				$_this.find(".name").text(_data[i].name);
				$_this.find(".rate").text(_data[i].rate);
				(_data[i].rate) >= 100 ? $_this.find(".barPub").addClass("full") : $_this.find(".barPub").css("width",_data[i].rate*250/100);
				$_this.find(".amount").text(_data[i].amount);
				$_this.find(".sum").text(_data[i].sum);
				var $tagLen = _data[i].label.length;
				for(var j = 0;j < $tagLen;j++){
					$_this.find(".tagOut").append("<span class = \"tag\">"+_data[i].label[j]+"</span>")
				}
			}
		}
	});
	/*$.ajax({
		url: "http://www.ikindness.cn/api/test/getFund",
		success : function(data){
			$(".buyAll").into({
				data:data.data
			});
		}
	});*/
	$(".buyAll").into({
		data:obj.data
	});

})(jQuery);