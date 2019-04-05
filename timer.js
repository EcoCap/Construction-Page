var countDownDate = new Date("Sep 1, 2019 00:00:00").getTime();
var startDate = new Date("Mar 28, 2019 00:00:00");


setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var totDistance = countDownDate - startDate;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var Progress = 1 - (distance / totDistance);
	
  document.getElementById("progress-bar").style = "width: " + (Progress * 50) + "vw";
  document.getElementById("progress-bar").innerHTML = Math.round(100 * Progress) + "%";
  document.getElementById("countDown").innerHTML = days + " days remaining";
}, 1000); 
