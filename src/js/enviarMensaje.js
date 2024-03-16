$("#enviar").click(function (e) {
    alert("abriendo correo...")
    window.location.href = $(this).attr('href');
});

$("#enviar").mouseenter(function () {
    var valor = "0 15px 15px 15px white";
    $(this).css("box-shadow", valor);
});

$("#enviar").mouseleave(function () {
    var valor = "none";
    $(this).css("box-shadow", valor);
});