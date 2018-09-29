(function (fb) {
    var Sky = function (ctx, skyImg, x, y) {
        this.ctx = ctx;
        /*天空图片*/
        this.img = skyImg;
        /*速度*/
        this.speed = 3;
        /*绘制的位置*/
        this.x = x;
        this.y = y;
    }
    Sky.prototype.draw = function () {
        this.ctx.drawImage(this.img, this.x, this.y);
        /*动起来*/
        this.x -= this.speed;
        /*如果离开的画布*/
        if (this.x <= -this.ctx.canvas.width) {
            //this.x = this.ctx.canvas.width;
            this.x += 2 * this.ctx.canvas.width;
        }
    }
    fb.Sky = Sky;
})(fb)