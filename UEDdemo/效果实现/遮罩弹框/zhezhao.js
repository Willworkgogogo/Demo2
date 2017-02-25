window.onload = function() {
    var loginBtn = document.querySelector(".login-btn")

    loginBtn.onclick = function() {
        createAlert()
    };

    function createAlert() {
        //获取页面的宽高
        
        var documentElement = document.body ? document.body : document.documentElement
            scrollHeight = documentElement.scrollHeight,
            scrollWidth = documentElement.scrollWidth,
            clientHeight = documentElement.clientHeight,
            clientWidth  = documentElement.clientWidth
 
        //bg层
        var zhezhao = document.createElement("div");
        zhezhao.className = "zhezhao";
        
    }
}