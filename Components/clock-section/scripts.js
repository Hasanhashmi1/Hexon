let hoursInside = document.getElementById("hours");
let minsInside = document.getElementById("minutes");
let secsInside = document.getElementById("seconds");
let dateCurrent = document.getElementById("date");


setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let currentDate = date.getDate();
    let currentMonth  = date.getMonth();
    let currenYear = date.getFullYear();
    hoursInside.innerHTML = hours.toString().padStart(2, '0');
    minsInside.innerHTML = minutes.toString().padStart(2, '0');
    secsInside.innerHTML = seconds.toString().padStart(2, '0');
    dateCurrent.innerHTML = currentDate + " / " + currentMonth + " / " + currenYear ;
}, 1000);




// The function here creates flags of current time and date
let btn = document.getElementById("flagBtn");
let divFlag = document.getElementById("flagDiv");
btn.addEventListener("click" , ()=>{
    divFlag.insertAdjacentHTML("afterbegin" , `<div><h3>${hoursInside.innerHTML}</h3>  <h3>${minsInside.innerHTML}</h3> <h3>${secsInside.innerHTML}</h3></div>`);
});