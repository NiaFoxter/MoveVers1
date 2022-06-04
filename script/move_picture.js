const img_kitty = document.querySelector(".kitty");
const container = document.getElementById("container");
let img_height = img_kitty.clientHeight, img_width = img_kitty.clientWidth;


img_kitty.addEventListener("mouseenter", (ev) => { MouseEnter(ev) });

function MouseEnter(e) {
    if (e.offsetX <= 3) {
        img_kitty.style.left = (img_kitty.offsetLeft + 10) + "px";
    } else if (e.offsetX >= img_width - 3) {
        img_kitty.style.left = (img_kitty.offsetLeft - 10) + "px";
    } else if (e.offsetY <= 3) {
        img_kitty.style.top = (img_kitty.offsetTop + 10) + "px";
    } else if (e.offsetY >= img_height - 3) {
        img_kitty.style.top = (img_kitty.offsetTop - 10) + "px";
    }
}