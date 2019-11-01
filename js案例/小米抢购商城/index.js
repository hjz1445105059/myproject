var tabs=document.getElementsById("tabs").getElementsByTagName("li.active");
console.log(tabs);

for(var i=0;i<tabs.length;i++){
	tabs[i].onclick=showlist;
}
function showlist() {
	for(var i=0;i<tabs.length;i++){
		if(tabs[i]===this){
			tabs[i].className="active";
		}
		else{
			tabs[i].className="";
		}
	}
	}
	