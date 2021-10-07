let article =
  "今冬大兴安岭奇寒，春节前后，气温都在零下三十七八度之间徘徊。世界看似冻僵了，但白雪茫茫的山林中，依然有飞鸟的踪迹;冰封的河流下，鱼儿也在静静地潜游。北风呼啸的街头，人们也依然忙着年。有生命的不止这些，还有花儿。是霜花!每天早晨，我从床上爬起，拉开窗帘，便可望见玻璃窗上的霜花。户外寒风凛冽，室内温度只有十七八度，所以今冬我见的霜花，不像往年只蔓延在窗子底部，而是满窗盛开!霜花姿态万千，真是要看什么有什么。挺直的冷杉，摇曳的白桦，风情万种的柳树，初绽的水仙，半开的芍药，怒放的菊花，你在霜花的世界中，都能寻到。当然，除了常见的树木和花朵，霜花也隐现动物的形影，比如呼呼大睡的肥猪，飞翔的仙鹤，低头喝水的鹿，奔跑的狗，游走的蛇等。你要问霜花中有没有人?答案是肯定的。亭亭玉立的少女，蹒跚学步的儿童，弯腰弓背的老人，霜花也不吝惜它的笔，勾勒他们的形影，并为之配上人间的烟火气——房屋、水井、田地、牛车、犁铧、米缸、灶台、饭桌、碗筷甚至肥皂。仅有这些还不够，没有光，世界是彻头彻尾僵死的，于是霜花中就有了日月星辰，有了来自天庭的照耀!不要以为霜花总是烟花般灿烂，它也有孤独的脚印;它也不总是祥云缭绕，那里也有离人的眼泪!";

let div = document.querySelector(".origin");
let tem = article.replace(/\ +/g, "");
let temarr = [...tem];
for (i = 1; i <= Math.ceil([...tem].length / 55); i++) {
  let p = document.createElement("p");
  div.appendChild(p);
  p.setAttribute("id", "p" + i);
  p.classList.add("pline");
}
let num = temarr.length;
console.log(num);
for (j = 1; j <= Math.ceil(num / 55); j++) {
  let pj = document.querySelector("p[id=p" + j + "]");
  let newnum = 0;
  for (i = 0; i <= 55 && temarr.length != 0; i++) {
    if (i <= 55) {
      let span = document.createElement("span");
      pj.appendChild(span);
      span.classList.add("zi");

      span.innerHTML = temarr.splice(0, 1);
      newnum++;
    }
  }
  pj.innerHTML += "<br/>";
  for (i = 1; i <= newnum; i++) {
    let input = document.createElement("span");
    pj.appendChild(input);
    input.classList.add("ui");
  }
}

let zi = document.querySelectorAll(".zi");
let ui = document.querySelectorAll(".ui");

for (k = 0; k < num; k++) {
  zi[k].setAttribute("zi", k + 1);
  ui[k].setAttribute("ui", k + 1);
}

let arr = [];
let spans = document.querySelectorAll("span");
let inputbox = document.querySelector("#input");
function nowinput() {
  let uinput = document.querySelector("#input").value;
  arr.push(uinput);
  console.log(arr);

  ui[0].innerHTML = arr.shift();

  inputbox.offsetLeft += 30 + "px";
}
console.log(inputbox.offsetLeft);