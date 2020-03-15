function validacion(){

    //Valores de los campos Nombre y Apellidos
    nombre = document.getElementById("Nombre").nodeValue;
    apellidos = document.getElementById("Apellidos").nodeValue;

    //Valor del campo Email

    email = document.getElementById("Email").nodeValue;

    //Valor del campo DNI

    dni = document.getElementById("DNI").nodeValue;

    //Valor del campo Código de socio

    socio = document.getElementById("Socio").nodeValue;

    //Opciones de la lista de inscripciones

    indice = document.getElementById("Formulario").selectIndex;

    //Datos para validar fecha nacimiento
   
    fecha = document.getElementById("FechaNac").nodeValue;

    if(esAlfabetico(nombre)){
        alert("El campo Nombre debe contener únicamente caracteres alfabéticos");
        return false;
    }

    if(esAlfabetico(apellidos)){
        alert("El campo Apellidos debe contener únicamente caracteres alfabéticos");
        return false;
    }

    if(esEmail(email)){
        alert("El formato de la dirección de correo electrónico es incorrecto");
        return false;
    }

    if(esDNI(dni)){
        alert("El formato del DNI es incorrecto");
        return false;
    }

    if(esSocio(socio)){
        alert("El formato del código de socio es incorrecto");
        return false;
    }

    if(validarFechaNac(fecha)){
        alert("La fecha debe estar comprendida entre las fechas de la celebración del evento");
        return false;
    }

    if(esSeleccionado(indice)){
        alert("Debes seleccionar al menos un tipo de inscripción");
        return false;
    }


    return true;

}

/**
 * Método esAlfabetico(nodeValue valor)
 * @param {*} nodeValue 
 * @param {*} valor 
 * Comprueba que los campos que sean necesario solo contienen caracteres alfabéticos
 */

function esAlfabetico(nodeValue valor){

    //Variable que contiene las posibles letras del alfabeto
    var letras = /^[A-Za-z]+$/;

    //Comprueba si el valor recibido concuerda
    if(!(valor.value.match(letras))){
        return false;
    }
}
/**
 * Método esEmail(nodeValue email)
 * @param {*} nodeValue 
 * @param {*} email
 * Comprueba que el formato de la dirección de correo electrónico sea correcto 
 */

function esEmail(nodeValue email){

    if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))){
        return false;
    }
    
}

/**
 * Método esDNI(nodeValue dni)
 * @param {*} nodeValue 
 * @param {*} dni 
 * Comprueba que el formato del DNI sea correcto
 */

function esDNI(nodeValue dni){

    var letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if( !(/^\d{8}[A-Z]$/.dni(valor)) ) {
        return false;
    }

    if(!(dni.charAt(8) == letrasDNI[(dni.substring(0, 8))%23])) {
        return false;
    }

}

/**
 * Método esSeleccionado(long indice)
 * @param {*} long 
 * @param {*} indice 
 * Comprueba que haya una opción seleccionada de la lista
 */
function esSeleccionado(long indice){

    if((indice == null || indice == 0)){
        return false;
    }

}

/**
 * Método validarFecha(Date fecha)
 *  @param {*} Date
 *  @param {*} fecha 
 * Comprueba que las fechas están comprendidas entre las fechas de la celebración del evento
 */

function validarFechaNac(Date fecha){

    if(!(isNaN(fecha))){
        return false;
    }

}

/**
 * Método esSocio(nodeValue socio)
 * @param {*} nodeValue 
 * @param {*} socio 
 * Comprueba que el formato del código del socio es correcto
 */

function esSocio(nodeValue socio){

}

