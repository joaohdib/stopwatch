const botao = document.getElementById("botao");
const min = 0;
const maxX = 1500;
const maxY = 800;
let x;
let y;
botao.onmouseover = function() {
    x = Math.round(Math.random() * (maxX - min) + min);
    y = Math.round(Math.random() * (maxY - min) + min);
    x = x.toString() + "px";
    y = y.toString() + "px";
    console.log(y);
    botao.style.top = y;
    botao.style.left = x;
};

