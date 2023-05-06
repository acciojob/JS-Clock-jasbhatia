//your code here
let hour = document.querySelector(".hour-hand");
let min = document.querySelector(".min-hand");
let sec = document.querySelector(".second-hand");

function showTime() {
  setInterval(() => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrot = 30 * hh + mm / 2;
    let mrot = 6 * mm;
    let srot = 6 * ss;

    hour.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;
  }, 1000);
}
showTime();