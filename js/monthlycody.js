var vote = [0,0,0,0,0,0,0,0,0,0,0,0];
var max = 0;

var btn1 = document.getElementById("monthcody1");
var btn2 = document.getElementById("monthcody2");
var btn3 = document.getElementById("monthcody3");
var btn4 = document.getElementById("monthcody4");
var btn5 = document.getElementById("monthcody5");
var btn6 = document.getElementById("monthcody6");
var btn7 = document.getElementById("monthcody7");
var btn8 = document.getElementById("monthcody8");
var btn9 = document.getElementById("monthcody9");
var btn10 = document.getElementById("monthcody10");
var btn11 = document.getElementById("monthcody11");
var btn12 = document.getElementById("monthcody12");


btn1.addEventListener("click", function (){
  vote[0] += 1;
  alert(vote[0]);
  if(vote[0]>max)
  {
    document.getElementById("monthbest").src = "../image/fall/fall1.jpeg";
  }
  max = Math.max.apply(null,vote);
});

btn2.addEventListener("click", function(){
  vote[1] += 1;
  alert(vote[1]);
  alert(max);
  if(vote[1]>max)
  {
    document.getElementById("monthbest").src = "../image/fall/fall2.jpg";
  }
  max = Math.max.apply(null,vote);
});

btn3.addEventListener("click", function(){
  vote[2] += 1;
  alert(vote[1]);
  for(var i = 0; i<vote.length; i++)
  {
    if(vote[i] > max)
      max = vote[i];
  }
  if(vote[2]>max)
  {
    document.getElementById("monthbest").src = "../image/fall/fall3.jpg";
  }
});

btn4.addEventListener("click", function(){
  vote[3] += 1;
  alert(vote[1]);
  if(vote[3]>max)
  {
    document.getElementById("monthbest").src = "../image/fall/fall4.jpg";
  }
});

btn5.addEventListener("click", function(){
  vote[4] += 1;
  alert(vote[1]);
  if(vote[4]>max)
  {
    document.getElementById("monthbest").src = "../image/fall/fall5.jpg";
  }
});

btn6.addEventListener("click", function(){
  vote[5] += 1;
  alert(vote[1]);
  if(vote[5]>max)
  {
    document.getElementById("monthbest").src = "../image/fall/fall6.jpg";
  }
});

btn7.addEventListener("click", function(){
  vote[6] += 1;
  alert(vote[1]);
  if(vote[6]>max)
  {
    document.getElementById("monthbest").src = "../image/fall/fall7.jpg";
  }
});

btn8.addEventListener("click", function(){
  vote[7] += 1;
  alert(vote[1]);
  if(vote[7]>max)
  {
    document.getElementById("monthbest").src = "../image/fall/fall8.jpg";
  }
});

btn9.addEventListener("click", function(){
  vote[8] += 1;
  alert(vote[1]);
  if(vote[8]>max)
  {
    document.getElementById("monthbest").src = "../image/fall/fall9.jpg";
  }
});

btn10.addEventListener("click", function(){
  vote[9] += 1;
  alert(vote[1]);
  if(vote[9]>max)
  {
    document.getElementById("monthbest").src = "../image/fall/fall10.jpeg";
  }
});

btn11.addEventListener("click", function(){
  vote[10] += 1;
  alert(vote[1]);
  if(vote[10]>max)
  {
    document.getElementById("monthbest").src = "../image/fall/fall11.jpeg";
  }
});

btn12.addEventListener("click", function(){
  vote[11] += 1;
  alert(vote[1]);
  if(vote[11]>max)
  {
    document.getElementById("monthbest").src = "../image/fall/fall12.jpeg";
  }
});