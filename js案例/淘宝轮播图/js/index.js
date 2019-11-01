/* 
//1.获取元素
var flash =document.querySelector(".flash");     //javascript 
var is  =document.querySelectorAll("img");
var ls =document.querySelectorAll(".flash li");
2.创建索引
var index =0;
 3.设置定时器
setInterval(function(){
   index++;
   if(index == 5){   //4.如果到最后一张，回到第一张
      index=0;  
    }
      for(var i=0;i<is.length;i++){
       is[i].style.display="none";//不显示图片
       ls[i].style.background="#DDDDDD";  //5.两个for循环，
   }
   is[index].style.display="block";//
   ls[index].style.background="#A10000";
   
},3000)




var flash =document.querySelector(".flash");     //javascript 
var imgs  =document.querySelectorAll("img");
var icons =document.querySelectorAll(".flash li");
//设置循环变量
var index=0;

//设置定时器
var timer =setInterval(run,3000)
//循环函数
function run(){
  if(index>=5){
    index=0;
  }
  //控制图片
  controlimg(index)
  //控制图标
  controlicon(index)
  
  index++;
}


//控制图片
function controlimg(index){
  for(var i=0;i<imgs.length;i++){
    imgs[i].style.display="none";//不显示当前图片
  }
  //显示图片
  imgs[index].style.display="block";
}


  //控制图标
function controlicon(index){
  for(var i=0;i<icons.length;i++){
    icons[i].style.background="#DDDDDD";
  }
  //当前的图标变红
  icons[index].style.background="#A10000";
}


//鼠标进入图片时，停止悬停
flash.onmouseover=function(){
  clearInterval(timer);
}
//鼠标离开时，继续轮播
flash.onmouseout=function(){
  timer =setInterval(run,3000);
}


//指定图标,随着图标走
for(var j=0;j<icons.length;j++){
  (function(j){
   icons[j].onmouseover=function(){
     controlimg(j);
     controlicon(j);
     index=j+1;
   }
  })(j)
}
 */




/* 
var index = 0; //jq写法
var timer = setInterval(function() {
    index++;
    index = index == 5 ? 0 : index;
    $(".flash img").eq(index).fadeIn(300).siblings('img').fadeOut(300);
    $(".flash ul li").eq(index).css('background', '#a10000').siblings('li').css('background', '#DDDDDD');
}, 1000)

//悬停
$(".flash").hover(function() {
    clearInterval(timer); //当移动鼠标时，悬停，停止定时器，
}, function() {
    timer = setInterval(function() { //移出鼠标时，回到上面定时器
        index++;
        index = index == 5 ? 0 : index;
        $(".flash img").eq(index).fadeIn(300).siblings('img').fadeOut(300);
        $(".flash ul li").eq(index).css('background', '#a10000').siblings('li').css('background', '#DDDDDD');
    }, 1000)
})
 */

var index = 0;
var timer = setInterval(run, 2000)

function run() {
    index++;
    index = index == 5 ? 0 : index;
    $(".flash img").eq(index).fadeIn(300).siblings('img').fadeOut(300); //让index图显示，其他兄弟图片隐藏
    $(".flash ul li").eq(index).css('background', '#a10000').siblings('li').css('background', '#DDDDDD'); //让index中li变红，其他li变灰
}

$(".flash").hover(function() {
    clearInterval(timer); //当移动鼠标时，悬停，停止定时器，
}, function() {
    timer = setInterval(run, 2000);
})

//鼠标移入鼠标时小圆点
$(".flash ul li").mouseenter(function() {
    index = $(this).index();
    $(".flash img").eq(index).fadeIn(300).siblings('img').fadeOut(300); //让index图显示，其他兄弟图片隐藏
    $(".flash ul li").eq(index).css('background', '#a10000').siblings('li').css('background', '#DDDDDD'); //让index中li变红，其他li变灰
})