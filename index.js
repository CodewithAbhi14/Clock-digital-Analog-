setInterval(() => {
    let d = new Date();
    let seconds;
    let hours;
    let minutes;
    let day;
    let m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let mon = m[d.getMonth()];

    if( d.getSeconds() < 10 && d.getSeconds()>=0)
{
   seconds = "0"+ d.getSeconds(); 
}
else{
    seconds = d.getSeconds();
}

if( d.getMinutes() < 10 && d.getMinutes()>=0)
{
   minutes = "0"+ d.getMinutes(); 
}
else{
    minutes = d.getMinutes();
}

if( d.getHours() < 10 && d.getHours()>=0)
{
   hours = "0"+ d.getHours(); 
}
else{
    hours = d.getHours();
}

if( d.getDate() < 10 && d.getDate()>=0)
{
   day = "0"+ d.getDate(); 
}
else{
    day = d.getDate();
}

    document.getElementById("hr").innerHTML = hours+ ":";
    
    document.getElementById("min").innerHTML = minutes+ ":";
    
    document.getElementById("sec").innerHTML = seconds;
    
    document.getElementById("day").innerHTML = day+ "/";
    
    document.getElementById("month").innerHTML = mon + "/";
    
    document.getElementById("yr").innerHTML = d.getFullYear();
},1000);


var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
  var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');
  
      var day = weekday[d.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
}

setInterval("clock()", 100);



