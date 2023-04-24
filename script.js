
const btn = document.getElementById("btn");
const span = document.getElementById("spn");
const light = document.getElementById("light");

btn.onclick = () => {
    btn.classList.toggle("active");
    light.classList.toggle("on");
    span.classList.toggle("active span");
}
