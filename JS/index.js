function time() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let week = date.getDay();
  let weeks = [
    "星期天",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  let now_week = weeks[week];
  month < 10 ? (month = "0" + month) : month;
  day < 10 ? (day = "0" + day) : day;
  hour < 10 ? (hour = "0" + hour) : hour;
  minute < 10 ? (minute = "0" + minute) : minute;
  second < 10 ? (second = "0" + second) : second;

  function sayhello() {
    if (hour < 6) {
      return "凌晨了!";
    } else if (hour < 9) {
      return "早上好!";
    } else if (hour < 12) {
      return "上午好!";
    } else if (hour < 14) {
      return "中午好!";
    } else if (hour < 17) {
      return "下午好!";
    } else if (hour < 19) {
      return "傍晚好!";
    } else {
      return "晚上好!";
    }
  }
  document.getElementById("sayhello").innerHTML = sayhello();
  document.getElementById("time").innerHTML =
    year +
    "." +
    month +
    "." +
    day +
    "&nbsp;&nbsp" +
    hour +
    ":" +
    minute +
    ":" +
    second +
    "&nbsp" +
    now_week;
}
setInterval("time()", 1000);

function solarterms() {
  let st = new Map([
    ["立春", [2, 3, 4, 5]],
    ["雨水", [2, 18, 19, 20]],
    ["惊蛰", [3, 5, 6, 7]],
    ["春分", [3, 20, 21]],
    ["清明", [4, 4, 5, 6]],
    ["谷雨", [4, 19, 20, 21]],
    ["立夏", [5, 5, 6, 7]],
    ["小满", [5, 20, 21, 22]],
    ["芒种", [6, 5, 6, 7]],
    ["夏至", [6, 21, 22]],
    ["小暑", [7, 6, 7, 8]],
    ["大暑", [7, 22, 23, 24]],
    ["立秋", [8, 7, 8, 9]],
    ["处暑", [8, 22, 23, 24]],
    ["白露", [9, 7, 8, 9]],
    ["秋分", [9, 22, 23, 24]],
    ["寒露", [10, 8, 9]],
    ["霜降", [10, 23, 24]],
    ["立冬", [11, 7, 8]],
    ["小雪", [11, 22, 23]],
    ["大雪", [12, 6, 7, 8]],
    ["冬至", [12, 21, 22, 23]],
    ["小寒", [1, 5, 6, 7]],
    ["大寒", [1, 20, 21]],
  ]);

  let solar = [
    "立春",
    "雨水",
    "惊蛰",
    "春分",
    "清明",
    "谷雨",
    "立夏",
    "小满",
    "芒种",
    "夏至",
    "小暑",
    "大暑",
    "立秋",
    "处暑",
    "白露",
    "秋分",
    "寒露",
    "霜降",
    "立冬",
    "小雪",
    "大雪",
    "冬至",
    "小寒",
    "大寒",
  ];

  let date = new Date();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let thisday = m + "-" + d;
  //   console.log(thisday);
  for (let [key, value] of st) {
    //判断当前是否处于某个节气中
    if (
      thisday === value[0] + "-" + value[1] ||
      thisday === value[0] + "-" + value[2] ||
      thisday === value[0] + "-" + value[3]
    ) {
      document.getElementById("solarterms").innerHTML = key;
      document.getElementById("nextsolarterms").innerHTML =
        solar[solar.indexOf(key) + 1];
      break;
    }
    //此处判断当前处于两个节气期间
    else if (m === value[0] && d > value[value.length - 1]) {
      document.getElementById("nextsolarterms").innerHTML =
        solar[solar.indexOf(key) + 1];
      //此处用意是通过循环拿到下一个节气名
      let tem = [...st];
      for (let i = 0; i < tem.length; i++) {
        if (tem[i][0] === key && !(d < tem[i + 1][1][1])) {
          document.getElementById("nextsolarterms").innerHTML = tem[i + 2][0];
          //一个月中有两个节气，最上面的第一个判断只是判断了每个月的第一个节气，故在此要判断当前日期是否处于第二个节气中
          if (
            d === tem[i + 1][1][1] ||
            d === tem[i + 1][1][2] ||
            d === tem[i + 1][1][3]
          ) {
            document.getElementById("solarterms").innerHTML = tem[i + 1][0];
          }
          break;
        }
      }
      break;
    }
    //此处的判断情况为当前日期还未到这个月的第一个节气
    else if (m === value[0] && d < value[1]) {
      console.log("无呐");
      document.getElementById("nextsolarterms").innerHTML = key;
      break;
    } else {
      // document.getElementById("solarterms").innerHTML = "节气";
      document.getElementById("nextsolarterms").innerHTML = "٩(●̮̃•)۶";
    }
  }
}

