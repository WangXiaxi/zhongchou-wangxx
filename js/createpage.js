$.fn.extend({
	createPage1 : function(){
            var i,j,len = imgslide.length,index,inAlt;
            for(i = 0;i < len + 2;i++){
            	index = i-1;
            	inAlt = i-1;
            	if(i == 0){
            		index = len - 1; 
            		inAlt = 1;
            	}
            	if(i == (len+1)){
            		index = 0; 
            		inAlt = len;
            	}
                $(".container .list").css("width",540*(len+2) + "px").append("<img src=\"" + imgslide[index].imgSrc + "\" alt= \"" +inAlt+ "\" />");    
            }
            for(j = 1;j <=len;j++){
            	$(".container .buttons").append("<span index = \""+ j +"\"></span>");
            }
            $(".container .buttons span:first-child").addClass("on");
    },
    createPage2 : function(){
    	for(var i = 0;i <threeMIDa.length;i++){
        	$(".threeMainInner").append(
        		"<a>"+
    				"<img src=\""+ threeMIDa[i].img +"\">"+
    				"<div class=\"textInner\">"+
    					"<div class=\"item-title\">1"+threeMIDa[i].title+"</div>"+
    					"<div class=\"des\">"+ threeMIDa[i].des +"</div>"+
    					"<div class=\"textPer\">达成率</div>"+
    					"<div class=\"per\"><span class=\"divPer\">"+ threeMIDa[i].divPer +"</span>%</div>"+
    				"</div>"+
    			"</a>"
    		);
        }
    },
    createPage3 : function(){
        for(var i = 0;i <Bfloor.length;i++){
            $(".buyAll").append(
                "<div class=\"Big "+Bfloor[i].bigTit+"\">"+
                   "<div class=\"floorOne\">"+
                        "<a>"+
                            "<span class=\"num\">" +Bfloor[i].name+ "</span><span class=\"name\">"+ Bfloor[i].des +"</span><em class=\"icon\"></em>"+
                        "</a>"+
                    "</div>"+
                    "<ul class=\"Inner clearfloat\">"+
                    "</ul>"+
                "</div>"
            );
        }
    }
});

 $(".buyAll").createPage3();
$(".container").createPage1();
$(".threeMainInner").createPage2();
