function validacion(){

	//Valores de los campos Nombre y Apellidos
    nombre = document.getElementById("Nombre").value;
    apellidos = document.getElementById("Apellidos").value;

    //Valor del campo Email

    email = document.getElementById("Email").value;

    //Valor del campo DNI

    dni = document.getElementById("DNI").value;

    //Valor respuesta a la pregunta

    respuesta = document.getElementById("Pregunta").value;

    //Opciones de la lista de inscripciones

    indice = document.getElementById("Inscripcion").value;

    //Datos para validar fecha nacimiento
   
    fecha = document.getElementById("FechaNac").value;
	
	//Fecha de salida
	
	salida = document.getElementById("Salida").value;
	
	//Fecha de regreso
	
	vuelta = document.getElementById("Vuelta").value;
	
	validado = true;

	if(!esAlfabetico(nombre)){
        alert('El campo Nombre no puede contener números o símbolos.');
		document.getElementById("Nombre").style.border="1px solid red";
        validado = false;
	}

    if(!esAlfabetico(apellidos)){
        alert("El campo Apellidos no debe contener números o símbolos.");
		document.getElementById("Apellidos").style.border="1px solid red";
        validado = false;
    }

    if(!esEmail(email)){
        alert("El formato de la dirección de correo electrónico es incorrecto (A@B.C).");
		document.getElementById("Email").style.border="1px solid red";
        validado = false;
    }

    if(dni != "" && !esDNI(dni)){
        alert("El formato del DNI es incorrecto (11111111A).");
		document.getElementById("DNI").style.border="1px solid red";
        validado = false;
    }
	
	if(!nacimientoOK(fecha) || fecha == null || fecha == ""){
		alert("Debe tener como mínimo 6 años para asistir.");
		document.getElementById("FechaNac").style.border="1px solid red";
		validado = false;
	}

    if(!esCorrecta(respuesta)){
        alert("La respuesta a la pregunta de confirmación no es correcta (Empieza por R).");
		document.getElementById("Pregunta").style.border="1px solid red";
        validado = false;
    }

    if(!esSeleccionado(indice)){
        alert("Debes seleccionar al menos un tipo de inscripción");
		document.getElementById("Inscripcion").style.border="1px solid red";
        validado = false;
    }
	
	if(salida != "2020-06-26" && salida != "2020-06-27"){
		alert("Se ha introducido una fecha de salida que está fuera del evento.");
		document.getElementById("Salida").style.border="1px solid red";
		validado = false;
	}
	
	if(vuelta != "2020-06-26" && vuelta != "2020-06-27"){
		alert("Se ha introducido una fecha de regreso que está fuera del evento.");
		document.getElementById("Vuelta").style.border="1px solid red";
		validado = false;
	}
	
	if(vuelta < salida){
		alert("Ha introducido un viaje de regreso anterior al de ida.");
		document.getElementById("Salida").style.border="1px solid red";
		document.getElementById("Vuelta").style.border="1px solid red";
		validado = false;
	}
	
	return validado;
}

/**
 * Método esAlfabetico(value valor)
 * @param {*} value 
 * @param {*} valor 
 * Comprueba que los campos que sean necesario solo contienen caracteres alfabéticos
 */

function esAlfabetico(valor){
    var letras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    if(!(valor.match(letras))){
        return false;
    } else return true;
}
/**
 * Método esEmail(value email)
 * @param {*} value 
 * @param {*} email
 * Comprueba que el formato de la dirección de correo electrónico sea correcto 
 */

function esEmail(email){
	var regexp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(!(regexp.test(email))){
        return false;
    } else return true;
}

/**
 * Método esDNI(value dni)
 * @param {*} value 
 * @param {*} dni 
 * Comprueba que el formato del DNI sea correcto
 */

function esDNI(dni){
    var letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    if(!(/^\d{8}[A-Z]$/.test(dni))) {
        return false;
    }
    if(!(dni.charAt(8) == letrasDNI[(dni.substring(0, 8))%23])) {
        return false;
    }
	return true;
}

/**
 * Método nacimientoOK(fecha)
 * @param {*} fecha 
 * Comprueba que la fecha de nacimiento es correcta (al menos 6 años)
 */

function nacimientoOK(fecha){
	var maximo = new Date(2015, 1, 1);
	if(fecha > maximo) return false;
	else return true;
}

/**
 * Método esSeleccionado(long indice)
 * @param {*} long 
 * @param {*} indice 
 * Comprueba que haya una opción seleccionada de la lista
 */

function esSeleccionado(indice){
    if(indice != 4 && indice != 1 && indice != 2 && indice != 3){
        return false;
    } else return true;
}

/**
 * Método esCorrecta(value respuesta)
 * @param {*} value 
 * @param {*} respuesta
 * Comprueba que la respuesta a la pregunta es correcta
 */

function esCorrecta(respuesta){
    if(!(respuesta == "Rossini" || respuesta == "rossini")){
        return false;
    } else return true;
}