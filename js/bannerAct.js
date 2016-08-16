        (function startFun(){
            //解决IE不兼容getElementsByClassName问题  
            function getElementsByClassName(className,root,tagName) {    //root：父节点，tagName：该节点的标签名。 这两个参数均可有可无  
                if(root){  
                    root=typeof root=="string" ? document.getElementById(root) : root;     
                }else{  
                    root=document.body;  
                }  
                tagName=tagName||"*";                                      
                if (document.getElementsByClassName) {                    //如果浏览器支持getElementsByClassName，就直接的用  
                    return root.getElementsByClassName(className);  
                }else {   
                    var tag= root.getElementsByTagName(tagName);    //获取指定元素  
                    var tagAll = [];                                    //用于存储符合条件的元素  
                    for (var i = 0; i < tag.length; i++) {                //遍历获得的元素  
                        for(var j=0,n=tag[i].className.split(' ');j<n.length;j++){    //遍历此元素中所有class的值，如果包含指定的类名，就赋值给tagnameAll  
                            if(n[j]==className){  
                                tagAll.push(tag[i]);  
                                break;  
                            }  
                        }  
                    }  
                    return tagAll;  
                }  
            }  
         function start1(){
            var container = getElementsByClassName('container',document,"div")[0];
            var list = getElementsByClassName('list',container,"div")[0];
            var buttons = getElementsByClassName('buttons',container,"div")[0].getElementsByTagName('span');
            var prev = getElementsByClassName('prev',container,"a")[0];
            var next = getElementsByClassName('next',container,"a")[0];
            var index = 1;
            var len = buttons.length;
            var animated = false;
            var interval = 3000;
            var timer;


            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(list.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-200){
                            list.style.left = -540 * len + 'px';
                        }
                        if(left<(-540 * len)) {
                            list.style.left = '-540px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                var indexMin = index - 1;
                buttons[indexMin].className = 'on';
            }

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
            	if (animated) {
            		return;
            	}
                if (index == len) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-540);
                showButton();
            }
            prev.onclick = function () {
            	if (animated) {
            		return;
            	}
                if (index == 1) {
                    index = len;
                }
                else {
                    index -= 1;
                }
                animate(540);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -540 * (myIndex - index);
                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }
            container.onmouseover = stop;
            container.onmouseout = play;
            play();
        };
        start1();
    })();