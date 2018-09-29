(function (fb) {
    var Game = function () {
        this.ctx = document.querySelector('canvas').getContext('2d');
        /*游戏执行的命令*/
        this.running = true;
    }
    Game.prototype.init = function () {
        this.gameStart();
    }
    Game.prototype.gameStart = function () {
        var that = this;
        /*必须资源加载完成*/
        var imageLoad = new fb.ImageLoad();
        imageLoad.loadImage(function (imgList) {
            var initList = [];
            /*初始化天空*/
            for (var i = 0; i < 2; i++) {
                var sky = new fb.Sky(that.ctx, imgList['sky'], i*that.ctx.canvas.width, 0);
                initList.push(sky);
            }
            /*初始化管道 */
            var topImg = imgList['pipe2'];
            var botImg = imgList['pipe1'];
            for (var i = 0; i < 6; i++) {
                var pipe = new fb.Pipe(that.ctx, topImg, botImg, i * 3 * topImg.width);
                initList.push(pipe);
            }
            /*初始化陆地*/
            var landImg = imgList['land'];
            for (var i = 0; i < 4; i++) {
                var land = new fb.Land(that.ctx, landImg, i * landImg.width);
                initList.push(land);
            }
            /*初始鸟*/
            var bird = new fb.Bird(that.ctx,imgList['birds']);
            initList.push(bird);

            var animation = function () {
                /*清除画布*/
                that.ctx.clearRect(0, 0, that.ctx.canvas.width, that.ctx.canvas.height);
                /*开启新路径*/
                that.ctx.beginPath();

                /*动画需要定时任务*/
                /*绘制天空*/
                /*绘制管道*/
                /*绘制陆地*/
                /*绘制小鸟*/
                initList.forEach(function (item) {
                    item.draw();
                })

                /*游戏规则*/
                /*1.碰到地面  gameover*/
                if(bird.y > that.ctx.canvas.height - landImg.height){
                    that.running = false;
                }
                /*2.碰到天花板  gameover*/
                if(bird.y < 0){
                    that.running = false;
                }
                /*3.碰到管道  gameover*/
                if(that.ctx.isPointInPath(bird.x,bird.y)){
                    that.running = false;
                }

                if(that.running){
                    requestAnimationFrame(animation);
                }
            }
            animation();
        })
    }

    fb.Game = Game;
})(fb);
