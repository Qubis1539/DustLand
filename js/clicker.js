let clicks = 0;
let ico = document.querySelector("#hiddenico");
ico.addEventListener("click", function() {
    clicks++;
    if (clicks == 10) {
        ico.src = "../images/v.png"
    }
})