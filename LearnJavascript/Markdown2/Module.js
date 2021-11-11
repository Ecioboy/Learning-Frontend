(function (){
    //私有数据
    var msg = 'Noi'
    //操作数据的函数
    function doSomething(){
        console.log('doSomething'+msg.toUpperCase())
    }
    function doOtherthing(){
        console.log('doOtherthing'+msg.toLowerCase())
    }

    window.Module2 = {
        doSomething: doSomething,
        doOtherthing: doOtherthing,
        msg: msg
    }
})()