var home=document.querySelector(".home");

setInterval(() => {
  var number=Math.floor(Math.random() * (10 - 1 + 1) + 1);
  home.style.backgroundImage=`url(../public/img/h${number}.jpg)`
  console.log(number)
}, 2000);