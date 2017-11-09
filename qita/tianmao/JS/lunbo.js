let obj = document.body.scrollTop === 0 ? document.documentElement : document.body;

//轮播图
{
    let dians = document.querySelectorAll(".dianbox li")
    let imgs = document.querySelectorAll(".bannerbox li")

    dians.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < dians.length; i++) {
                imgs[i].classList.remove("active")
                dians[i].classList.remove("active")
            }
            ele.classList.add("active")
            imgs[index].classList.add("active")
        }
    })
    let nuw = 0;
    let st = window.setInterval(fn, 2000);

    function fn() {
        nuw++
        if (nuw === dians.length) {
            nuw = 0;
        }
        for (let i = 0; i < dians.length; i++) {
            dians[i].classList.remove("active")
            imgs[i].classList.remove("active")
        }
        dians[nuw].classList.add("active")
        imgs[nuw].classList.add("active")
    }

    let bennerObj = document.querySelector(".box")
    bennerObj.onmouseover = function () {
        clearInterval(st)
    }

    bennerObj.onmouseout = function () {
        st = window.setInterval(fn, 2000);
    }
}
//最上边
{
    let hongtiao=document.querySelector(".hongtiaotiao")
    let st = obj.scrollTop;
    window.onscroll = function () {
        let obj = document.body.scrollTop === 0 ? document.documentElement : document.body;
        let st = obj.scrollTop;
        if (st > 800) {
            hongtiao.style.top = "0";
        } else if (st < 800) {
            hongtiao.style.top = "-50px";
        }
    }
}
//楼层跳转
{
    let zuoce = document.querySelector(".zuoce")
    let zuobian = document.querySelectorAll(".zuoce div")
    let neirong = document.querySelectorAll(".meilirensheng")
    window.addEventListener("scroll", function () {
        let obj = document.body.scrollTop === 0 ? document.documentElement : document.body;
        let st = obj.scrollTop;
        if (st > 800) {
            zuoce.style.cssText = "width:36px;height:288px;";
        } else if (st < 800) {
            zuoce.style.cssText = "width:0px;height:0px;";
        }
        // console.log(st)
        for (let i = 0; i < neirong.length; i++) {
            if(st > neirong[i].offsetTop - 60){
                for(let i = 0; i < zuobian.length; i++){
                    zuobian[i].classList.remove("active")
                }
                zuobian[i].classList.add("active")
            }
        }
    })

    //第一个参数操作的对象
    //第二个参数传的对象，属性值得集合形式，用花括号包起来,属性 ： 冒号值
    //第三个接收的参数是时间，默认是500毫秒
    //第四个对应的就是一个函数，动画效果，比如匀速
    //第五个是一个回调函数，
}
{
    let a = document.querySelector(".aa")
    a.onclick = function () {
        animate(obj, {scrollTop: 0}, 1000)
//            alert(1)
    }
    //第一个参数操作的对象
    //第二个参数传的对象，属性值得集合形式，用花括号包起来,属性 ： 冒号值
    //第三个接收的参数是时间，默认是500毫秒
    //第四个对应的就是一个函数，动画效果，比如匀速
    //第五个是一个回调函数，
}
{
    let louceng = document.querySelectorAll(".zuoce .louceng")
    let neirong = document.querySelectorAll(".meilirensheng")
    console.log(obj)
    louceng.forEach(function (ele, index) {
        ele.onclick = function () {
            let ot = neirong[index].offsetTop;
            animate(obj, {scrollTop: ot - 50}, 1000);
        }
    })
}


//导航显隐
{
    let da=document.querySelector(".borner")
    let left=document.querySelector(".shangpin")
    let right=document.querySelector(".xbox")
    left.onmousemove=function () {
        right.style.display="block";
    }

    left.onmouseout=function (e) {
        e.stopPropagation();
//        right.style.display="none";
    }
    da.onmouseleave=function () {
        right.style.display="none";
    }

    right.onmouseout=function () {
        right.style.display="none";
    }
}






