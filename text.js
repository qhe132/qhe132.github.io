var up = document.querySelector(".up");
var down = document.querySelector(".down");
var text = document.getElementById("text");
var number = document.getElementById("number");
//var number2 = document.getElementById("number2");
var test1 = document.querySelector(".test1");
var test2 = document.querySelector(".test2");
var test3 = document.querySelector(".test3");
var test4 = document.querySelector(".test4");
var test5 = document.querySelector(".test5");
var model = document.querySelector(".model");
var other = document.querySelector(".other");
var text4 = document.querySelector(".text4");
//var text0 = document.querySelector(".text0");
var text = document.querySelector(".text");
var timing = document.querySelector(".timing");
var screen3 = document.querySelector(".screen3");
var button1 = document.querySelector(".button1");
var tem = document.querySelector(".temperature");
var num = 26;
var num1 = 0;
var k = 1;
var flag = 1;
var flag2 = 1;
number.innerHTML = num;
//number2.innerHTML = num1;
//text0.style.display = "none"
screen3.style.display = "none";
test4.innerHTML = "";
    test2.innerHTML = "";
    test3.innerHTML = "";
    test5.innerHTML = "";
up.addEventListener("click",function(){
    num += 1;
    number.innerHTML = num;
})

down.addEventListener("click",function(){
    num -= 1;
    number.innerHTML = num;
})
model.addEventListener("click",function(){
	if(k==6)
		k = 1;
    if(k==1)
    {
    test1.innerHTML = "";
    test2.innerHTML = "制冷";
    test3.innerHTML = "";
    test4.innerHTML = "";
    test5.innerHTML = "";
    }
    else if(k==2)
    {
    test1.innerHTML = "";
    test2.innerHTML = "";
    test3.innerHTML = "抽湿";
    test4.innerHTML = "";
    test5.innerHTML = "";
    }
    else if(k==3)
    {
    test1.innerHTML = "";
    test2.innerHTML = "";
    test3.innerHTML = "";
    test4.innerHTML = "制热";
    test5.innerHTML = "";
    }
    else if(k==4)
    {
    test1.innerHTML = "";
    test2.innerHTML = "";
    test3.innerHTML = "";
    test4.innerHTML = "";
    test5.innerHTML = "送风";
    }
    else if(k==5)
    {
    test1.innerHTML = "自动";
    test2.innerHTML = "";
    test3.innerHTML = "";
    test4.innerHTML = "";
    test5.innerHTML = "";
    }
    k++;
})
button1.addEventListener("click",function(){
       if(flag==1)
       {
          screen3.style.display = "inline"
          flag = 0;
       }
       else
       {
       	screen3.style.display = "none"
          flag = 1;
       }
	})

other.addEventListener("click",function(){
        if(flag2==1)
       {
          text4.style.display = "none"
          flag2 = 0;
       }
       else
       {
       	text4.style.display = "block"
          flag2 = 1;
       }
})

function hello(){
      number.innerHTML = num;
      tem.innerHTML = "℃";
}

timing.addEventListener("click",function(){
	  num1 = num1 + 0.5;
	  if(num1>24)
	  	num1 = 0;
	  //text.style.display = "none";
      //text0.style.display = "inline-block";
      //number2.innerHTML = num1;
      
      number.innerHTML = num1;
      tem.innerHTML = "h";
      setTimeout(hello,5000); 
})