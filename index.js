let a;
let time;
setInterval(() => {
    a = new Date();
    sec = a.getSeconds();
    mins = a.getMinutes();
    hrs=a.getHours();
    if(hrs>12){
        hrs-=12;
        document.getElementById('mor').innerHTML='PM';    
    }
    document.getElementById('hrs').innerText = hrs;
    document.getElementById('mins').innerText = mins;
    document.getElementById('q').innerText = sec;
    document.getElementById('p').innerText = sec;
    document.getElementById('r').innerText = sec;


}, 1000);