const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    asignarTextoElemento('p','');
    asignarTextoElemento('h5','');
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    asignarTextoElemento('p','');
    asignarTextoElemento('h5','');
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["o", "ober"], ["u","ufat"], ["a", "ai"], ["i", "imes"],["e", "enter"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }
    return stringDesencriptada;
}


function btnCopiar() {
    const textoCopiado = mensaje;
  
    
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(textoCopiado.value);
    mensaje.value = "";
  }