window.onload = function() {
    var loginBtn = document.querySelector(".login-btn")
    

    loginBtn.onclick = function() {
        createAlert();

        var zhezhao = document.querySelector(".zhezhao"),
            closeBtn = document.querySelector(".close-btn"),
            alertBox = document.querySelector(".alert-box")
        
        //关闭
        zhezhao.onclick = closeBtn.onclick = removeZhezhao;
        
        //esc 关闭
        document.onkeydown = function(ev) {
            var ev = ev || window.event;
            if(document.querySelector(".zhezhao")){
                if (ev.keyCode == 27) {
                    removeZhezhao();
                }
            }
        }

        //removeZhezhao 移除节点
        function removeZhezhao() {
            var body = document.querySelector("body");
            body.removeChild(zhezhao);
            body.removeChild(alertBox);
        }
    };

    function createAlert() {
        //获取页面的宽高
        var documentElement = document.body ? document.body : document.documentElement
            scrollHeight = documentElement.scrollHeight,
            scrollWidth = documentElement.scrollWidth,
            clientHeight = document.documentElement.clientHeight,
            clientWidth  = document.documentElement.clientWidth
 
        //bg层
        var zhezhao = document.createElement("div");
        zhezhao.className = "zhezhao";
        zhezhao.style.width = scrollWidth + "px";
        zhezhao.style.height = scrollHeight + "px";
        document.body.appendChild(zhezhao);

        //居中弹框
        var alertBox = document.createElement("div"),
            closeBtn = document.createElement("span")

        alertBox.className = "alert-box";
        closeBtn.className = "close-btn";
        closeBtn.innerHTML = "close";
        alertBox.appendChild(closeBtn);

        //绝对定位的left，top值； (总宽-div宽)/2
        alertBox.style.left = (clientWidth - 500)/2 + "px";
        alertBox.style.top = (clientHeight - 300)/2 + "px";
        document.body.appendChild(alertBox);
    }
}