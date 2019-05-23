// 获取图片数量
var length = $(".imgul").find("li").length;
var p = 1;

$(".left").on("click", function () {
    p = p - 1;
    if (p < 1) {
        p = length;
    };
    var scroll = 300 * (p - 1);
    $(".imgul").css("left", -scroll);
    $(".dot li").removeClass("active");
    $(".dot li").eq(p - 1).addClass("active");
})
$(".right").on("click", function () {
    p = p + 1;
    if (p > length) {
        p = 1;
    };
    var scroll = 300 * (p - 1);
    $(".imgul").css("left", -scroll);
    $(".dot li").removeClass("active");
    $(".dot li").eq(p - 1).addClass("active");
})


$(".dot li").on("click", function () {

    $(".dot li").removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $(".imgul").css("left", -300 * index);
    p = index + 1;  
})

$(".dot li").on("mouseenter", function () {
    var index = $(this).index();
    
    $(".small").css("left", 95 + 20 * index);
    var src=$(".imgul li").eq(index).find("img").attr("src")
    var str="<img src="+src+" alt='' style='width:100%;height:100%'>";
    $(".small").html(str);

    $(".small").show();
})

