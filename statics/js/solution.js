
function qwe() {

    var textdata = [
        {
            type: '酒水行业',
            bg: '../statics/images/home/solutionbg/bg_1.jpg',
            brief: '牡丹码物联平台，快速录入产品信息，扫码即可全面了解全部商品信息并溯源产品源头，解决商家与客户之间的信息沟通障碍，增强消费者对门店/企业的忠诚度。',
            brand: [
                {
                    name: '商标1',
                    src: '../statics/images/home/icon/small/small_1.png',
                },
                {
                    name: '商标2',
                    src: '../statics/images/home/icon/small/small_1.png',
                },
            ],
            business: [
                {
                    src1: '../statics/images/home/icon/big/big_1.png',
                    src2: '../statics/images/home/code.png',
                },
                {
                    src1: '../statics/images/home/icon/big/big_1.png',
                    src2: '../statics/images/home/code.png',
                },

            ]
        },
        {
            type: '饮料行业',
            bg: '../statics/images/home/solutionbg/bg_2.jpg',
            brief: '牡丹码物联平台，快速录入产品信息，扫码即可全面了解全部商品信息并溯源产品源头，解决商家与客户之间的信息沟通障碍，增强消费者对门店/企业的忠诚度。',
            brand: [
                {
                    name: '商标1',
                    src: '../statics/images/home/icon/small/small_1.png',
                },
                {
                    name: '商标2',
                    src: '../statics/images/home/icon/small/small_1.png',
                },
                {
                    name: '商标3',
                    src: '../statics/images/home/icon/small/small_1.png',
                },
            ],
            business: [
                {
                    src1: '../statics/images/home/icon/big/big_1.png',
                    src2: '../statics/images/home/code.png',
                },
                {
                    src1: '../statics/images/home/icon/big/big_1.png',
                    src2: '../statics/images/home/code.png',
                },
                {
                    src1: '../statics/images/home/icon/big/big_1.png',
                    src2: '../statics/images/home/code.png',
                },

            ]
        },
        {
            type: '美妆行业',
            bg: '../statics/images/home/solutionbg/bg_3.jpg',
            brief: '牡丹码物联平台，快速录入产品信息，扫码即可全面了解全部商品信息并溯源产品源头，解决商家与客户之间的信息沟通障碍，增强消费者对门店/企业的忠诚度。',
            brand: [
                {
                    name: '商标1',
                    src: '../statics/images/home/icon/small/small_1.png',
                },
                {
                    name: '商标2',
                    src: '../statics/images/home/icon/small/small_1.png',
                },
                {
                    name: '商标3',
                    src: '../statics/images/home/icon/small/small_1.png',
                },
                {
                    name: '商标4',
                    src: '../statics/images/home/icon/small/small_1.png',
                },
                {
                    name: '商标5',
                    src: '../statics/images/home/icon/small/small_1.png',
                },
            ],
            business: [
                {
                    src1: '../statics/images/home/icon/big/big_1.png',
                    src2: '../statics/images/home/code.png',
                },
                {
                    src1: '../statics/images/home/icon/big/big_1.png',
                    src2: '../statics/images/home/code.png',
                },
        
            ]
        },
      
    ]

    // 背景图片
    var img1 = ''
    var img2 = ''
    for (var i = 0; i < textdata.length; i++) {
        img1 = '<li class="on"><img src="' + textdata[0].bg + '" alt=""></li>'
    };
    for (var i = 1; i < textdata.length; i++) {
        img2 += '<li><img src="' + textdata[i].bg + '" alt=""></li>'
    };
    var img3 = '<ul>' + img1 + img2 + '</ul>'
    // console.log(img3)
    //放入页面的容器显示
    $('#box_down').html(img3);

    // 左侧类别
    var str1 = ''
    var str2 = ''
    for (var i = 0; i < textdata.length; i++) {
        str1 = '<li class="select"><h2>' + textdata[0].type + '</h2></li>'
    };
    for (var i = 1; i < textdata.length; i++) {
        str2 += '<li><h2>' + textdata[i].type + '</h2></li>'
    };
    var str3 = '<ul>' + str1 + str2 + '</ul>'
    // console.log(str3)
    //放入页面的容器显示
    $('#box_up_bottom_left').html(str3);

    // 右侧内容
    var contentone1 = ''
    var contentone2 = ''
    var contentone3 = ''
    var allone = ''
    var content1 = ''
    var content2 = ''
    var content3 = ''
    var all2 = ''
    var all3 = ''
    var all = ''
    for (var i = 0; i < 1; i++) {
        contentone1 = '<li class="on"><div class="solution_item_one"><h2>' + textdata[0].type + '方案</h2>' +
            '<button type="button" class="btn btn-default nav_right_ontrial">查看详情</button>' +
            '</div>' + '<p>' + textdata[0].brief + '</p>'

        for (var j = 0; j < textdata[0].brand.length; j++) {
            contentone2 += '<div class="solution_item_small_item"><img src="' + textdata[0].brand[j].src + '" alt="">' +
                '<span>' + textdata[0].brand[j].name + '</span></div>'
        }
        for (var k = 0; k < textdata[0].business.length; k++) {
            contentone3 += '<div class="solution_item_big_item"><img src="' + textdata[0].business[k].src1 +
                '" alt=""><div class="solution_item_big_up"><img src="' + textdata[0].business[k].src2 +
                '" alt=""></div></div>'
        }
        allone = contentone1 + '<div class="solution_item_small">' + contentone2 + '</div><div class="solution_item_big">' + contentone3 + '</div></li>'
    }
    for (var i = 1; i < textdata.length; i++) {
        content1 = '<li><div class="solution_item_one"><h2>' + textdata[i].type + '方案</h2>' +
            '<button type="button" class="btn btn-default nav_right_ontrial">查看详情</button>' +
            '</div>' + '<p>' + textdata[i].brief + '</p>'
        for (var j = 0; j < textdata[i].brand.length; j++) {
            content2 += '<div class="solution_item_small_item"><img src="' + textdata[i].brand[j].src + '" alt="">' +
                '<span>' + textdata[i].brand[j].name + '</span></div>'
        }
        for (var k = 0; k < textdata[i].business.length; k++) {
            content3 += '<div class="solution_item_big_item"><img src="' + textdata[i].business[k].src1 +
                '" alt=""><div class="solution_item_big_up"><img src="' + textdata[i].business[k].src2 +
                '" alt=""></div></div>'
        }
        all2 = content1 + '<div class="solution_item_small">' + content2 + '</div><div class="solution_item_big">' + content3 + '</div></li>'
        all3 += all2
        content1 = ''
        content2 = ''
        content3 = ''
    }
    // console.log(all2)
    // console.log(all3)
    all = '<ul>' + allone + all3 + '</ul>'
    $('#box_up_bottom_right').html(all);
}
qwe()