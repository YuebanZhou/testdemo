function WriteFont(id, options) {
    var self = this;
    // 对canvas进行基础的设置
    this.canvas = document.getElementById(id);
    var obj = {
        canvas: this.canvas,
        context: this.canvas.getContext("2d"),
        isWrite: false,
        lastWriteTime: -1,
        lastWriteSpeed: 0,
        lastWriteWidth: 0,
        canvasWidth: 600,
        canvasHeight: 600,
        isShowBorder: true,
        bgColor: '#fff',
        borderWidth: 6,
        borderColor: 'red',
        lastPoint: {},
        writeWidth: 6,
        maxWriteWidth: 30,
        minWriteWidth: 1,
        writeColor: '#000'
    }

    for (var name in options) {
        obj[name] = options[name];
    }
    // 设置线的宽度
    this.setLineWidth = function () {
        // 获取当前的时刻
        var nowTime = new Date().getTime();
        // 时间差是当前时间减去上次结束时间
        var diffTime = nowTime - obj.lastWriteTime;
        // 这次画线的时候，把当前时间赋给结束时间
        obj.lastWriteTime = nowTime;
        var returnNum = obj.minWriteWidth + (obj.maxWriteWidth - obj.minWriteWidth) * diffTime / 30;
        if (returnNum < obj.minWriteWidth) {
            returnNum = obj.minWriteWidth;
        } else if (returnNum > obj.maxWriteWidth) {
            returnNum = obj.maxWriteWidth;
        }
        returnNum = returnNum.toFixed(2);
        obj.context.lineWidth = obj.lastWriteWidth = obj.lastWriteWidth / 4 * 3 + returnNum / 4;
    }

    this.writing = function (point) {

        obj.context.beginPath();
        obj.context.moveTo(obj.lastPoint.x, obj.lastPoint.y);
        obj.context.lineTo(point.x, point.y);
        self.setLineWidth();
        obj.context.stroke();
        obj.lastPoint = point;
        obj.context.closePath();
    }

    this.writeContextStyle = function () {
        obj.context.beginPath();
        obj.context.strokeStyle = obj.writeColor;
        obj.context.lineCap = 'round';
        obj.context.lineJoin = "round";
    }

    this.writeBegin = function (point) {
        obj.isWrite = true;
        obj.lastWriteTime = new Date().getTime();
        obj.lastPoint = point;
        self.writeContextStyle();
    }

    this.writeEnd = function () {

        obj.isWrite = false;
    }
    // 清理画布事件
    this.canvasClear = function () {
        obj.context.save();
        obj.context.strokeStyle = '#fff';
        obj.context.clearRect(0, 0, obj.canvasWidth, obj.canvasHeight);
        if (obj.isShowBorder) {
            console.log('show border');
            obj.context.beginPath();
            var size = obj.borderWidth / 2;
            //画外面的框
            obj.context.moveTo(size, size);
            obj.context.lineTo(obj.canvasWidth - size, size);
            obj.context.lineTo(obj.canvasWidth - size, obj.canvasHeight - size);
            obj.context.lineTo(size, obj.canvasHeight - size);
            obj.context.closePath();
            obj.context.lineWidth = obj.borderWidth;
            obj.context.strokeStyle = obj.borderColor;
            obj.context.stroke();
            //画里面的框
            obj.context.moveTo(0, 0);
            obj.context.lineTo(obj.canvasWidth, obj.canvasHeight);
            obj.context.lineTo(obj.canvasWidth, obj.canvasHeight / 2);
            obj.context.lineTo(obj.canvasWidth, obj.canvasHeight / 2);
            obj.context.lineTo(0, obj.canvasHeight / 2);
            obj.context.lineTo(0, obj.canvasHeight);
            obj.context.lineTo(obj.canvasWidth, 0);
            obj.context.lineTo(obj.canvasWidth / 2, 0);
            obj.context.lineTo(obj.canvasWidth / 2, obj.canvasHeight);
            obj.context.stroke();

        }
        obj.context.restore();
    }
    // 初始化事件，设定宽高
    this.canvasInit = function () {
        this.canvas.width = obj.canvasWidth;
        this.canvas.height = obj.canvasHeight;
    }
    // 鼠标按下事件，执行writeBegin函数
    this.canvas.addEventListener('mousedown', function (e) {
        // 获取当前点的坐标，将这个坐标传给writeBegin函数
        var point = {
            x: e.offsetX || e.clientX,
            y: e.offsetY || e.clientY
        };
        self.writeBegin(point);
    });
    // 鼠标抬起事件，执行writeEnd函数
    this.canvas.addEventListener('mouseup', function (e) {
        // 获取当前点的坐标，将这个坐标传给writeEnd函数
        var point = {
            x: e.offsetX,
            y: e.offsetY
        };
        self.writeEnd(point);
    });
    // 鼠标离开事件，执行writeEnd函数
    this.canvas.addEventListener('mouseleave', function (e) {
        // 获取当前点的坐标，将这个坐标传给writeEnd函数
        var point = {
            x: e.offsetX,
            y: e.offsetY
        };
        self.writeEnd(point);
    });
    // 鼠标移动事件，执行writing函数
    this.canvas.addEventListener('mousemove', function (e) {
        // 如果是正在画图事件，将坐标点的集合传给函数
        if (obj.isWrite) {
            var point = {
                x: e.offsetX,
                y: e.offsetY
            };

            self.writing(point);
        }
    });
    // 默认执行初始化和清理事件
    this.canvasInit();
    this.canvasClear();

    this.option = obj;
    obj.control = {
        clearCanvas: self.canvasClear
    };
}
// 执行这个函数，进行传参
var writeCanvas = new WriteFont('canvas', {
    borderWidth: 10,
    borderColor: '#ff6666'
});

// 点击清空按钮，执行函数
document.getElementById('clear').onclick = function () {
    writeCanvas.option.control.clearCanvas();
}
document.getElementById('clear1').onclick = function () {
    writeCanvas1.option.control.clearCanvas();
}