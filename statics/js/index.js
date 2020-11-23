

// 导航
var $obj = $('.navbar-nav');
$obj.find('li').on('mouseenter', function() {
    $(this).addClass("is_true_Underline");
});
$obj.find('li').on('mouseleave', function() {
    $(this).removeClass("is_true_Underline");
})

// 监听滚动
$(document).scroll(function () {
    var scroH = $(document).scrollTop();  //滚动高度
    var viewH = $(window).height();  //可见高度 
    var contentH = $(document).height();  //内容高度
    if(scroH <50){
        $('.navbar-default').removeClass("nav_bg");
    }
    if (scroH > 50) {  //距离顶部大于100px时
        // console.log('qwe')
        $('.navbar-default').addClass("nav_bg");
    }
    if (contentH - (scroH + viewH) <= 100) {  //距离底部高度小于100px

    }
    if (contentH == (scroH + viewH)) {  //滚动条滑到底部啦

    }
})
