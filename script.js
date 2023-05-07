//your code here
// let hour = document.querySelector(".hour-hand");
// let min = document.querySelector(".min-hand");
// let sec = document.querySelector(".second-hand");

// function showTime() {
//   setInterval(() => {
//     let date = new Date();
//     let hh = date.getHours();
//     let mm = date.getMinutes();
    // let ss = date.getSeconds();

//     let hrot = 30 * hh + mm / 2;
//     let mrot = 6 * mm;
//     let srot = 6 * ss;

//     hour.style.transform = `rotate(${hrot}deg)`;
//     min.style.transform = `rotate(${mrot}deg)`;
//     sec.style.transform = `rotate(${srot}deg)`;
//   }, 1000);
// }
// showTime();

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    console.log("curr", now, seconds, mins, hour)

    const hourDegrees = (30*hour + mins/2);
    const minsDegrees = 6*mins;
    const secondsDegrees = 6*seconds;


    console.log('degres', hourDegrees, minsDegrees, secondsDegrees)
    
    secondHand.style.transform = `rotate(${secondsDegrees }deg)`;
    minsHand.style.transform = `rotate(${minsDegrees + 90}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees +90 }deg)`;

	// hourHand.style.transform = `rotate(${Math.round(hourDegrees) + 90}deg)`;
}

setInterval(setDate, 1000);