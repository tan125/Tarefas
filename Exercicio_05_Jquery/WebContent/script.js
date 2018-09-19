function funcao() {
    var soma = 0.0;
    var prato = parseFloat(document.forms["form"]["prato"].value);
    var convenio = parseFloat(document.forms["form"]["convenio"].value);
    var obs = document.forms["form"]["obs"].value;

    var acompanhamento = document.getElementsByName("acompanhamento");
    for (var i = 0; i < acompanhamento.length; i++) {
        if (acompanhamento[i].checked) {
            soma += parseFloat(acompanhamento[i].value);
        }
    }
    alert("Valor Final: R$ " + ((prato + soma) * convenio).toFixed(2) + "\nOBS: " + obs);
}
