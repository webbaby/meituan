/**
 * Created by liuwei on 2017/6/7.
 */
$(function(){
//实现搜索框功能
   $(".search_box_tabs_sec>li").bind('click',function(){
      $(this).siblings().css("display","none");
       $(".search_box_tabs_sec").css("height","36px");
      if($(this).text()=="商家"){
          $(".search_content").val("请输入商家名称、地址等");
      }else{
          $(".search_content").val("请输入商品名称、地址等");
      }
      
   });


    //结束


});

//实现导航菜单
window.onload=function(){

    var list1=document.getElementsByClassName("nav_level1");
    var list2=document.getElementsByClassName("nav_level2");

    for(var i=0;i<list1.length;i++){

        list1[i].id=i;
        list2[i].id=i;
        list1[i].onmouseover=function(){
            for(var j=0;j<list1.length;j++){
                list2[j].style.display="none";
                this.style.background="#fff";
                this.style.borderRight="none";
                this.parentNode.style.borderRight= "none";
                list2[this.id].style.display="block";
            }
        };
        list1[i].onmouseout=function(){
            for(var j=0;j<list1.length;j++){
                list2[j].style.display="none";
                this.style.background="#fafafa";
                this.style.borderRight="1px solid #eee";
                this.parentNode.style.borderRight= "1px solid #eee";

            }
        };
        list2[i].onmouseover=function(){
            this.style.display="block";
            list1[this.id].style.background="#fff";
            list1[this.id].style.borderRight="none";
            this.parentNode.style.borderRight= "none";
        };
        list2[i].onmouseout=function(){
            this.style.display="none";
            list1[this.id].style.background="#fafafa";
            list1[this.id].style.borderRight="1px solid #eee";
            this.parentNode.style.borderRight= "1px solid #eee";
        }

    }
    //结束导航菜单
    
    //轮播图
    var oDiv=document.getElementById("slide");
    var oUl=oDiv.getElementsByTagName("ul")[0];
    var oLi=oUl.getElementsByTagName("li");
    var pageNum=document.getElementsByClassName("page")[0];
    
    var prev=document.getElementsByClassName("prev")[0];
    var next=document.getElementsByClassName("next")[0];
    oUl.style.width=oLi[0].offsetWidth*oLi.length+'px';
    var timer=null;
    var a=-689;
//定时器
    timer=setInterval(function() {


        oUl.style.left = oUl.offsetLeft+a+ 'px';

        pageNum.innerHTML=-oUl.offsetLeft/oDiv.offsetWidth+1;
        if(oUl.offsetLeft<(-3445)){

            oUl.style.left=0;
            pageNum.innerHTML='1';
        }
        if(oUl.offsetLeft>0){
            oUl.style.left=oUl.offsetWidth+'px';
        }
    },3000);
    //鼠标放上，图片停留，按钮出现
    oDiv.onmouseover=function(){
        clearInterval(timer);
        prev.style.opacity=0.6;
        next.style.opacity=0.6;
    };
    oDiv.onmouseout=function(){
        prev.style.opacity=0;
        next.style.opacity=0;
        timer=setInterval(function() {


            oUl.style.left = oUl.offsetLeft+a+ 'px';

            pageNum.innerHTML=-oUl.offsetLeft/oDiv.offsetWidth+1;
            if(oUl.offsetLeft<(-3445)){

                oUl.style.left=0;
                pageNum.innerHTML='1';
            }
            if(oUl.offsetLeft>0){
                oUl.style.left=oUl.offsetWidth+'px';
            }
        },3000);
    };
    //点击页面按钮
    prev.onclick=function(){

            var a=-689;
            oUl.style.left = oUl.offsetLeft+a+ 'px';

            pageNum.innerHTML=-oUl.offsetLeft/oDiv.offsetWidth+1;
            if(oUl.offsetLeft<(-3445)){

                oUl.style.left=0;
                pageNum.innerHTML='1';
            }
            if(oUl.offsetLeft>0){
                oUl.style.left=oUl.offsetWidth+'px';
            }

    };
    next.onclick=function(){
        var a=689;
        oUl.style.left = oUl.offsetLeft+a+ 'px';

        pageNum.innerHTML=(-oUl.offsetLeft/oDiv.offsetWidth)+1;
        if(oUl.offsetLeft<(-3445)){

            oUl.style.left=0;
            pageNum.innerHTML='1';
        }
        if(oUl.offsetLeft>0){
            oUl.style.left=(-oUl.offsetWidth+689)+'px';
            pageNum.innerHTML='6';
        }
    };
    //结束轮播图
};