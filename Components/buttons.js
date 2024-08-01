document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("fetchBtn");
    let spaner = document.getElementById("load");
    let spans = document.querySelector(".spanContainer");

    function fetchingAI() {
        spaner.style.display = "block";
        let intervalId;
        let timeoutId;

        timeoutId = setTimeout(() => {
            intervalId = setInterval(() => {
                spaner.style.display = "none";
                spans.insertAdjacentHTML("beforeend", `<p>Hello</p>`);
            }, 1000);
        }, 2000);

        setTimeout(() => {
            clearInterval(intervalId); // Clear the interval
            spaner.style.display = "block";
            spaner.innerHTML = "End of Fetching";
        }, 6000);
    }

    btn.addEventListener("click", fetchingAI);
});


let btnBulb = document.getElementById("bulbBtn");
let bulb = document.getElementById("bulb");

btnBulb.addEventListener("click" , ()=>{
    bulb.classList.toggle("active");
});