//  基于jQuery写插件
(function (){
    // 扩展$的方法
    jQuery.extend({
        // 求出最小值
        min: function (a,b){
            return a < b ? a : b
        },
        // 求出最大值
        max: function (a,b){
            return a > b ? a : b
        },
        // 去除字符串左边的空格
        leftTrim: function (str){
            return str.replace(/^\s+/,'')
        },
        // 去除字符串右边的空格
        rightTrim: function (str){
            return str.replace(/\s+$/,'')
        }
    })
    // 扩展jQuery对象的方法
    jQuery.fn.extend({
        // 全选
        checkAll: function (){
            this.prop('checked',true)   // this是jQuery对象
        },
        // 全不选
        unCheckAll: function (){
            this.prop('checked',false)
        },
        // 反选
        reverseCheck: function (){
            // this是jQuery对象
            this.each(function (){
                // this是dom元素
                this.checked = !this.checked
            })
        }
    })
})()