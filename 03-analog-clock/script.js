const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

setInterval(()=>{
    const date = new Date;

const secDeg = date.getSeconds()/60 * 360 -90;
const minDeg = date.getMinutes()/60 * 360 -90;
const hrsdeg = date.getHours()/12 * 360 -90;

secondEl.style.transform  = `rotate(${secDeg}deg)`;
minuteEl.style.transform  = `rotate(${minDeg}deg)`;
hourEl.style.transform  = `rotate(${hrsdeg}deg)`;



},1000)
