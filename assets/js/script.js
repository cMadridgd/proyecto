function abrirVentana_a() {
    let url = "assets/sub/mexico.html";
    abrirVentana(url);
}

function abrirVentana_b() {
    let url = "assets/sub/brasil.html";
    abrirVentana(url);
}

function abrirVentana_c() {
    let url = "assets/sub/amsterdam.html";
    abrirVentana(url);
}

function abrirVentana(url) {
    if (url) {
        window.open(url, "_blank", "width=600,height=450");
    }
}