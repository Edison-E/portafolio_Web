$("#cambiar").click(() => {
    var cambio = $("#cambiar").html();
    if (cambio === "☽") {
        $("#cambiar").empty();
        $("#cambiar").css("text-align", "right");
        $("#cambiar").html("☼");
        $("body").css("background-color", "black");
        $(".barra_nav").css("color", "white");
        $(".nombre").css("color", "white");
    } else if (cambio === "☼") {
        $("#cambiar").empty();
        $("#cambiar").css("text-align", "left");
        $("#cambiar").html("☽");
        $("body").css("background-color", "white");
        $(".contenido_secundario div p").css("color", "black")
        $(".barra_nav").css("color", "black");
        $(".nombre").css("color", "black");
        $("#javascript, #html, #css, #java, #sqlPl").hover(
            function () {
                $(this).css("box-shadow", "0 10px 10px 10px black")
            },
            function () {
                $(this).css("box-shadow", "none")
            }
        );
        $("#proyecto_uno, #proyecto_dos").hover(
            function () {
                $(this).css("box-shadow", "0 10px 10px 10px black")
            },
            function () {
                $(this).css("box-shadow", "none")
            }
        );

        $("#enviar").hover(
            function () {
                $(this).css("box-shadow", "0 10px 10px 10px black")
            }, function () {
                $(this).css("box-shadow", "none")
            }
        );
    }
});