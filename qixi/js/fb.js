(function (w) {
    /*申明空间*/
    w.fb = {};
    /*图片对象*/
    var ImageLoad = function () {

    };
    ImageLoad.prototype.loadImage = function (callback) {
        /*图片路径*/
        var imgList = ['birds', 'land', 'pipe1', 'pipe2', 'sky'];
        /*图片对象*/
        var imgListObject = {};
        /*记录图片加载张数*/
        var index = 0;
        imgList.forEach(function (item) {
            var img = new Image();
            img.onload = function () {
                index++;
                imgListObject[item] = img;
                if (index == imgList.length) {
                    /*什么时候图片都加载完成*/
                    callback && callback(imgListObject);
                }
            }
            img.src = 'img/' + item + '.png';
        });
    }
    fb.ImageLoad = ImageLoad;
})(window);