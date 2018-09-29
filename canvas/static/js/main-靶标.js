//querySelector获取DOM元素
document.querySelector(".center").onclick = function () {
    //获取circle元素
    var circle = document.querySelectorAll(".circle");
    for (var i = 0; i < circle.length; i++) {
        circle[i].style.animationDelay = i * 0.6 + "s";
        circle[i].classList.add('go');
    }
}
