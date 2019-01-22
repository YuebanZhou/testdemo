$(document).ready(function () {
    $(".btn").on("click", function () {
        var j = 0;
        zero2();
        var timer2 = setInterval(function () {
            j += 1;
            
            switch (j) {
                case 1:
                    one2();
                    break;
                case 2:
                    two2();
                    break;
                case 3:
                    three2();
                    break;
                case 4:
                    four2();
                    break;
                case 5:
                    five2();
                    break;
                case 6:
                    six2();
                    break;
                case 7:
                    seven2();
                    break;
                case 8:
                    eight2();
                    break;
                case 9:
                    nine2();
                    clearInterval(timer2);
                    break;
            }
            console.log("j"+j);
        }, 10000)

    })

})

function zero() {
    $(".ge .block").eq(1).removeClass("active");
    $(".ge .block").eq(0).addClass("active");
    $(".ge .block").eq(2).addClass("active");
    $(".ge .block").eq(3).addClass("active");
    $(".ge .block").eq(4).addClass("active");
    $(".ge .block").eq(5).addClass("active");
    $(".ge .block").eq(6).addClass("active");
}

function one() {
    $(".ge .block").eq(0).removeClass("active");
    $(".ge .block").eq(2).removeClass("active");
    $(".ge .block").eq(5).removeClass("active");
    $(".ge .block").eq(6).removeClass("active");
}

function two() {
    $(".ge .block").eq(3).removeClass("active");
    $(".ge .block").eq(0).addClass("active");
    $(".ge .block").eq(1).addClass("active");
    $(".ge .block").eq(2).addClass("active");
    $(".ge .block").eq(5).addClass("active");
}

function three() {
    $(".ge .block").eq(4).removeClass("active");
    $(".ge .block").eq(6).addClass("active");
}

function four() {
    $(".ge .block").eq(0).removeClass("active");
    $(".ge .block").eq(2).removeClass("active");
    $(".ge .block").eq(3).addClass("active");
}

function five() {
    $(".ge .block").eq(5).removeClass("active");
    $(".ge .block").eq(0).addClass("active");
    $(".ge .block").eq(2).addClass("active");
}

function six() {
    $(".ge .block").eq(4).addClass("active");
}

function seven() {
    $(".ge .block").eq(1).removeClass("active");
    $(".ge .block").eq(2).removeClass("active");
    $(".ge .block").eq(3).removeClass("active");
    $(".ge .block").eq(4).removeClass("active");
    $(".ge .block").eq(5).addClass("active");
}

function eight() {
    $(".ge .block").eq(1).addClass("active");
    $(".ge .block").eq(2).addClass("active");
    $(".ge .block").eq(3).addClass("active");
    $(".ge .block").eq(4).addClass("active");
}

function nine() {
    $(".ge .block").eq(4).removeClass("active");
}

function zero2() {
    $(".shi .block").eq(0).addClass("active");
    $(".shi .block").eq(2).addClass("active");
    $(".shi .block").eq(3).addClass("active");
    $(".shi .block").eq(4).addClass("active");
    $(".shi .block").eq(5).addClass("active");
    $(".shi .block").eq(6).addClass("active");
    ge()
}

function one2() {
    $(".shi .block").eq(0).removeClass("active");
    $(".shi .block").eq(2).removeClass("active");
    $(".shi .block").eq(5).removeClass("active");
    $(".shi .block").eq(6).removeClass("active");
    ge()
}

function two2() {
    $(".shi .block").eq(3).removeClass("active");
    $(".shi .block").eq(0).addClass("active");
    $(".shi .block").eq(1).addClass("active");
    $(".shi .block").eq(2).addClass("active");
    $(".shi .block").eq(5).addClass("active");
    ge()
}

function three2() {
    $(".shi .block").eq(4).removeClass("active");
    $(".shi .block").eq(6).addClass("active");
    ge()
}

function four2() {
    $(".shi .block").eq(0).removeClass("active");
    $(".shi .block").eq(2).removeClass("active");
    $(".shi .block").eq(3).addClass("active");
    ge()
}

function five2() {
    $(".shi .block").eq(5).removeClass("active");
    $(".shi .block").eq(0).addClass("active");
    $(".shi .block").eq(2).addClass("active");
    ge()
}

function six2() {
    $(".shi .block").eq(4).addClass("active");
    ge()
}

function seven2() {
    $(".shi .block").eq(1).removeClass("active");
    $(".shi .block").eq(2).removeClass("active");
    $(".shi .block").eq(3).removeClass("active");
    $(".shi .block").eq(4).removeClass("active");
    $(".shi .block").eq(5).addClass("active");
    ge()
}

function eight2() {
    $(".shi .block").eq(1).addClass("active");
    $(".shi .block").eq(2).addClass("active");
    $(".shi .block").eq(3).addClass("active");
    $(".shi .block").eq(4).addClass("active");
    ge()
}

function nine2() {
    $(".shi .block").eq(4).removeClass("active");
    ge()
}

function ge() {
    zero();
    var i = 0;
    var timer = setInterval(function () {
        i += 1;
        
        switch (i) {
            case 1:
                one();
                break;
            case 2:
                two();
                break;
            case 3:
                three();
                break;
            case 4:
                four();
                break;
            case 5:
                five();
                break;
            case 6:
                six();
                break;
            case 7:
                seven();
                break;
            case 8:
                eight();
                break;
            case 9:
                nine();
                clearInterval(timer);
                break;
        }
        console.log("i"+i);
    }, 1000)
}