solarterms();

//轮播图

let to_left = document.querySelector(".to_left");
let to_right = document.querySelector(".to_right");
let focus_container = document.querySelector(".focus_container");
let ol = focus_container.querySelector("ol");
let ul = focus_container.querySelector("ul");
let focuswidth = focus_container.offsetWidth;
let num = 0;
let circle = 0;
//鼠标经过时显示左右箭头，离开时隐藏箭头
focus_container.addEventListener("mouseenter", function () {
  to_left.style.display = "block";
  to_right.style.display = "block";
  clearInterval(timer);
  timer = null;
});
focus_container.addEventListener("mouseleave", function () {
  to_left.style.display = "none";
  to_right.style.display = "none";
  timer = setInterval(() => {
    to_right.click();
  }, 2500);
});
//动态生成小圆
for (i = 0; i < ul.children.length; i++) {
  let li = document.createElement("li");
  li.setAttribute("index", i);
  ol.appendChild(li);
  li.addEventListener("click", function () {
    for (i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
      this.className = "current";
      let index = this.getAttribute("index");
      console.log(focuswidth);
      num = index;
      circle = index;
      ul.style.left = -index * focuswidth + "px";
    }
  });
}
ol.children[1].className = "current";

let first = ul.children[0].cloneNode(true);
ul.appendChild(first);

to_right.addEventListener("click", function () {
  if (num == ul.children.length - 1) {
    ul.style.left = 0;
    num = 0;
  }
  num++;
  ul.style.left = -num * focuswidth + "px";
  circle++;
  if (circle == ol.children.length) {
    circle = 0;
  }
  for (i = 0; i < ol.children.length; i++) {
    ol.children[i].className = "";
    ol.children[circle].className = "current";
  }
});
//左侧按钮
to_left.addEventListener("click", function () {
  if (num == 0) {
    num = ul.children.length - 1;
    ul.style.left = -num * focuswidth + "px";
  }
  num--;

  ul.style.left = -num * focuswidth + "px";
  circle--;
  if (circle < 0) {
    circle = ol.children.length - 1;
  }
  for (i = 0; i < ol.children.length; i++) {
    ol.children[i].className = "";
    ol.children[circle].className = "current";
  }
});
let timer = setInterval(() => {
  to_right.click();
}, 2500);

// 工具分享的最右边一个不要外边距
let share_soft = document.querySelector(".share_soft");
for (let i = 1; i <= share_soft.children.length; i++) {
  if (i % 4 == 0) {
    share_soft.children[i - 1].style.margin = 0;
  }
}

// 点击显示工具分享的详情页
let soft_item = document.querySelectorAll(".soft_item");
let contentpage = document.querySelectorAll(".contentpage");
soft_item.forEach(function (item, index) {
  item.addEventListener("click", function () {
    let flag = contentpage[index].getAttribute("flag");
    flag = flag == "true" ? true : false;
    flag = !flag;
    if (flag) {
      contentpage[index].style.display = "block";
      contentpage[index].style.transform = "perspective(2000px) rotate(-10deg)";
      contentpage[index].firstElementChild.style.transform = "rotatey(-135deg)";
      contentpage[index].style.boxShadow =
        "inset 20px 0 20px rgba(0, 0, 0, 0.5), 10px 10px 50px";
    } else {
      contentpage[index].style.display = "none";
    }
    contentpage[index].setAttribute("flag", flag);
  });
});
