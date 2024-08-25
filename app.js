const textArea = document.querySelector(".ingreso-texto");
const mensaje = document.querySelector (".salida-texto");

 
textArea.addEventListener("input", function() {
    textArea.value = textArea.value.replace(/[^a-z\s]/g, '');
});

function botonEnc() {
   if (textArea.value.trim() === "") {
       alert ("Ingrese texto")
       
   }
   
    else {
    const textoEncripado= encriptar(textArea.value)
    mensaje.value=textoEncripado
    textArea.value= ""
    mensaje.style.backgroundImage= "none"
    }
    
}

function encriptar(stringEncriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){ 
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) 
        }
    }
    return stringEncriptada

}

function botonDes() {
    if (textArea.value.trim() === "") {
        alert ("Ingrese texto")
        
    }
    
    
     else {
    const textoDesencripado= desencriptar(textArea.value)
    mensaje.value=textoDesencripado
    textArea.value= ""
    mensaje.style.backgroundImage= "none"
     }
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
   

    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){ 
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) 
        }
    }
    return stringDesencriptada
}

// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
    if (mensaje.value.trim() === "") {
        alert ("No hay texto para copiar")
        
    }
    
     else {
    mensaje.select(); // Selecciona el texto en el textarea de salida
    document.execCommand('copy'); // Copia el texto seleccionado al portapapeles
   // alert("Texto copiado al portapapeles"); // Opcional: mostrar un mensaje de confirmación
     }
}
