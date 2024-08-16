let textoEntrada;
let mensaje;
let palabraConAcentos;

condicionesIniciales();

//Función para asignar el Texto a los parrafos
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function btnEncriptar() {
  palabraConAcentos = false;
  /* textoEntrada = document.getElementById("principal__ingreso-texto").value;
  alert(textoEntrada[0]);
  return (document.querySelector("#valorUsuario").value = ""); */
  textoEntrada = document.querySelector(".container__input");
  mensaje = document.querySelector("#bodyElement");
  acentos(textoEntrada.value);
  if (palabraConAcentos == true) {
    textoEntrada.value = "";
    asignarTextoElemento(
      "p",
      "Ingresó un carácter especial, solo letras minúsculas y sin acentos"
    );
    changeBackgroundImage();
  } else {
    mensaje.value = encriptar(textoEntrada.value);
    condicionesIniciales();
    mensaje.style.backgroundImage = "none";
  }
}

function btnDesencriptar() {
  textoEntrada = document.querySelector(".container__input");
  mensaje = document.querySelector(".container__area__resultado");
  mensaje.value = desencriptar(textoEntrada.value);
  textoEntrada.value = "";
  mensaje.style.backgroundImage = "none";
}

function copiar() {
  mensaje = document.querySelector(".container__area__resultado").value;
  alert(mensaje.toLowerCase());
}

function copy() {
  let textarea = document.querySelector(".container__area__resultado");
  textarea.select();
  textarea.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
}

function acentos(stringTexto) {
  let arrayOfSp = [
    //"!",
    "@",
    "#",
    "$",
    "%",
    "&",
    "*",
    "_",
    "-",
    "?",
    "á",
    "à",
    "ā",
    "ă",
    "ą",
    "ä",
    "é",
    "è",
    "ē",
    "ë",
    "í",
    "î",
    "ï",
    "ĩ",
    "ó",
    "ö",
    "ú",
    "ù",
    "û",
    "ů",
    "ü",
    "ĝ",
    "ġ",
    "ń",
    "ñ",
    "š",
    "ŝ",
    "ś",
    "ŷ",
    ".",
    "  ",
    ":",
    ";",
  ];

  stringTexto = stringTexto.toLowerCase();
  for (let i = 0; i < arrayOfSp.length; i++) {
    if (stringTexto.includes(arrayOfSp[i])) {
      /*alert("carácter especial");*/
      return (palabraConAcentos = true);
    }
  }
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function desencriptar(stringDesencriptar) {
  let matrizCodigo = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];
  stringDesencriptar = stringDesencriptar.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptar.includes(matrizCodigo[i][0])) {
      stringDesencriptar = stringDesencriptar.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringDesencriptar;
}

function condicionesIniciales() {
  asignarTextoElemento("p", "Solo letras minúsculas y sin acentos");
  //textoEntrada.value = "";
}

function changeBackgroundImage() {
  mensaje = document.querySelector("#bodyElement");
  mensaje.style.backgroundImage = "url(assets/Muñeco.png)";
  mensaje.value = "";
}
