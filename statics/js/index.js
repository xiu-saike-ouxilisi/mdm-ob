

// 导航
var $obj = $('.navbar-nav');
$obj.find('li').on('mouseenter', function () {
    $(this).addClass("is_true_Underline");
});
$obj.find('li').on('mouseleave', function () {
    $(this).removeClass("is_true_Underline");
})

// 监听滚动
$(document).scroll(function () {
    var scroH = $(document).scrollTop();  //滚动高度
    var viewH = $(window).height();  //可见高度 
    var contentH = $(document).height();  //内容高度
    if (scroH < 50) {
        $('.nav_index').removeClass("nav_bg");
    }
    if (scroH > 50) {  //距离顶部大于50px时
        $('.nav_index').addClass("nav_bg");
    }
    if (contentH - (scroH + viewH) <= 100) {  //距离底部高度小于100px

    }
    if (contentH == (scroH + viewH)) {  //滚动条滑到底部啦

    }
})

$(function () {
    // 获取手指在轮播图元素上的一个滑动方向（左右）

    // 获取界面上轮播图容器
    var $carousels = $('.carousel');
    var startX,endX;
    // 在滑动的一定范围内，才切换图片
    var offset = 50;
    // 注册滑动事件
    $carousels.on('touchstart',function (e) {
        // console.log(e);
        // 手指触摸开始时记录一下手指所在的坐标x
        startX = e.originalEvent.touches[0].clientX;

    });
    $carousels.on('touchmove',function (e) {
        // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend',function (e) {
        //console.log(endX);
        //结束触摸一瞬间记录手指最后所在坐标x的位置 endX
        //比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
        var distance = Math.abs(startX - endX);
        if (distance > offset){
            //说明有方向的变化
            //根据获得的方向 判断是上一张还是下一张出现
            $(this).carousel(startX >endX ? 'next':'prev');
        }
    })
});

