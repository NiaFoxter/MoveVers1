const img_kitty = document.querySelector(".kitty");
const container = document.getElementById("container");
let img_height = img_kitty.clientHeight, img_width = img_kitty.clientWidth;
let container_height = container.clientHeight, container_width = container.clientWidth;
let limit_right = container_width - img_width;
let limit_up = container_height - img_height;

img_kitty.addEventListener("mouseenter", (ev) => { MouseEnter(ev) });

function MouseEnter(e) {
    let ev_offsetX = e.offsetX, ev_offsetY = e.offsetY;
    let img_offsetLeft = img_kitty.offsetLeft,  img_offsetTop = img_kitty.offsetTop;
    
    if (ev_offsetX <= 3 && img_offsetLeft < limit_right) {
        img_kitty.style.left = (img_offsetLeft + 10) + "px";
    } else if (ev_offsetX >= img_width - 3 && img_offsetLeft > 0) {
        img_kitty.style.left = (img_offsetLeft - 10) + "px";
    } else if (ev_offsetY <= 3 && img_offsetTop < limit_up) {
        img_kitty.style.top = (img_offsetTop + 10) + "px";
    } else if (ev_offsetY >= img_height - 3 && img_offsetTop > 0) {
        img_kitty.style.top = (img_offsetTop - 10) + "px";
    }
}