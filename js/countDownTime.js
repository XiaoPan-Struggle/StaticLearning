window.addEventListener("load", function() {
  var hour = document.querySelector(".hour");
  var minute = document.querySelector(".minute");
  var second = document.querySelector(".second");
  var inputTime = +new Date("2020-01-01 00:00:00");
  getTime();
  setInterval(getTime, 1000);

  function getTime() {
    var nowTime = +new Date();
    var times = (inputTime - nowTime) / 1000; //times是剩余时间总秒数
    var h = parseInt((times / 60 / 60) % 24); //时
    h = h < 10 ? "0" + h : h;
    hour.innerHTML = h;
    var m = parseInt((times / 60) % 60); //分
    m = m < 10 ? "0" + m : m;
    minute.innerHTML = m;
    var s = parseInt(times % 60); //当前秒
    s = s < 10 ? "0" + s : s;
    second.innerHTML = s;
  }
});
