$(function(){
    $('#dowebok').fullpage(
        {
            continuousVertical:true,
            // sectionsColor : ['#1bbc9b', '#4BBFC3', '#3cd6ff', '#f90'],
//        loopBottom: true,
            'navigation': true,//是否显示项目导航
            navigationTooltips:true,    //数组	空	右侧项目导航的 tip
            navigation:["第一页","第二页","第三页","第四页",],
            anchors:["p1","p2","p3","p4"],
            verticalCentered:true,
            menu:".nav",
            controlArrowColor:"red",

            afterLoad:function(anchon,index){
                if(index==1){
                    $(".ziwo h1").animate({marginLeft:-1000})

                }
                else if(index==2){
                    $(".ziwo h1").animate({marginLeft:1000})


                    $(".jindutiao").css("display","block")
                    function fn(canvas,color,max){
                        let cobj = canvas.getContext("2d")
                        cobj.save();
                        cobj.translate(100, 100)
                        cobj.lineWidth = 20
                        cobj.strokeStyle = color
                        cobj.lineCap = "round"
                        cobj.textAlign = "center"
                        cobj.textBaseline = "middle"
                        cobj.font = "20px 微软雅黑"
                        cobj.fillStyle = "#fff";
                        let num = 0;
                        function progress() {
                            num++;
                            let angle = num * Math.PI / 50;
                            cobj.clearRect(-100, -100, 200, 200)
                            cobj.save()
                            cobj.rotate(-Math.PI / 2)
                            cobj.beginPath();
                            cobj.arc(0, 0, 70, 0, angle)
                            cobj.stroke()
                            cobj.restore()
                            cobj.fillText(num + "%", 0, 0);
                            if (num < max) {
                                requestAnimationFrame(progress);
                            }else{
                                cobj.restore()
                            }
                        }
                        progress()
                    }
                    let can1 = document.querySelector('#canvas1');
                    let can2 = document.querySelector('#canvas2');
                    let can3 = document.querySelector('#canvas3');


                    fn(can1,"red",80);
                    fn(can2,"pink",90);
                    fn(can3,"blue",90);
                }
                else if(index==3){
                    $(".xiangmu-top h1").css("animation","suo 1s")
                    $(".xiangmu-top p").css("animation","suo 1s")

                }
                else if(index==4){
                    $(".ziwo h1").animate({marginLeft:-1000})
                    $(".biaoti").css("animation","suo 1s")
                    $(".dizhi").css("animation","suo 1s")
                }

            },
            onLeave:function(index){
                setTimeout(function() {
                    if (index === 2) {
                        $(".jindutiao").css("display","none")
                    }
                    if (index === 3){
                        $(".xiangmu-top h1").css("animation","none")
                        $(".xiangmu-top p").css("animation","none")
                        $(".ziwo h1").animate({marginLeft:-1000})

                    }
                    if(index==4){
                        $(".biaoti").css("animation","none")
                        $(".dizhi").css("animation","none")
                    }
                })
            },

        }
    );
    $(".thin").fadeIn(2000);
    $(".thin2").fadeIn(2000);
    // $(".danghang").animate({
    //     "width":600,
    //     "height":50,
    //     "top":0,
    // },1000)
});



//进入下一屏幕

window.addEventListener('load', function () {
        var carousels = document.querySelectorAll('.carousel');

        for (var i = 0; i < carousels.length; i++) {
            carousel(carousels[i]);
        }
    });

    function carousel(root) {
        var figure = root.querySelector('figure'),
            nav = root.querySelector('nav'),
            images = figure.children,
            n = images.length,
            gap = root.dataset.gap || 0,
            bfc = 'bfc' in root.dataset,
            theta = 2 * Math.PI / n,
            currImage = 0;

        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        window.addEventListener('resize', function () {
            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        });

        setupNavigation();

        function setupCarousel(n, s) {
            var apothem = s / (2 * Math.tan(Math.PI / n));

            figure.style.transformOrigin = '50% 50% ' + -apothem + 'px';

            for (var i = 0; i < n; i++) {
                images[i].style.padding = gap + 'px';
            }for (i = 1; i < n; i++) {
                images[i].style.transformOrigin = '50% 50% ' + -apothem + 'px';
                images[i].style.transform = 'rotateY(' + i * theta + 'rad)';
            }
            if (bfc) for (i = 0; i < n; i++) {
                images[i].style.backfaceVisibility = 'hidden';
            }rotateCarousel(currImage);
        }

        function setupNavigation() {
            nav.addEventListener('click', onClick, true);

            function onClick(e) {
                e.stopPropagation();

                var t = e.target;
                if (t.tagName.toUpperCase() != 'BUTTON') return;

                if (t.classList.contains('next')) {
                    currImage++;
                } else {
                    currImage--;
                }

                rotateCarousel(currImage);
            }
        }

        function rotateCarousel(imageIndex) {
            figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';
        }
    }




