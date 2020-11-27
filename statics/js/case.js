
// 案例 tabs
$(function () {

    var width = 1200; //跟外面盒子的宽度一样，或者写成 var width = $(".content").width();
    var ulNum = $(".case_content ul").length; //获取ul的个数
    var contentWidth = width * ulNum; //获取整个box应该的长度，刚开始box设置成了1100，但是应该把所有的ul防到一行里面去，这样box向左移动的时候才是无缝滚动

    $(".case_box").width(contentWidth); //给box设置宽度  .width() 是获取宽度  .width(value)是设置宽度

    $(".case_nav ul li").click(function (e) {

        console.log($(this).context.innerText)
        //$(this)表示点击的这个元素 ，.addClass()表示添加的样式名称，.siblings()表示这个元素的所有兄弟级元素，此处表示span，
        // .removeClass()表示删除的样式名称
        $(this).addClass('active').siblings().removeClass('active');

        var clickNum = $(this).index(); //判断点击的是第几个span .index()方法返回第几个，从0开始算起
        //alert(clickNum);

        var moveLeft = clickNum * width * -1; //应该向左移动的距离

        $(".case_box").animate({
            'left': moveLeft
        }, 600); //通过操作box的left来使box向左移动， .animate 是动画函数
        //第一个参数用{}包含起来，里面的内容形式为 {'left':100,'top':100}，多个用逗号隔开，
        // 表示从当前位置移动到left为100px、top为100px的位置（即left:100px;top:100px处），
        //第二个参数为时间，表示从当前位置移动到第一个参数用时，单位为ms，1000ms=1秒
        //点击的时候一定要点开审查元素，查看box元素的行内样式
    })

    var data = 5
    // 高度调整
    if (data.length<4){
        $(".case_content").height('530px')
        $("#pages").bottom('580px')
    }else if(data.length>4){
        $(".case_content").height('950px')
        $("#pages").bottom('580px')
    } else if (data.length>8){
        $(".case_content").height('1400px')
        $("#pages").bottom('160px')
    }
})

