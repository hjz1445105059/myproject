//滚轮各浏览器兼容===========================
function myWheel(obj,callback){
    if(window.navigator.userAgent.toLowerCase().indexOf('chrome') !== -1){
        obj.addEventListener("mousewheel",move);
    }else{
        obj.addEventListener("DOMMouseScroll",move);
    }
    function move(e){
        var W = 0;
        if(e.wheelDelta){
            W = e.wheelDelta > 0 ? true : false;
        }else{
            W = e.detail > 0 ? false : true;
        }

          alert(1)
        if(e.preventDefault){
            alert(1)
        }else{
            alert(2)
        }
        if(callback && typeof callback === "function"){
            callback(W);
        }

        //e.preventDefault();
    }
}
/* 当css的参数个数小于3，获取否则 设置 */
function css(element, attr , val){
    if(attr=='scale'|| attr=='rotate'|| attr=='rotateX'|| attr=='rotateY'|| attr=='rotateZ'|| attr=='scaleX'|| attr=='scaleY'|| attr=='translateY'|| attr=='translateX'|| attr=='translateZ' || attr=='skewX' || attr=='skewY'||attr=='skewZ'){
        return setTransform(element, attr , val);
    }
    if(arguments.length == 2){
        var val = element.currentStyle?element.currentStyle[attr]:getComputedStyle(element)[attr];
        if(attr=='opacity'){
            val = Math.round(val*100);
        }
        return parseFloat(val);
    } else {
        switch(attr){
            case 'width':
            case 'height':
            case 'paddingLeft':
            case 'paddingTop':
            case 'paddingRight':
            case 'paddingBottom':
            case 'borderWidth':
            case 'borderLeftWidth':
            case 'borderRightWidth':
            case 'borderTopWidth':
            case 'borderBottomWidth':
                val = val < 0 ? 0 : val;
            case 'left':
            case 'top':
            case 'marginLeft':
            case 'marginTop':
            case 'marginRight':
            case 'marginBottom':
                element.style[attr] = val +"px";
                break;
            case 'opacity':
                element.style.filter= "alpha(opacity:"+val+")";
                element.style.opacity= val/100;
                break;  
            default:
                element.style[attr]=val;    
        }
    }
}
function setTransform(element,attr,val){
    if(!element["transform"]){
        element["transform"] = {};
    }
    if(typeof val == "undefined"){
        val = element["transform"][attr];
        if(typeof val == "undefined"){
            if(attr == "scale"||attr == "scaleX"||attr == "scaleY"){
                element["transform"][attr] = 100;
            } else {
                element["transform"][attr] = 0;
            }
        }
        return parseFloat(element["transform"][attr]);
    } else {
        var str = "";
        element["transform"][attr] = val;
        for(var s in element["transform"])   {
            switch(s){
                case 'skewX':
                case 'skewY':
                case 'skewZ':
                case 'rotate':
                case 'rotateX':
                case 'rotateY':
                case 'rotateZ':
                    str += s+"("+element["transform"][s]+"deg) ";
                    break;
                case 'translateX':
                case 'translateY':
                case 'translateZ':  
                    str += s+"("+element["transform"][s]+"px) ";
                    break;
                default:
                    str += s+"("+element["transform"][s]/100+") ";
            }
        }
        element.style.MozTransform = element.style.msTransform  = element.style.WebkitTransform = element.style.transform = str;
    }
}
//碰撞检测====================================
function Drag(json){
    var settings = {
        id:json.id,
        id2:json.id2,
        fnDuang:json.fnDuang,
        fnNoDuang:json.fnNoDuang
    }
    
    var obj = document.getElementById(settings.id);
    var obj2 = document.getElementById(settings.id2);
    obj.addEventListener('mousedown',fnDown);
    function fnDown(ev){
        var disX = ev.pageX - obj.offsetLeft;
        var disY = ev.pageY - obj.offsetTop;
        
        document.addEventListener('mousemove',fnMove);
        document.addEventListener('mouseup',fnUp);
        
        function fnMove(ev){
            obj.style.left = ev.pageX - disX + 'px';
            obj.style.top = ev.pageY - disY + 'px';
            
            //如果传入一个obj2 并且 obj2要是个元素 并且 碰到了
            if(obj2 && obj2.nodeType === 1 && duang(obj,obj2)){
                //fnDuang是不是一个函数
                if(settings.fnDuang && typeof settings.fnDuang === 'function'){
                    settings.fnDuang(obj,obj2);
                }
            }else{
                //要传入一个fnNoDuang为真 并且 fnNoDuang为函数
                if(settings.fnNoDuang && typeof settings.fnNoDuang === 'function'){
                    settings.fnNoDuang(obj,obj2);
                }
            }
            
        }
        function fnUp(){
            document.removeEventListener('mousemove',fnMove);
            document.removeEventListener('mouseup',fnUp);
        }               
        ev.preventDefault();//阻止默认行为
    }
}

function duang(obj1,obj2){
    var l1 = obj1.offsetLeft;
    var t1 = obj1.offsetTop;
    var b1 = t1 + obj1.offsetHeight;
    var r1 = l1 + obj1.offsetWidth;
    
    var l2 = obj2.offsetLeft;
    var t2 = obj2.offsetTop;
    var b2 = t2 + obj2.offsetHeight;
    var r2 = l2 + obj2.offsetWidth;
    
    if(r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2){
        //没碰到
        return false;
    }else{
        //碰到了
        return true;
    }
}