setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var semi=document.querySelectorAll(".sem");
  for(var i=0;i<semi.length;i++){
    semi[i].classList.add("hide");
  }
  var h1 = document.querySelectorAll(".ten1");
  var h2=  document.querySelectorAll(".one1");
  var m1 = document.querySelectorAll(".ten2");
  var m2 =  document.querySelectorAll(".one2");
  var s1 = document.querySelectorAll(".ten3");
  var s2=  document.querySelectorAll(".one3");
  for(var i=0;i<h1.length;i++){
    h1[i].classList.remove("hide");
    h2[i].classList.remove("hide");
    m1[i].classList.remove("hide");
    m2[i].classList.remove("hide");
    s1[i].classList.remove("hide");
    s2[i].classList.remove("hide");
  }
  var ten1 = Math.floor(hours / 10);
  var one1=Math.floor(hours%10);
  var ten2 = Math.floor(minutes / 10);
  var one2=Math.floor(minutes%10);
  var ten3 = Math.floor(seconds / 10);
  var one3=Math.floor(seconds%10);
  digit(ten1,h1);
  digit(one1,h2);
  digit(ten2,m1);
  digit(one2,m2);
  digit(ten3,s1);
  digit(one3,s2);
  setInterval(function(){
    var semi=document.querySelectorAll(".sem");
    for(var i=0;i<semi.length;i++){
      semi[i].classList.remove("hide");
    }
  });
}, 1000);
function digit(ten,h1){
if (ten === 0) {
  h1[3].classList.add("hide");
} else if (ten === 1) {
  for (var i = 0; i < 5; i++) {
    h1[i].classList.add("hide");
  }
} else if (ten === 2) {
  h1[0].classList.add("hide");
  h1[6].classList.add("hide");
} else if (ten === 3) {
  h1[0].classList.add("hide");
  h1[1].classList.add("hide");
} else if (ten === 4) {
  h1[1].classList.add("hide");
  h1[2].classList.add("hide");
  h1[4].classList.add("hide");
} else if (ten === 5) {
  h1[1].classList.add("hide");
  h1[5].classList.add("hide");
} else if (ten === 6) {
  h1[5].classList.add("hide");
} else if (ten === 7) {
  for (var i = 0; i < 5; i++) {
    h1[i].classList.add("hide");
  }
  h1[2].classList.remove("hide");
} else if (ten === 8) {
  for(var i=0;i<h1.lenght;i++){
    h1[i].classList.remove("hide");
  }
} else if (ten === 9) {
  h1[1].classList.add("hide");
}
}