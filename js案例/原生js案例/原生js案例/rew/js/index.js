var shell=document.getElementById("tk");shell.innerHTML='<div qin="mytk" class="qin39" id="shell_1" style="margin:0 0 0 0;width: 20px;height: 20px;"><img id="mytk" src="image/you.png" /></div>';var w=shell.offsetWidth;h=shell.offsetHeight;var jfkg=1;var shelltk=setInterval(function(){var sj=document.getElementById("sj");var dqsj=sj.getAttribute("qint");dqsj=parseInt(dqsj);if(dqsj<40){dqsj++;sj.setAttribute("qint",dqsj);var allob=document.getElementsByTagName("div");var dfsl=0;var gy=0;for(qinki=0;qinki<allob.length;qinki++){if(allob[qinki].getAttribute("qin")=="dftk"){dfsl++}}if(dfsl<6){gy=6-dfsl}for(k=0;k<gy;k++){rantanke()}}else{jfkg=0;clearInterval(shelltk);alert("时间到！")}},3000);function keyDown(e){var keycode=e.which;remove(keycode,5);if(keycode=="32"){zidan()}}document.onkeydown=keyDown;function remove(code,su){var shell_1=document.getElementById("shell_1");if(code=="37"||code=="38"||code=="39"||code=="40"){shell_1.className="qin"+code}var shell_1=document.getElementById("shell_1");var img=document.getElementById("mytk");var l;if(code=="37"){img.src="image/zhuo.png";l=shell_1.style.marginLeft;l=parseInt(l);if(l>0){shell_1.style.marginLeft=(l-su)+"px"}}if(code=="38"){img.src="image/shang.png";l=shell_1.style.marginTop;l=parseInt(l);if(l>0){shell_1.style.marginTop=(l-su)+"px"}}if(code=="39"){img.src="image/you.png";l=shell_1.style.marginLeft;l=parseInt(l);if(l<(w-12)){shell_1.style.marginLeft=(l+su)+"px"}}if(code=="40"){img.src="image/xia.png";l=shell_1.style.marginTop;l=parseInt(l);if(l<(h-12)){shell_1.style.marginTop=(l+su)+"px"}}}function zidan(){var che=document.getElementById("shell_1");var l=che.style.marginLeft;var t=che.style.marginTop;var html=shell.innerHTML;l=(parseInt(l)+9)+"px";t=(parseInt(t)+9)+"px";var myDate=new Date();var myid=myDate.getTime();shell.innerHTML=html+'<div class="zidan" id="'+myid+'" style="position:absolute;z-index: 2;margin:'+t+" 0 0 "+l+';width: 2px;height: 2px;background: red;"></div>';var fx=che.className;var set=setInterval(function(){var zd=document.getElementById(myid);if(fx=="qin39"){var ls=zd.style.marginLeft;ls=parseInt(ls);if(ls<w){zd.style.marginLeft=(ls+1)+"px"}else{rezidan(myid);clearInterval(set)}}if(fx=="qin37"){var ls=zd.style.marginLeft;ls=parseInt(ls);if(ls>0){zd.style.marginLeft=(ls-1)+"px"}else{rezidan(myid);clearInterval(set)}}if(fx=="qin38"){var ls=zd.style.marginTop;ls=parseInt(ls);if(ls>0){zd.style.marginTop=(ls-1)+"px"}else{rezidan(myid);clearInterval(set)}}if(fx=="qin40"){var ls=zd.style.marginTop;ls=parseInt(ls);if(ls<h){zd.style.marginTop=(ls+1)+"px"}else{rezidan(myid);clearInterval(set)}}},10)}function rezidan(id){var child=document.getElementById(id);if(child){shell.removeChild(child)}}function ran(){var kwc=Math.ceil(Math.random()*10);var kwv;if(kwc%4==0){kwv=1}if(kwc%4==1){kwv=2}if(kwc%4==2){kwv=3}if(kwc%4==3){kwv=4}return kwv}function rantanke(){var html=shell.innerHTML;var t=Math.random()*1000;var l=Math.random()*1000;if(t>h){t=(t-h)+"px"}else{t=t+"px"}if(l>w){l=(l-w)+"px"}else{l=l+"px"}var myDate=new Date();var myid=myDate.getTime();shell.innerHTML=html+'<div qin="dftk" id="'+myid+'" style="position:absolute;z-index: 0;margin:'+t+" 0 0 "+l+';width: 20px;height: 20px;"><img id="dtki'+myid+'" src="" /></div>';var setz=setInterval(function(){var ztk=document.getElementById(myid);dt=ztk.style.marginTop;dl=ztk.style.marginLeft;dt=parseInt(dt);dl=parseInt(dl);var zidanob=document.getElementsByClassName("zidan");if(zidanob.length!=0){for(i=0;i<zidanob.length;i++){var zt=zidanob[i].style.marginTop;var zl=zidanob[i].style.marginLeft;zt=parseInt(zt);zl=parseInt(zl);if(zt>dt&&zt<(dt+20)&&zl>dl&&zl<(dl+20)){zidanob[i].style.display="none";zidanob[i].className="";rezidan(myid);clearInterval(setz);fensu()}}}var clasz=ztk.className;var oArr=clasz.split(" ");var fwz;if(clasz){if(oArr[0]=="qinr"){if(parseInt(oArr[1])<50){var lz=ztk.style.marginLeft;lz=parseInt(lz);if(lz<w){ztk.style.marginLeft=(lz+2)+"px"}else{fwz=ran()}var clsaa=parseInt(oArr[1])+1;ztk.className="qinr "+clsaa}else{fwz=ran()}}if(oArr[0]=="qinl"){if(parseInt(oArr[1])<50){var lz=ztk.style.marginLeft;lz=parseInt(lz);if(lz>0){ztk.style.marginLeft=(lz-2)+"px"}else{fwz=ran()}var clsaa=parseInt(oArr[1])+1;ztk.className="qinl "+clsaa}else{fwz=ran()}}if(oArr[0]=="qint"){if(parseInt(oArr[1])<50){var lz=ztk.style.marginTop;lz=parseInt(lz);if(lz>0){ztk.style.marginTop=(lz-2)+"px"}else{fwz=ran()}var clsaa=parseInt(oArr[1])+1;ztk.className="qint "+clsaa}else{fwz=ran()}}if(oArr[0]=="qinf"){if(parseInt(oArr[1])<50){var lz=ztk.style.marginTop;lz=parseInt(lz);if(lz<h){ztk.style.marginTop=(lz+2)+"px"}else{fwz=ran()}var clsaa=parseInt(oArr[1])+1;ztk.className="qinf "+clsaa}else{fwz=ran()}}}else{fwz=ran()}if(fwz==2){var dftki=document.getElementById("dtki"+myid);dftki.src="image/dyou.png";var lz=ztk.style.marginLeft;lz=parseInt(lz);ztk.style.marginLeft=(lz+2)+"px";ztk.className="qinr 1"}if(fwz==3){var dftki=document.getElementById("dtki"+myid);dftki.src="image/dzhuo.png";var lz=ztk.style.marginLeft;lz=parseInt(lz);ztk.style.marginLeft=(lz-2)+"px";ztk.className="qinl 1"}if(fwz==1){var dftki=document.getElementById("dtki"+myid);dftki.src="image/dshang.png";var lz=ztk.style.marginTop;lz=parseInt(lz);ztk.style.marginTop=(lz-2)+"px";ztk.className="qint 1"}if(fwz==4){var dftki=document.getElementById("dtki"+myid);dftki.src="image/dxia.png";var lz=ztk.style.marginTop;lz=parseInt(lz);ztk.style.marginTop=(lz+2)+"px";ztk.className="qinf 1"}},50)}function fensu(){if(jfkg){var ob=document.getElementById("fs");var s=ob.innerText;s=parseInt(s);s=s+1;ob.innerText=s}};
