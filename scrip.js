const caja1 = document.querySelector(".caja1");
const mensaje2 = document.querySelector(".mensaje2");
const copia = document.querySelector(".copiar");


function botonEncriptar(){
    const textoEncriptado = encriptar(caja1.value) //conectar la funcion y y con el value capturar el texto escrito //
    mensaje2.value = textoEncriptado //pasarle el texto capturado de un imput a otro//
    caja1.value = ""; //inicializar en cero//
    document.getElementById("imagensinfondo").style.display = "none" //ocultar imagen//
   
}
function encriptar(encriptacion) {
   
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; //pasarle los nuevos valores para encriptar el texto//
    encriptacion = encriptacion.toLowerCase() // tolowercase es para solo escribir en minusculas//
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        
        if (encriptacion.includes(matrizCodigo[i][0])) {
            encriptacion = encriptacion.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return encriptacion
}

    function botonDesencriptar(){
        const textoDesencriptado = desencriptar(caja1.value)
        mensaje2.value = textoDesencriptado
        caja1.value = "";
    }
    function desencriptar(desencriptacion) {
       
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        desencriptacion = desencriptacion.toLowerCase() // tolowercase es para solo escribir en minusculas//
        
        for (let i = 0; i < matrizCodigo.length; i++) {
            if (desencriptacion.includes(matrizCodigo[i][1])) {
                desencriptacion = desencriptacion.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    
            }
        }
        return desencriptacion

}
    function copiar(){
        mensaje2.select();
        navigator.clipboard.writeText(mensaje2.value)
        mensaje2.value = "";
    }