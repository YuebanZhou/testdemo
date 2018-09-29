(function (fb) {
    var Bird = function (ctx, birdImg) {
        this.ctx = ctx;
        this.birdImg = birdImg;
        /*默认的绘制坐标*/
        this.x = 100;
        this.y = 100;
        /*鸟的尺寸*/
        this.birdWidth = this.birdImg.width / 3;
        this.birdHeight = this.birdImg.height;
        /*图片索引*/
        this.index = 0;
        /*申明一些运动参数*/
        this.v0 = 0;
        this.acc = 0.0005;
        this.startTime = Date.now();
        /*定义最大速度*/
        this.maxSpeed = 0.3;
        /*定义最大角度*/
        this.maxAngle = Math.PI / 4;
        /*初始化飞行的事件*/
        this.initFly();
    }
    Bird.prototype.draw = function () {
        /*保存正常坐标*/
        this.ctx.save();

        /*移动坐标*/
        this.ctx.translate(this.x, this.y);
        /*自由落体*/
        var currentTime = Date.now();
        var deltaTime = currentTime - this.startTime;
        /*下次计算的开始时间*/
        this.startTime = currentTime;
        /*计算下落高度*/
        var h = this.v0 * deltaTime + this.acc * deltaTime * deltaTime / 2;
        /*计算坐标*/
        this.y += h;
        /*下次计算的初始速度*/
        this.v0 += this.acc * deltaTime;

        /*坠落效果*/
        var angle = this.v0 / this.maxSpeed * this.maxAngle;
        if(angle > this.maxAngle){
            angle = this.maxAngle;
        }
        this.ctx.rotate(angle);

        /*翅膀动画*/
        this.ctx.drawImage(
            this.birdImg,
            this.index * this.birdWidth,
            0,
            this.birdWidth,
            this.birdHeight,
            -this.birdWidth / 2,
            -this.birdHeight / 2,
            this.birdWidth,
            this.birdHeight
        )
        this.index++;
        if (this.index > 2) {
            this.index = 0;
        }

        /*恢复正常坐标*/
        this.ctx.restore();
    }
    Bird.prototype.initFly = function () {
        var that = this;
        /*点击飞*/
        this.ctx.canvas.onclick = function () {
            that.v0 = - 0.3;
        }
    }
    fb.Bird = Bird;
})(fb)