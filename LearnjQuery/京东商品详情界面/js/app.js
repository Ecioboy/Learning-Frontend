/*
* 1.鼠标移入显示，移出隐藏
* 目标：手机京东，客户服务，网站导航，我的京东，去购物车结算，全部商品
* 2.鼠标移动切换二级导航菜单的切换显示和隐藏*/

$(function (){
    // 1.鼠标移入显示，移出隐藏
    showHide()
    // 第一种
    /*
    function showHide(){
        // 手机京东
        $('#app_jd').hover(function (){
            $('#app_jd_items').css({display: 'block'})
        },function (){
            $('#app_jd_items').css({display: 'none'})
        })
        // 客户服务
        $('#service').hover(function (){
            $('#service_items').css({display: 'block'})
        },function (){
            $('#service_items').css({display: 'none'})
        })
        // 网站导航
        $('#site_nav').hover(function (){
            $('#site_nav_items').css({display: 'block'})
        },function (){
            $('#site_nav_items').css({display: 'none'})
        })
        // 我的京东
        $('#my_jd').hover(function (){
            $('#my_jd_items').css({display: 'block'})
        },function (){
            $('#my_jd_items').css({display: 'none'})
        })
        // 去购物车结算
        $('#settle_up').hover(function (){
            $('#settle_up_items').css({display: 'block'})
        },function (){
            $('#settle_up_items').css({display: 'none'})
        })
        // 全部商品
        $('#category').hover(function (){
            $('#category_items').css({display: 'block'})
        },function (){
            $('#category_items').css({display: 'none'})
        })
    }
    */
    // 第二种
    function showHide(){
        $('[name=show_hide]').hover(function (){    // 显示
            var id = this.id + '_items'
            //$('#'+id).css({display: 'block'})
            $('#'+id).show()
        },function (){  // 隐藏
            id = this.id + '_items'
            // $('#'+id).css({display: 'none'})
            $('#'+id).hide()
        })
    }

    // 2.鼠标移动切换二级导航菜单的切换显示和隐藏
    subBox()
    function subBox(){
        $('#category_items>div').hover(function (){
            $(this).children(':last').show()
        },function (){
            $(this).children(':last').hide()
        })
    }

    // 3.输入搜索关键词，列表显示匹配的结果
    search()
    function search(){
        $('#txtSearch')
            .on('keyup focus',function (){
                // 如果输入框有文本才显示列表
                var txt = this.value.trim()
                if (txt){
                    $('#search_helper').show()
                }
        })
            .blur(function (){
                // 隐藏列表
                $('#search_helper').hide()
            })
    }

    // 4.点击显示或者隐藏更多的分享图标
    share()
    function share(){
        var isOpen = false  //标识当前的状态(初始为关闭)
        var $shareMore = $('#shareMore')
        var $parent = $shareMore.parent()
        var $as = $shareMore.prevAll('a:lt(2)')
        var $b = $shareMore.children()
        $shareMore.click(function (){
            if (isOpen){
                isOpen = false
                $parent.css({width: "155"})
                $as.hide()
            }else {
                isOpen = true
                $parent.css({width: "200"})
                $as.show()
            }

            // isOpen = !isOpen
        })
    }

    // 5.鼠标移入移出切换地址的显示隐藏
    select()
    function select(){
        $('#store_select').hover(function (){
            $('#store_content').show()
        },function (){
            $('#store_content').hide()
        })

        $('#store_close').click(function (){
            $('#store_content').hide()
        })

    }

    // 6.点击切换tab
    clickTabs()
    function clickTabs(){
        $('#store_tabs>li').click(function (){
            $('#store_tabs>li').removeClass('hover')
            this.className = 'hover'
        })
    }

    // 7.鼠标移入移出切换显示迷你购物车
    cart()
    function cart(){
        $('#minicart').hover(function (){
            this.className = 'minicart'
            $(this).children(':last').show()
        },function (){
            this.className = ''
            $(this).children(':last').hide()
        })
    }

    // 8.点击切换产品选项(商品详情等显示出来)
   clickProductTabs()
    function clickProductTabs(){
        var $lis = $('#product_detail>ul>li')
        var $contents = $('#product_detail>div:gt(0)')
        $lis.click(function (){
            $lis.removeClass('current')
            this.className = 'current'
            // 隐藏所有$contents
            $contents.hide()
            // 显示当前对应的content
            var index = $(this).index()
            $contents.eq(index).show()
        })
    }

    // 9.点击向右/向左，移动当前展示商品的小图片


})