function digitalclock(){
    let datefunction =new Date();
    let day = datefunction.getDay();
    let hours = datefunction.getHours();
    let minutes = datefunction.getMinutes();
    let seconds = datefunction.getSeconds();
    let timeFormat="AM";

    timeFormat=hours >= 12 ? "PM":"AM" ;
    hours=hours==0 ? 12: hours;
    hours=hours>12 ? hours-12 :hours;
    hours=hours<10?'0'+hours:hours;
    minutes=minutes<10?'0'+minutes:minutes;
    seconds=seconds<10?'0'+seconds:seconds;

    document.querySelector('.hours').innerHTML=hours;
    document.querySelector('.minutes').innerHTML=minutes;
    document.querySelector('.seconds').innerHTML=seconds;
    document.querySelector('.format').innerHTML=timeFormat;

    let today=document.querySelector(`.weekdays: nth-child(${day+1})`)
    today.classList.add('active');
}
setInterval(digitalclock,1000);