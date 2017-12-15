/**
 *  Funciones para el inicio de sesion
 * 
 */

class iniciarSesion {

    /**
     * Inicia sesion al usuario con el AuthModule de Firebase     
     */
    login() {}
        /**
         * Inicia sesion al usuario con GoogleAuthModule.         
         */
    google() {}
        /**
         * Inicia sesion al usuario con el FacebookAuthModule
         */
    facebookLogin() {}
        /**
         * Devuelve los datos del usuario actual
         * @param {string} email - Correo electronico del usuario
         * @returns {object}  - Usuario con todos sus datos 
         */
    obtenerUsuario($email) {}
        /**
         * Verifica el tipo del usuario         
         * @param {string} email - Correo electronico del usuario
         * @return {string} - nivel de privilegio del usuario
         */
    verificarPrivilegio($email) {}

}
/**
 *  Funciones para el registro de usuarios
 * 
 */
class registro {
    /**
     * Registra al usuario en la aplicacion con AuthModule
     */
    registrar() {}
}
/**
 * Funciones para el manejo de encuestas
 */
class encuestas {
    /**
     * Guarda la respuesta a la encuesta
     */
    responderEncuesta() {}
        /**
         * Traer las encuestas desde la base de datos
         */
    traerEncuestas() {}
        /**
         * Traer las preguntas de la encuesta acutal
         */
    traerPreguntas() {}
        /**
         * Guardar los cambios en la pregunta de una encuesta
         */
    guardarCambioPreg() {}
        /**
         * Borrar una encuesta
         */
    borrarEnc() {}
}
/**
 *  Funciones genericas que interactuan con la base de datos
 */
class baseDeDatos {
    /**
     * Obtiene información desde la base de datos de todos los usuarios
     */
    leerDB() {}
        /**
         * Obtiene todos los legajos desde la base de datos
         */
    traerLegajos() {}
}
/**
 *  Funciones para el manejo de imagenes
 */
class imagenes {
    /**
     *  Guarda una foto en el storage de firebase
     */
    tomarFoto() {}
        /**
         *  Obtiene todas las fotos desde el storage de firebase
         */
    imagenesBD() {}
}
/**
 * Funciones que manejan la asistencia de los alumnos
 */
class asistencia {
    /**
     *  Guarda los datos de la asistencia
     */
    guardarAsistencia() {}
}