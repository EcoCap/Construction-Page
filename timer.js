var countDownDate = new Date("Sep 1, 2019 00:00:00").getTime();
var startDate = new Date("Apr 1, 2019 00:00:00");


var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var totDistance = countDownDate - startDate;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  /*var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);*/
  var Progress = 0.8;//(1 - distance / totDistance);
	

  // Display the result in the element with id="demo"
  document.getElementById("countDown").innerHTML = days + " days";
  var i = 0.01;
  while (i <= 1) {
	  document.getElementById("progress").value = ease(i) * Progress;
	  setTimeout(i += 0.01, 10);
  }

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 

function ease(t) {
	return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 
}

// JavaScript Document
