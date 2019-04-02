var countDownDate = new Date("Sep 1, 2019 00:00:00").getTime();
var startDate = new Date("Apr 1, 2019 00:00:00");


var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var totDistance = countDownDate - startDate;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var progressWidth = (1 - distance / totDistance) * 50 + "vw";
	

  // Display the result in the element with id="demo"
  document.getElementById("countDown").innerHTML = days + " | " + hours + " | " + minutes + " | " + seconds;
	document.getElementById("progress-bar").style.width = progressWidth;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 
// JavaScript Document
