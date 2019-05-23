$(document).ready(function() {
    var data = [
      {
        src: "./img/channel_1.jpg",
        class:"glyphicon glyphicon-asterisk",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      },
      {
        src: "./img/channel_2.jpg",
        class:"glyphicon glyphicon-cloud",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      },
      {
        src: "./img/channel_3.jpg",
        class:"glyphicon glyphicon-music",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      },
      {
        src: "./img/channel_4.jpg",
        class:"glyphicon glyphicon-film",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      },
      {
        src: "./img/channel_5.jpg",
        class:"glyphicon glyphicon-signal",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      },
      {
        src: "./img/channel_6.jpg",
        class:"glyphicon glyphicon-road",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      },
      {
        src: "./img/channel_7.jpg",
        class:"glyphicon glyphicon-gift",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      },
      {
        src: "./img/channel_8.jpg",
        class:"glyphicon glyphicon-cutlery",
        header: "Mercedes-Benz",
        cont:
          "The German car brand Mercedes Benz, a hundred years of civilization, automobile pioneer and leader, is considered one of the most successful luxury car brand, its exquisite technology and excellent reach the peak of perfection of the quality standards, the new innovation ability, as well as a series of classic coupe style admirable."
      }
    ];
    var str = "";
    for (var i = 0; i < data.length; i++) {
      str +=
        '<div class="block">' +
          '<img src="'+data[i].src+'" alt="" />' +
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
     $(".box .block").on("mouseenter",function(){
       $(".box .block").removeClass("active");
       $(this).addClass("active");
     })
     $(".box .block").on("mouseleave",function(){
        $(this).removeClass("active");
    })
  });
  