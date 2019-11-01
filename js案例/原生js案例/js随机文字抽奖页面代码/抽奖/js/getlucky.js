var data=['ipad mini','iphone 6','iphone 6s玫瑰金','kindle','ipad air'],
	timer=null
	flag=0;
function getByClass(clsName,parent){
	var oParent=parent?document.getElementById(parent):document,
		eles=[],
		elements=oParent.getElementsByTagName('*');

	for(var i=0;i<elements.length;i++){
		if(elements[i].className == clsName){
			eles.push(elements[i]);
		}
	}
	return eles;
}
window.onload=function(){
	var oTitle=getByClass('title')[0],
		begin=getByClass('begin')[0],
		stop=getByClass('stop')[0];
	begin.onclick=fnplay;
	stop.onclick=fnstop;
	document.onkeyup=fnkey;
	function fnplay(){
		clearInterval(timer);
		timer=setInterval(function(){
			var random=Math.floor(Math.random()*data.length);
			oTitle.innerHTML=data[random];
		},50);
;
	}

	function fnstop(){
		clearInterval(timer);
	}

	function fnkey(event){
		console.log(event.keyCode);
		event=event ||window.event;
		if(event.keyCode == 13){
			if(flag == 0){
				fnplay();
				flag =1;
			}else{
				fnstop();
				flag=0;
			}
		}
	}
}




