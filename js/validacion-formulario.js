function validacion(){

    /*
    <form id="formulario" onsubmit="return validacion()" action="#" method="post">
            <p>Para realizar la inscripción, introduzca sus datos en los siguientes campos:</p>
            Nombre (*): <input required type="text" name="nombre" placeholder="Introduzca su nombre"><br>
            Apellidos: <input type="text" name="apellidos" placeholder="Introduzca su apellido"><br>
            Email (*): <input type="email" name="email" placeholder="Introduzca su e-mail"><br>
            DNI: <input type="text" name="DNI" placeholder="Introduzca su DNI"><br>
            Fecha de nacimiento: <input type="date" name="fecha_nac"><br>
            <p>Seleccione el tipo de inscripción que desea realizar:</p>
            <select name="tipo_inscripción">
                <option value="1">Inscripción lite: 40&euro;</option>
                <option value="2">Inscripción medium: 60&euro;</option>
                <option value="3">Inscripción deluxe: 70&euro;</option>
                <option value="4">Inscripción luxury: 100&euro;</option>
            </select>
            <button type="submit">Enviar</button>
            <!-- Dos tipo fecha (salida y llegada) para realizar búsquedas?-->
        </form>
*/

    //Valores de los campos Nombre y Apellidos
    valor1 = document.getElementById("Nombre").nodeValue;
    valor2 = document.getElementById("Apellidos").nodeValue;

    //Opciones de la lista de inscripciones
    indice = document.getElementById("formulario").selectIndex;

    //Datos para validar fecha
    var dia = document.getElementById("dia").nodeValue;
    var mes = document.getElementById("mes").nodeValue;
    var ano = document.getElementById("ano").nodeValue;

    fecha = new Date(ano, mes, dia);

    if(!esAlfabetico(valor1)){
        alert("El campo Nombre debe contener únicamente caracteres alfabéticos");
        return false;
    }

    if(!esAlfabetico(valor2)){
        alert("El campo Apellidos debe contener únicamente caracteres alfabéticos");
        return false;
    }

    if(!esSeleccionado(indice)){
        alert("Debes seleccionar al menos un tipo de inscripción");
        return false;
    }

    if(!validarFecha(fecha)){
        alert("La fecha debe estar comprendida entre las fechas de la celebración del evento");
        return false;
    }

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
    if(valor.value.match(letras)){
        return true;
    }
}
/**
 * Método esSeleccionado(long indice)
 * @param {*} long 
 * @param {*} indice 
 * Comprueba que haya una opción seleccionada de la lista
 */
function esSeleccionado(long indice){

    if(indice!=-1){
        return true;
    }

}

/**
 * Método validarFecha()
 * 
 * Comprueba que las fechas están comprendidas entre las fechas de la celebración del evento
 */

function validarFecha(){




}

/**
 * Método adicional()
 * 
 * Método relacionado con la temática del evento
 */

function adicional(){



}
