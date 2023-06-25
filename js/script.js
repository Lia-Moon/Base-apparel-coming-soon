/* const emailInputValue = document.getElementById("emailInput").value; */
const emailInput = document.querySelector(".content__form");
const formAlert = document.querySelector(".content__form--alert");

function mensagemDeAlerta() {
    if(!formAlert.classList.contains('display')) {
        formAlert.classList.add('display');
    } else {
        formAlert.classList.remove('display');
    }
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        alert("E-mail valido");
    }
    else {
        alert("E-mail invalido");
    }
}