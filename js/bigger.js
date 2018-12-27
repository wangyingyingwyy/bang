
//顶部悬浮
window.onload=function(){
	var cover=document.getElementsByClassName("cover")[0];
	window.onscroll=function(){
		var str=document.documentElement.scrollTop || document.body.scrollTop;
		if(str>170){
			cover.style.position="fixed";
		}else{
			cover.style.position="static";
		}
	}
	//选择净含量
	var contentsOne=document.getElementById("contentsOne");
	var contentsTwo=document.getElementById("contentsTwo");
	var cp1=document.getElementById("cp1");
	var cp2=document.getElementById("cp2");
	contentsOne.onclick=function(){
		cp1.setAttribute("class","cp1");
		cp2.setAttribute("class","null");
		var choice2=document.getElementById("choice");
		choice2.innerHTML='"'+cp1.innerHTML+'"';
	}

	contentsTwo.onclick=function(){
		cp2.setAttribute("class","cp1");
		cp1.setAttribute("class","null");
		var choice3=document.getElementById("choice");
		choice3.innerHTML='"'+cp2.innerHTML+'"';
	}
	// // 蒙罩
	// // 打开弹出框
	// var wai=document.getElementById("wai");
	// var cap=document.getElementById("cap");
	// var fade=document.getElementById("fade");
	// function showDiv(){
	// 	cap.style.display='block';
	// 	fade.style.display='block';
	// }
	// //关闭弹出框
	// function closeDiv()
	// {
	// 	fade.style.display='none';
	// 	cap.style.display='none';
	// }

// 放大镜
	//1.获取元素
		// var box=document.getElementsByClassName("left11")[0];
	var box=document.getElementById("box");
	var img1=document.getElementById("imgss");
	var img2=document.getElementById("imgdd");
	var slider=document.getElementById("slider");
	var Bimg1=document.getElementById("Bimg1");
	var Bimg2=document.getElementById("Bimg2");
	//给左侧小图绑定移入，移出，移动事件
	img1.onmouseover=function(){
		slider.style.display="block";
		img2.style.display="block";
	}
	img1.onmouseout=function(){
		slider.style.display="none";
		img2.style.display="none";
	}
	//鼠标移动事件
	img1.onmousemove=function(ev){
		var ev=ev || window.event;//解决IE浏览器兼容性
		var offset=document.documentElement.scrollTop;
		//根据鼠标的位置，计算放大镜的位置
		var left=ev.clientX-box.offsetLeft-(slider.offsetWidth/2);
		var top=ev.clientY-box.offsetTop-(slider.offsetHeight/2)+offset;
		var maxLeft=img1.offsetWidth-slider.offsetWidth;
		var maxTop=img1.offsetHeight-slider.offsetHeight;
		left=left>maxLeft?maxLeft:left<0?0:left;
		top=top>maxTop?maxTop:top<0?0:top;
		//设置放大镜的位置
		slider.style.left=left+"px";
		slider.style.top=top+"px";
	//根据左侧放大镜位置，，计算右侧大图移动比例
		var w=left/maxLeft;
		var h=top/maxTop;
		//计算大图的最大移动范围			
		var Bimg1Left=img2.offsetWidth-Bimg1.offsetWidth;
		var Bimg1Top=img2.offsetHeight-Bimg1.offsetHeight;
		//计算大图的移动距离，设置位置
		Bimg1.style.left=w*Bimg1Left+"px";
		Bimg1.style.top=h*Bimg1Top+"px";
	}
		

	//数量
	var	dec=document.getElementById("dec");
	var	cnt=document.getElementById("cnt");
	var	add1=document.getElementById("add1");
	dec.onmouseover=function(){
			if(cnt.value==1){
				dec.style.cursor="not-allowed";
			}else{
				dec.style.cursor="pointer";
			}
	}
	add1.onmouseover=function(){
		if(cnt.value==5){
			add1.style.cursor="not-allowed";
		}else{
			add1.style.cursor="pointer";
		}
	}
		dec.onclick=function(){
				if(cnt.value==1){
					dec.style.cursor="not-allowed";
					add1.style.cursor="pointer";
					cnt.value=1;
				}else{
					dec.style.cursor="pointer";
					cnt.value-=1;
				}
		}
		add1.onclick=function(){
				if(cnt.value==5){
					add1.style.cursor="not-allowed";
					dec.style.cursor="pointer";
					cnt.value=5;
				}else {
					add1.style.cursor="pointer";
					cnt.value++;
				}
		}
  }