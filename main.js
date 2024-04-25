document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let campoA = parseFloat(document.getElementById("campoA").value);
    let campoB = parseFloat(document.getElementById("campoB").value);

    if (!isNaN(campoA) && !isNaN(campoB) && campoB > campoA) {
        document.getElementById("mensagem").textContent =
            "Formulário está válido! Os seus valores cumprem com a regra!";
        document.getElementById("mensagem").style.color = "green";
    } else {
        document.getElementById("mensagem").textContent =
            "Formulário inválido: Ele não atende as regras estabelecidas! O segundo valor deve ser maior que o primeiro!";
        document.getElementById("mensagem").style.color = "red";
    }
});
