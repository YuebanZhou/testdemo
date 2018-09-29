(function (fb) {
    var Pipe = function (ctx, topImg, botImg, x) {
        this.ctx = ctx;
        this.topImg = topImg;
        this.botImg = botImg;
        /*留空白的区域*/
        this.x = x + 400;
        /*速度*/
        this.speed = 3;
        /*管道上下距离*/
        this.space = 200;
        /*图片的高度*/
        this.imgHeight = this.topImg.height;
        this.imgWidth = this.topImg.width;
        /*初始化管道高度*/
        this.initHeight();
    }
    Pipe.prototype.draw = function () {
        /*绘制*/
        this.ctx.drawImage(this.topImg, this.x, this.topY);
        this.ctx.drawImage(this.botImg, this.x, this.botY);

        /*绘制路径*/
        this.ctx.rect(this.x, this.topY,this.imgWidth,this.imgHeight);
        this.ctx.rect(this.x, this.botY,this.imgWidth,this.imgHeight);

        /*动起来*/
        this.x -= this.speed;
        /*判断出去了*/
        if (this.x <= -this.topImg.width) {
            this.x += 6 * 3 * this.topImg.width;
        }
    }
    Pipe.prototype.initHeight = function () {
        /*计算一个随机的上面图片的坐标*/
        var randomH = 80 * Math.random();
        var minH = 140;
        var h = randomH + minH;
        this.topY = -this.imgHeight + h;
        /*下面图片的坐标*/
        this.botY = h + this.space;
    }
    fb.Pipe = Pipe;
})(fb)
