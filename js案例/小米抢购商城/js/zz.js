var tabs=document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists=document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
for(var i = 0;i< tabs.length;i++){
	tabs[i].onclick = showlist;
}


var scrollTop =document.documentElement.scrollTop;
console.log(scrollTop);



function showlist() {
	for(var i = 0;i<tabs.length;i++){
		if(tabs[i]===this)
		{
			tabs[i].className="active";
			lists[i].className=" clear active";
		}
		else{
			tabs[i].className="";
			lists[i].className="clear";
		}
	}
	}
	var seckillNav = document.getElementById("seckillNav");

	window.onscroll= function(){
		var scrollTop=document.documentElement.scrollTop ||window.pageYOffset ||document.body.scrollTop||0 ;

		if(scrollTop>=260&&scrollTop<=874){
			seckillNav.className="seckill-nav seckill-fixed";

		}
		else
		{
			seckillNav.className="seckill-nav";
		}
		console.log(scrollTop);
	}
