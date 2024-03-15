$("#cambiar").click(() => {
    var cambio = $("#cambiar").html();
    if (cambio === "☼") {
        $("#cambiar").empty();
        $("#cambiar").css("text-align", "right");
        $("#cambiar").html("☽");
        $("body").css("background-color", "black");
        $(".barra_nav").css("color", "white");
        $(".nombre").css("color", "white");
    } else if (cambio === "☽") {
        $("#cambiar").empty();
        $("#cambiar").css("text-align", "left");
        $("#cambiar").html("☼");
        $("body").css("background-color", "white");
        $(".barra_nav").css("color", "black");
        $(".nombre").css("color", "black");
    }
});