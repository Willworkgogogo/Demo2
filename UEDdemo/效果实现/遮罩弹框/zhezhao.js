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
        zhezhao.style.width = scrollWidth + "px";
        zhezhao.style.height = scrollHeight + "px";
        document.body.appendChild(zhezhao);

        //居中弹框
        var alertBox = document.createElement("div");
        alertBox.className = "alert-box";
        //绝对定位的left，top值； (总宽-div宽)/2
        alertBox.style.left = (clientWidth - 500)/2;
        alertBox.style.top = (clientHeight - 300)/2;
    }
}