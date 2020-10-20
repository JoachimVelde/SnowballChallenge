const checkbox = document.querySelector("#checkbox");
const burgers = document.querySelectorAll(".burger-bar");

checkbox.addEventListener("change", () => {
    console.log(12);
    if (checkbox.checked) {
        crossBurger();
    } else {
        uncrossBurger();
    }
});

function crossBurger() {
    burgers[0].style.transform = "rotate(45deg) translate(12px, 16px)";
    burgers[1].style.visibility = "hidden";
    burgers[2].style.transform = "rotate(-45deg) translate(12px, -16px)";
    console.log(23);
}

function uncrossBurger() {
    burgers[0].style.transform = "rotate(0deg) translate(0px, 0px)";
    burgers[1].style.visibility = "visible";
    burgers[2].style.transform = "rotate(0deg)";
}