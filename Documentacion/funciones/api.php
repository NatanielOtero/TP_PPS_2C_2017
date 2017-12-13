<?php

/**
* @api {..} .. Iniciar sesión con AuthModule
* @APIGroup Login
* @apidescription Compara el Auth de firebase con los datos de la base de datos para el inicio de sesión del usuario
* @apiparam {..} .. no tiene parametros
*/
login() {}
/**
* @api {..} .. Iniciar sesión con GoogleAuthModule 
* @APIGroup google
* @apidescription Compara los datos de Google Auth con los datos de la base de datos para el inicio de sesión del usuario
* @apiparam {..} .. no tiene parametros
*/
google(){}
/**
* @api {..} .. Iniciar sesión con FacebookAuthModule
* @APIGroup facebookLogin
* @apidescription Compara los datos de Facebook Auth los datos de la base de datos para el inicio de sesión del usuario
* @apiparam {..} .. no tiene parametros
*/
facebookLogin(){}
/**
* @api {..} .. Obtener los datos en la base de datos del usuario actual
* @APIGroup obtenerUsuario
* @apidescription Obtiene desde la base de datos todos los datos del usuario actual
* @apiparam {string} email Correo Electronico del usuario
* @apiError UsuarioInvalido El usuario actual no se encuentra en la base de datos
*/
obtenerUsuario($email){}
/**
* @api {..} .. Verificar el tipo de usuario
* @APIGroup verificarPrivilegio
* @apidescription Obtiene los datos del usuario desde la base de datos y devuelve el tipo de privilegio del usuario
* @apiparam {string} email Correo Electronico del usuario
* @apiError UsuarioInvalido El usuario actual no se encuentra en la base de datos
*/
verificarPrivilegio($email){} 
/**
* @api {..} .. Registrar al usuario en la aplicación
* @APIGroup registrar
* @apidescription guarda los datos del usuario en la base de datos y crea una cuenta en AuthFirebase
* @apiparam {..} .. no tiene parametros
*/    
registrar(){}
/**
* @api {..} .. Guardar la respuesta a la encuesta
* @APIGroup responderEncuesta
* @apidescription guardar la respuesta del usuario actual a la encuesta actual
* @apiparam {xx} xx no tiene parametros
*/
responderEncuesta(){} 
/**
* @api {..} .. Guardar datos modificados
* @APIGroup guardarDatos
* @apidescription guarda los datos modificados en el perfil del usuario
* @apiparam {xx} xx no tiene parametros
*/   
guardarDatos(){}
/**
* @api {..} .. Guardar Foto
* @APIGroup tomarFoto
* @apidescription guarda la foto tomada en el storage de la base de datos
* @apiparam {xx} xx no tiene parametros
*/ 
tomarFoto(){}
/**
* @api {..} .. Obtener Fotos
* @APIGroup imagenesBD
* @apidescription Obtiene todas las fotos de la base de datos
* @apiparam {xx} xx no tiene parametros
*/  
imagenesBD(){}
/**
* @api {..} .. Traer Preguntas
* @APIGroup traerPreguntas
* @apidescription trae todas las preguntas de la encuesta actual desde la base de datos
* @apiparam {xx} xx no tiene parametros
*/ 
traerPreguntas(){}
/**
* @api {..} .. Traer Legajos
* @APIGroup traerLegajos
* @apidescription trae todos los legajos de todos los alumnos desde la base de datos
* @apiparam {xx} xx no tiene parametros
*/      
traerLegajos() {}
/**
* @api {..} .. Traer Encuestas
* @APIGroup traerEncuestas
* @apidescription trae todas las encuestas disponibles para el alumno 
* @apiparam {xx} xx no tiene parametros
*/      
traerEncuestas() {}
/**
* @api {..} .. Guardar cambios en encuesta
* @APIGroup guardarCambioPreg
* @apidescription guarda los cambios en las preguntas de una encuesta
* @apiparam {xx} xx no tiene parametros
*/  
guardarCambioPreg() {}
/**
* @api {..} .. Borrar Encuesta
* @APIGroup borrarEnc
* @apidescription borra una encuesta de la base de datos
* @apiparam {xx} xx no tiene parametros
*/     
borrarEnc() {} 
/**
* @api {..} .. Leer base de datos
* @APIGroup leerDB
* @apidescription lee la base de datos para obtener informacion de los alumnos y materias
* @apiparam {xx} xx no tiene parametros
*/                 
leerDB() {}
/**
* @api {..} .. Guardar datos de asistencia
* @APIGroup guardarAsistencia
* @apidescription Guarda los datos de asistencia del dia
* @apiparam {xx} xx no tiene parametros
*/
guardarAsistencia(){}


?>