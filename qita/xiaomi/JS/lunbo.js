{
    var dians = document.querySelectorAll(".dianbox li")
    var imgs = document.querySelectorAll(".bannerbox li")
    console.log(dians)
    console.log(imgs)

    dians.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < dians.length; i++) {
                dians[i].classList.remove("active")
                imgs[i].classList.remove("active")
            }
            ele.classList.add("active")
            imgs[index].classList.add("active")
            nuw = index;
        }
    });


    let nuw = 0;
    let st = window.setInterval(fn, 1000);

    function fn(dir = "r") {
        if (dir === "r") {
            nuw++;
            if (nuw === dians.length) {
                nuw = 0;
            }
        } else if (dir === "l") {
            nuw--;
            if (nuw === -1) {
                nuw = dians.length - 1
            }
        }

        for (let i = 0; i < dians.length; i++) {
            dians[i].classList.remove("active")
            imgs[i].classList.remove("active")
        }
        dians[nuw].classList.add("active")
        imgs[nuw].classList.add("active")
    }

    let bennerObj = document.querySelector(".box")
    console.log(bennerObj)
    bennerObj.onmouseover = function () {
        clearInterval(st)
    }

    bennerObj.onmouseout = function () {
        st = window.setInterval(fn, 1000);
    }

    let zuo = document.querySelector(".zuo")
    let you = document.querySelector(".you")
    you.onclick = function () {
        console.log(1)
        fn("r")
    }
    zuo.onclick = function () {
        fn("l")
    }

}
// 明星单品
{
    let zuo = document.querySelector(".zuozuo")
    let you = document.querySelector(".youyou")
    let kuang = document.querySelector(".chang")
    let box = document.querySelector(".dabaitu")
    console.log(zuo)
    console.log(you)
    console.log(kuang)
    console.log(box)

    function zuoleft() {
        you.classList.remove("active")
        zuo.classList.add("active")
        kuang.style.marginLeft = "0"
        i = 0;
    }

    function youright() {
        zuo.classList.remove("active")
        you.classList.add("active")
        kuang.style.marginLeft = "-1226px"
        i = 1;
    }

    zuo.onclick = function () {
        // console.log(1)
        zuoleft()

    }
    you.onclick = function () {
        youright()
        // alert(1)
    }

    var i = 1;

    function fn() {
        i++;
        if (i % 2 == 0) {
            zuoleft()
        } else if (i % 2 == 1) {
            youright()
        }
    }

    var st = setInterval(fn, 2000)

    box.onmouseover = function () {
        clearInterval(st)
    }

    box.onmouseout = function () {
        setInterval(st = setInterval(fn, 2000))
    }


}

//选项卡
{
    let jiadian=document.querySelectorAll(".maichang .jiadian")
    function fn(a) {
        let types = a.querySelectorAll(".jiadian-top .right-1 ul li");
        let inners = a.querySelectorAll(".dianshi ul");
        types.forEach(function (ele, index) {
            ele.onmouseover = function () {
                for (var i = 0; i < types.length; i++) {
                    types[i].classList.remove('active');
                    inners[i].style.display = "none";
                }
                ele.classList.add('active');
                inners[index].style.display = "block";
            }
        })
    }
    for(let i=0;i<jiadian.length;i++){
        fn(jiadian[i])
    }
}


{
    let aaa = document.querySelectorAll(".neirong .dada")
    function fangfa(a) {
        let dabox = a.querySelector(".da")
        let dians = a.querySelectorAll(".diandian li")
        let zuo = a.querySelector(".zuozuozuo")
        let you = a.querySelector(".youyouyou")
        dians.forEach(function (ele, index) {
            ele.onclick = function () {
                for (let i = 0; i < dians.length; i++) {
                    dians[i].classList.remove("active")
                }
                ele.classList.add("active")
                dabox.style.marginLeft = -296 * index + "px"
                num = index;
            }
        })
        let num = 0;
        zuo.onclick = function () {
            paofn("l");
        }

        you.onclick = function () {
            paofn("r");
        }
        function paofn(dir = "r") {
            if (dir === "r") {
                num++;
                if (num === dians.length) {
                    num = dians.length - 1
                }
            } else if (dir === "l") {
                num--;
                if (num === -1) {
                    num = 0
                }
            }


            for (let i = 0; i < dians.length; i++) {
                dians[i].classList.remove("active");
            }
            dians[num].classList.add("active")
            dabox.style.marginLeft = -296 * num + "px"
        }
    }

    for (let i = 0; i < aaa.length; i++) {
        fangfa(aaa[i])
        console.log(1)
    }
}















