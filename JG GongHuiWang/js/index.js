$(document).mousemove(function () {
    // $(".news-item a,.part-item a").css("color", "#333")
    if ($(".news-item a,.part-item a").mouseleave()) {
        // $(".news-item a,.part-item a").css("color", "#333")
    }
})
// a标签滑入变红
$(".news-item a,.part-item a").mouseover(function () {
    $(".news-item a,.part-item a").css("color", "#333");
    $(this).animate({
        'color': '#d70012'
    },100);
    $(".news-item a,.part-item a").css("color", "#333")
}).blur(function () {
    $(".news-item a,.part-item a").css("color", "#333")
})

window.onload = roll(50);
window.onload = roll2(50);

function roll(t) {
    var ul1 = document.getElementById("sidebar-content");
    var ul2 = document.getElementById("sBox");
    var ulbox = document.getElementById("inner");
    ul2.innerHTML = ul1.innerHTML;
    ulbox.scrollTop = 0; // 开始无滚动时设为0
    var timer = setInterval(rollStart, t); // 设置定时器，参数t用在这为间隔时间（单位毫秒），参数t越小，滚动速度越快
    // 鼠标移入div时暂停滚动
    ulbox.onmouseover = function () {
        clearInterval(timer);
    }
    // 鼠标移出div后继续滚动
    ulbox.onmouseout = function () {
        timer = setInterval(rollStart, t);
    }
}

// 开始滚动函数
function rollStart() {
    // 上面声明的DOM对象为局部对象需要再次声明
    var ul1 = document.getElementById("sidebar-content");
    var ul2 = document.getElementById("sBox");
    var ulbox = document.getElementById("inner");
    // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
    if (ulbox.scrollTop >= ul1.scrollHeight) {
        ulbox.scrollTop = 0;
    } else {
        ulbox.scrollTop++;
    }
}
function roll2(t) {
    var ul1 = document.getElementById("sidebar-content2");
    var ul2 = document.getElementById("sBox2");
    var ulbox = document.getElementById("inner2");
    ul2.innerHTML = ul1.innerHTML;
    ulbox.scrollTop = 0; // 开始无滚动时设为0
    var timer = setInterval(rollStart2, t); // 设置定时器，参数t用在这为间隔时间（单位毫秒），参数t越小，滚动速度越快
    // 鼠标移入div时暂停滚动
    ulbox.onmouseover = function () {
        clearInterval(timer);
    }
    // 鼠标移出div后继续滚动
    ulbox.onmouseout = function () {
        timer = setInterval(rollStart2, t);
    }
}

// 开始滚动函数
function rollStart2() {
    // 上面声明的DOM对象为局部对象需要再次声明
    var ul1 = document.getElementById("sidebar-content2");
    var ul2 = document.getElementById("sBox2");
    var ulbox = document.getElementById("inner2");
    // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
    if (ulbox.scrollTop >= ul1.scrollHeight) {
        ulbox.scrollTop = 0;
    } else {
        ulbox.scrollTop++;
    }
}