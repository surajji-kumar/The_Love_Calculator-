function Love(){
  var per = Math.floor( Math.random()*100) 
//   alert(per)

 
  var mainon =document.querySelector("#main");
  var mainof = document.querySelector("#mainmain");
     mainof.style.opacity = 1;
     mainon.style.opacity = 0;
     var p1 = document.querySelector("#name1").value
     var p2 = document.querySelector("#name2").value
     document.querySelector(".p1").innerHTML = p1;
     document.querySelector(".p2").innerHTML = p2;
     document.querySelector("#result").innerHTML = per + "%";
}

function back(){
    
  var mainon =document.querySelector("#main");
  var mainof = document.querySelector("#mainmain");
    mainof.style.opacity = 0;
    mainon.style.opacity = 1;
}