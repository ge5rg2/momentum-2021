const clockDate = document.querySelector("h2#clockDate");
const day = new Date();
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn'); 
const sc = document.querySelector('#sc'); 
const dDay = document.querySelector("#d-day");
//날짜//
function getDate() {
    const dateString = day.toLocaleString('en-EN', {
        year: 'numeric',
        month: 'long',
        weekday: 'long',
        day: 'numeric'
    });
    clockDate.innerText = dateString;
}
getDate();
setInterval(getDate, 1000); 
//아날로그 시계//
setInterval (()=> { 
    let day = new Date(); 
    let hh = day.getHours() * 30; 
    let mm = day.getMinutes() * deg; 
    let ss = day.getSeconds() * deg; 
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`; 
    mn.style.transform = `rotateZ(${mm}deg)`; 
    sc.style.transform = `rotateZ(${ss}deg)`; 
})
//자동 내년 일자 계산기//
function arletdDay() {
    const years = day.getFullYear();
    const dday = new Date(`${years+1}-01-01:00:00:00+0900`);
    let gap = dday.getTime() - day.getTime();
    let result = Math.ceil(gap/ (1000 * 60 * 60 * 24));
    dDay.innerText = `${result} days left until ${years+1}`;
}
arletdDay();