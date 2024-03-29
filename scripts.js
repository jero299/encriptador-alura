const campoTexto = document.querySelector("#texto");
const campoMensaje = document.querySelector("#campo-mensaje");
const contenedorMensaje = document.querySelector(".contenerdor-mensaje-traducido");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(campoTexto.value);
    campoMensaje.value = textoEncriptado;
    contenedorMensaje.style.display = "flex";
    document.querySelector(".campo-mensaje").style.display = "block";
    document.querySelector(".boton-copiar").style.display = "block";

    ocultarElementos();
    
}

function btndesencriptar(){
    const textoEncriptado = desencriptar(campoTexto.value);
    campoMensaje.value = textoEncriptado;
    contenedorMensaje.value = ""
    document.querySelector(".campo-mensaje").style.display = "block";

    ocultarElementos();
}

function encriptar (stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


function ocultarElementos (){
    const img = document.querySelector(".imagen");
    const titulo = document.querySelector(".titulo");
    const parrafo = document.querySelector(".parrafo");

    img.style.display = "none";
    titulo.style.display = "none";
    parrafo.style.display = "none";
}

function copiarTexto() {
    const campoMensaje = document.getElementById("campo-mensaje");
    campoMensaje.select();
    
    try {
        navigator.clipboard.writeText(campoMensaje.value)
            .then(() => {
                console.log('Texto copiado al portapapeles');
            })
            .catch(err => {
                console.error('Error al copiar texto al portapapeles: ', err);
            });
    } catch (err) {
        console.error('No se pudo acceder al portapapeles: ', err);
    }

    window.getSelection().removeAllRanges();
}

let textarea = document.getElementById("texto");
textarea.addEventListener("input", function() {
    // Convertir todo el texto a minúsculas
    this.value = this.value.toLowerCase();
    // Reemplazar caracteres especiales, acentos y mayúsculas con una cadena vacía
    this.value = this.value.replace(/[^a-z0-9\s]/gi, "");
});

