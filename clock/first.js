let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displaytime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hrotation = 30 * hh + mm / 2;
  let mrotate = 6 * mm;
  let secrotate = 6 * ss;

  hour.style.transform = `rotate(${hrotation}deg)`;
  min.style.transform = `rotate(${mrotate}deg)`;
  sec.style.transform = `rotate(${secrotate}deg)`;
}

setInterval(displaytime, 1000);
