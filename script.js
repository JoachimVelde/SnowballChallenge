const body = document.querySelector("body");
const checkbox = document.querySelector("#checkbox");
const burgers = document.querySelectorAll(".burger-bar");

window.addEventListener("resize", () => {
    if (window.innerWidth > 730) {
        body.style.overflowY = "scroll";
    } else if (checkbox.checked) {
        body.style.overflowY = "hidden";
    }
});

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        crossBurger();
    } else {
        uncrossBurger();
    }
});

function crossBurger() {
    body.style.overflowY = "hidden";
    burgers[0].style.transform = "rotate(45deg) translate(12px, 16px)";
    burgers[1].style.visibility = "hidden";
    burgers[2].style.transform = "rotate(-45deg) translate(12px, -16px)";
}

function uncrossBurger() {
    body.style.overflowY = "scroll";
    burgers[0].style.transform = "";
    burgers[1].style.visibility = "visible";
    burgers[2].style.transform = "";
}