// 数据
var textdata = [
    {
        type: '酒水行业',
        id: '1',
        icon_t: '../statics/images/customercase/select/icon_1.png',
        icon_f: '../statics/images/customercase/unchecked/icon_1.png',
        list: [
            {
                id: '1',
                name: '红牛1',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "2",
                name: '红牛2',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "3",
                name: '红牛3',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "4",
                name: '红牛4',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛5',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            }
        ]
    },
    {
        type: '快销行业',
        id: '2',
        icon_t: '../statics/images/customercase/select/icon_2.png',
        icon_f: '../statics/images/customercase/unchecked/icon_2.png',
        list: [
            {
                id: '1',
                name: '红牛21',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "2",
                name: '红牛22',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "3",
                name: '红牛23',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "4",
                name: '红牛24',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛25',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛25',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛25',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛25',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛25',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛25',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛25',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },

        ]
    },
    {
        type: '饮料行业',
        id: '3',
        icon_t: '../statics/images/customercase/select/icon_3.png',
        icon_f: '../statics/images/customercase/unchecked/icon_3.png',
        list: [
            {
                id: '1',
                name: '红牛31',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "2",
                name: '红牛32',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "3",
                name: '红牛33',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "4",
                name: '红牛34',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛35',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            }
        ]
    },
    {
        type: '母婴行业',
        id: '3',
        icon_t: '../statics/images/customercase/select/icon_4.png',
        icon_f: '../statics/images/customercase/unchecked/icon_4.png',
        list: [
            {
                id: '1',
                name: '红牛31',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "2",
                name: '红牛32',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "3",
                name: '红牛33',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "4",
                name: '红牛34',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛35',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            }
        ]
    },
    {
        type: '日化行业',
        id: '3',
        icon_t: '../statics/images/customercase/select/icon_5.png',
        icon_f: '../statics/images/customercase/unchecked/icon_5.png',
        list: [
            {
                id: '1',
                name: '红牛31',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "2",
                name: '红牛32',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "3",
                name: '红牛33',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "4",
                name: '红牛34',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛35',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            }
        ]
    },
    {
        type: '食品行业',
        id: '3',
        icon_t: '../statics/images/customercase/select/icon_6.png',
        icon_f: '../statics/images/customercase/unchecked/icon_6.png',
        list: [
            {
                id: '1',
                name: '红牛31',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "2",
                name: '红牛32',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "3",
                name: '红牛33',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "4",
                name: '红牛34',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛35',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            }
        ]
    },
    {
        type: '调味品行业',
        id: '3',
        icon_t: '../statics/images/customercase/select/icon_7.png',
        icon_f: '../statics/images/customercase/unchecked/icon_7.png',
        list: [
            {
                id: '1',
                name: '红牛31',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "2",
                name: '红牛32',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "3",
                name: '红牛33',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "4",
                name: '红牛34',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛35',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            }
        ]
    },
    {
        type: '美妆行业',
        id: '3',
        icon_t: '../statics/images/customercase/select/icon_8.png',
        icon_f: '../statics/images/customercase/unchecked/icon_8.png',
        list: [
            {
                id: '1',
                name: '红牛31',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "2",
                name: '红牛32',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "3",
                name: '红牛33',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "4",
                name: '红牛34',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛35',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            }
        ]
    },
    {
        type: '茶叶行业',
        id: '3',
        icon_t: '../statics/images/customercase/select/icon_9.png',
        icon_f: '../statics/images/customercase/unchecked/icon_9.png',
        list: [
            {
                id: '1',
                name: '红牛31',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "2",
                name: '红牛32',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "3",
                name: '红牛33',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "4",
                name: '红牛34',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛35',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            }
        ]
    },
    {
        type: '五金行业',
        id: '3',
        icon_t: '../statics/images/customercase/select/icon_10.png',
        icon_f: '../statics/images/customercase/unchecked/icon_10.png',
        list: [
            {
                id: '1',
                name: '红牛31',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "2",
                name: '红牛32',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "3",
                name: '红牛33',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "4",
                name: '红牛34',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛35',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            }
        ]
    },
    {
        type: '商超百货',
        id: '3',
        icon_t: '../statics/images/customercase/select/icon_11.png',
        icon_f: '../statics/images/customercase/unchecked/icon_11.png',
        list: [
            {
                id: '1',
                name: '红牛31',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "2",
                name: '红牛32',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "3",
                name: '红牛33',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "4",
                name: '红牛34',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛35',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            }
        ]
    },
    {
        type: '其他行业',
        id: '3',
        icon_t: '../statics/images/customercase/select/icon_12.png',
        icon_f: '../statics/images/customercase/unchecked/icon_12.png',
        list: [
            {
                id: '1',
                name: '红牛31',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "2",
                name: '红牛32',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "3",
                name: '红牛33',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "4",
                name: '红牛34',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            },
            {
                id: "5",
                name: '红牛35',
                avatar: '../statics/images/customercase/commodity/commodity_1.jpg',
                introduce: "红牛(RedBull)是全球较早推出且较成功的功能饮料品牌之一。1966年,红牛维生素功能饮料诞生于泰国,迄今已有近半个世纪的发展历史。"
            }
        ]
    },

]



function asd() {

    // 上方类别
    var str1 = ''
    var str2 = ''
    for (var i = 0; i < textdata.length; i++) {
        str1 = '<li class="active">' +
            '<img class="select" src="' + textdata[0].icon_t + '" alt="">' +
            '<img class="unchecked" src="' + textdata[0].icon_f + '" alt="">' +
            '<section>' + textdata[0].type + '</section>' +
            '</li>'
    };
    for (var i = 1; i < textdata.length; i++) {
        str2 += '<li>' +
            '<img class="select" src="' + textdata[i].icon_t + '" alt="">' +
            '<img class="unchecked" src="' + textdata[i].icon_f + '" alt="">' +
            '<section>' + textdata[i].type + '</section>' +
            '</li>'
    };
    var str3 = str1 + str2
    // console.log(str3)

    $('#case_nav').html(str3)

    // 下方内容
    var content = ''
    var content2 = ''
    var all = ''

    for (var i = 0; i < textdata.length; i++) {
        // console.log(textdata[i].list)
        // var page = Math.ceil(textdata[i].list.length / 16)
        // Math.ceil(textdata[i].list.length / 16)
        // console.log(page)
        for (var k = 0; k < textdata[i].list.length; k++) {
            content += '<li>' +
                '<img src="' + textdata[i].list[k].avatar + '" alt="">' +
                '<h3>' + textdata[i].list[k].name + '</h3>' +
                '<div></div><button type="button" class="btn btn-default">查看详情</button>' +
                '<p>' + textdata[i].list[k].introduce + '</p>' +
                '</li>'
        }
        content2 = '<ul>' + content + '</ul>'
        all += content2
        content = ''
    }

    // 放入页面的容器显示
    $('#case_box').html(all)
}
asd()
