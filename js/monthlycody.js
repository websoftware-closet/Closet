var vote = [1,0];
var max = 0;
var btn1 = document.getElementById("monthcody1");
var btn2 = document.getElementById("monthcody2");


btn1.addEventListener("click", function (){
  vote[0] += 1;
  alert(vote[0]);
  if(vote[0] > vote[1])
  {
    document.getElementById("img").src = "../image/fall/fall2.jpg";
  }
});

btn2.addEventListener("click", function(){
  vote[1] += 1;
  alert(vote[1]);
  if(vote[0] < vote[1])
  {
    document.getElementById("img").src = "../image/fall/fall1.jpeg";
  }
});

