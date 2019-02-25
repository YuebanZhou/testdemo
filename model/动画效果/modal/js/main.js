$(document).ready(function () {
    $(".btn").on("click", function () {
        // modal元素的类名，如果不止一个，则只保留一个
        if ($(".modal").attr("class").length > 5) {
            $(".modal").attr("class", "modal");
        }
        if ($(".container").attr("class").length > 9) {
            $(".container").attr("class", "container");
        }
        $(".modal").css("display", "block");
        var num = $(this).attr("class").split(" ")[1].split("n")[1];
        var str = "";
        str += `
        <div>
            <div class="head">Modal Dialog</div>
            <div class="content">
                <p>This is a modal window. You can do the following things with it:</p>
                <ul>
                    <li>Read: modal windows will probably tell you something important so don't forget to read what they say.</li>
                    <li>Look: a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                    <li>Close: click on the button below to close the modal.</li>
                </ul>
            </div>
            <div class="foot">
                <div class="close">CLOSE ME!</div>
            </div>
        </div>
        `
        $(".modal").html(str);
        $(".modal>div").addClass("modal" + num);
        $(".modal").addClass("masker");
        if (num == 12) {
            $(".container").addClass("masker12");
        } else if (num == 16) {
            $(".container").addClass("masker16");
        } else if (num == 17) {
            $(".container").addClass("masker17");
        } else if (num == 18) {
            $(".container").addClass("masker18");
        } else if (num == 19) {
            $(".container").addClass("masker19");
        }

    });
    $(".modal").on("click", ".close", function () {
        var num = $(this).parent().parent().attr("class").split("l")[1];
        $(".modal>div").attr("class", "close" + num);
        $(".modal").removeClass("masker");
        $(".modal").addClass("closemasker");
        $(".container").attr("class", "container");
        if (num == 12) {
            $(".container").addClass("closemasker12");
        } else if (num == 16) {
            $(".container").addClass("closemasker16");
        } else if (num == 17) {
            $(".container").addClass("closemasker17");
        } else if (num == 18) {
            $(".container").addClass("closemasker18");
        } else if (num == 19) {
            $(".container").addClass("closemasker19");
        }
        setTimeout(function () {
            $(".modal").html("");
            $(".modal").css("display", "none");

        }, 1000)
    })

})