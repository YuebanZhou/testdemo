$(document).ready(function() {
    var data = [
      {
        color: "#F57575",
        class:"glyphicon glyphicon-asterisk",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      },
      {
        color: "#A270BE",
        class:"glyphicon glyphicon-cloud",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      },
      {
        color: "#7081BC",
        class:"glyphicon glyphicon-music",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      },
      {
        color: "#95BD71",
        class:"glyphicon glyphicon-film",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      },
      {
        color: "#71BDAA",
        class:"glyphicon glyphicon-signal",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      },
      {
        color: "#BDA271",
        class:"glyphicon glyphicon-road",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      }
    ];
    var str = "";
    for (var i = 0; i < data.length; i++) {
      str +=
        '<div class="block" style="background-color:'+data[i].color+'">' +
        '<p>Picture information '+i+'</p>'+
          '<div class="msg">' +
              '<i class="'+data[i].class+'"></i>' +
              ' <div class="text">' +
                  '<div class="header">'+data[i].header+'</div>' +
                  '<div class="cont">'+data[i].cont+'</div>' +
              "</div>" +
          "</div>" +
        "</div>";
    }
    $(".box").html(str);
     $(".box .block").on("click",function(){
        if($(this).hasClass("active")) {
            $(this).removeClass("active");
        }else {
            $(".box .block").removeClass("active")
            $(this).addClass("active");
        }
     })
     
  });
  