$("#cambiar").click(() => {
    var cambio = $("#cambiar").html();
    if (cambio === "☼") {
        $("#cambiar").empty();
        $("#cambiar").css("text-align", "right");
        $("#cambiar").html("☽");
        $("body").css("background-color", "black");
        $(".contenido_skills").css("background-image", "url(../../img/fondoSkills.png)")
        $(".barra_nav").css("color", "white");
        $(".nombre").css("color", "white");
    } else if (cambio === "☽") {
        $("#cambiar").empty();
        $("#cambiar").css("text-align", "left");
        $("#cambiar").html("☼");
        $("body").css("background-color", "white");
        $(".contenido_secundario div p").css("color","black")
        $(".contenido_skills").css("background-image", "url(../../img/fondoSKILL.png)")
        $(".barra_nav").css("color", "black");
        $(".nombre").css("color", "black");
    }
});