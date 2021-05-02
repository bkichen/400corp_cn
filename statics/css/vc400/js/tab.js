
//地区 必备知识 js 滑动

function doClick(o){
	 o.className="nav_current";
	 var j;
	 var id;
	 var e;
	 for(var i=1;i<=12;i++){ //这里3 需要你修改 你多少条分类 就是多少
	   id ="nav"+i;	   
	   j = document.getElementById(id);
	   e = document.getElementById("sub"+i);
	   if(id != o.id){
	   	 j.className="nav_link";
	   	 e.style.display = "none";
	   }else{
			e.style.display = "block";
	   }
	 }
	 }
	 
//地区 资费套餐 js 滑动

function doClick_1(o){
	 o.className="nav_current";
	 var j;
	 var id;
	 var e;
	 for(var i=1;i<=12;i++){ //这里3 需要你修改 你多少条分类 就是多少
	   id ="nav_1_"+i;	   
	   j = document.getElementById(id);
	   e = document.getElementById("sub_1_"+i);
	   if(id != o.id){
	   	 j.className="nav_link";
	   	 e.style.display = "none";
	   }else{
			e.style.display = "block";
	   }
	 }
	 }
	 
	 //资费套餐滑动  sub_zifei

function doClick_A(o){
	 o.className="nav_current";
	 var j;
	 var id;
	 var e;
	 for(var i=1;i<=8;i++){ //这里3 需要你修改 你多少条分类 就是多少
	   id ="navA"+i;	   
	   j = document.getElementById(id);
	   e = document.getElementById("subA"+i);
	   if(id != o.id){
	   	 j.className="nav_link";
	   	 e.style.display = "none";
	   }else{
			e.style.display = "block";
	   }
	 }
	 }

//百度跳转

//onclick  点击链接

function callkefu(){
    openZoosUrl('chatwin');
}
