<?php

/**
* @api {login()} https://ppstp-8c7f4.firebaseio.com/prueba  Iniciar sesión con AuthModule
* @apiVersion 0.1.0
* @APIGroup Login
* @apidescription Compara el Auth de firebase con los datos de la base de datos para el inicio de sesión del usuario
* @apiparam {string} email correo electronico del usuario
* @apiparam {string} pw contraseña del usuario
* @apiparam {string} privilegio nivel de privilegio del usuario en caso de que este registrado
* @apiSuccess void Inicia sesion al usuario
 * @apiError CamposVacios los campos no estan completados correctamente
 * @apiError UsuarioInvalido el usuario no esta registrado en el sistema
*/
login() {}
/**
* @api {google()} firebase.auth.GoogleAuthProvider Iniciar sesión con GoogleAuthModule 
* @APIGroup Login
* @apidescription Compara los datos de Google Auth con los datos de la base de datos para el inicio de sesión del usuario
* @apiparam {object} user Objeto con la informacion retornada por el GoogleAuthProvider con la identidad del usuario
* @apiparam {string} privilegio Nivel de privilegio del usuario en caso de que este registrado
* @apiSuccess void Inicia sesion al usuario con los datos provistos por Google 
* @apiError Firebasefailure Error de conexion con firebase
 * @apiError GoogleError Error en los datos del usuario
*/
google(){}
/**
* @api {facebookLogin()} firebase.auth.FacebookAuthProvider Iniciar sesión con FacebookAuthModule
* @APIGroup Login
* @apidescription Compara los datos de Facebook Auth con los datos de la base de datos para el inicio de sesión del usuario
* @apiparam {object} user Objeto con la informacion retornada por el FacebookAuthProvider con la identidad del usuario
* @apiparam {string} privilegio Nivel de privilegio del usuario en caso de que este registrado
* @apiSuccess void Inicia sesion al usuario con los datos provistos por Facebook 
* @apiError Firebasefailure Error de conexion con firebase
* @apiError FacebookError Error en los datos del usuario
*/
facebookLogin(){}
/**
* @api {obtenerUsuario($email)} https://ppstp-8c7f4.firebaseio.com/prueba Obtener los datos en la base de datos del usuario actual
* @APIGroup Login
* @apidescription Obtiene desde la base de datos todos los datos del usuario actual
* @apiparam {string} email Correo Electronico del usuario
* @apiSuccess object devuelve un objeto con la informacion del usuario
* @apiError UsuarioInvalido El usuario actual no se encuentra en la base de datos
*/
obtenerUsuario($email){}
/**
* @api {verificarPrivilegio($email)} https://ppstp-8c7f4.firebaseio.com/prueba Verificar el tipo de usuario
* @APIGroup Login
* @apidescription Obtiene la información del usuario desde la base de datos y devuelve el tipo de privilegio del usuario
* @apiparam {string} email Correo Electronico del usuario
* @apiSuccess string devuelve el nivel de privilegio del usuario
* @apiError UsuarioInvalido El usuario actual no se encuentra en la base de datos
*/
verificarPrivilegio($email){} 
/**
* @api {registrar()} https://ppstp-8c7f4.firebaseio.com/prueba Registrar al usuario en la aplicación
* @APIGroup Registro
* @apidescription Guarda los datos del usuario en la base de datos y crea una cuenta en AuthFirebase
* @apiparam {object} usuario Objeto con la información del usuario
* @apiSuccess void registra al usuario en el sistema, a la espera de ser dado de alta por quien corresponda
*/    
registrar(){}
/**
* @api {responderEncuesta()} https://ppstp-8c7f4.firebaseio.com/Resultados Guardar la respuesta a la encuesta
* @APIGroup Encuesta
* @apidescription guardar la respuesta del usuario actual a la encuesta actual
* @apiparam {object} respuesta Objeto con la respuesta del usuario
* @apiSuccess void guarda la respuesta
*/
responderEncuesta(){} 
/**
* @api {guardarDatos()} https://ppstp-8c7f4.firebaseio.com/prueba Guardar datos modificados
* @APIGroup Datos
* @apidescription guarda los datos modificados en el perfil del usuario
* @apiparam {object} alum informacion del usuario
* @apiSuccess void guarda los datos actualizados
*/   
guardarDatos(){}
/**
* @api {tomarFoto()} ppstp-8c7f4.appspot.com Guardar Foto
* @APIGroup Fotos
* @apidescription guarda la foto tomada en el storage de la base de datos
* @apiparam {object} camera configuracion de la camara
* @apiSuccess void guarda la foto tomada
*/ 
tomarFoto(){}
/**
* @api {imagenesBD()} ppstp-8c7f4.appspot.com Obtener Fotos
* @APIGroup Fotos
* @apidescription Obtiene todas las fotos de la base de datos
* @apiparam {Array} imagenes arreglo de todas las fotos de la base de datos
* @apiSuccess void Establece los datos de las imagenes traidas
*/  
imagenesBD(){}
/**
* @api {traerPreguntas()} https://ppstp-8c7f4.firebaseio.com/Encuestas Traer Preguntas
* @APIGroup Encuesta
* @apidescription trae todas las preguntas de la encuesta actual desde la base de datos
* @apiparam {string} nombre Nombre de la encuesta actual
* @apiSuccess listaPreguntas Lista de las preguntas
*/ 
traerPreguntas(){}
/**
* @api {traerLegajos()} https://ppstp-8c7f4.firebaseio.com/prueba  Traer Legajos
* @APIGroup Datos
* @apidescription trae todos los legajos de todos los alumnos desde la base de datos
* @apiparam {AngularFireList} List lista con los datos de firebase
* @apiSuccess legajos Lista de legajos
*/      
traerLegajos() {}
/**
* @api {traerEncuestas()} https://ppstp-8c7f4.firebaseio.com/Encuestas  Traer Encuestas
* @APIGroup Encuesta
* @apidescription trae todas las encuestas disponibles para el alumno 
* @apiparam {AngularFireList} List lista de encuestas de firebase
* @apiSuccess encuestas Devuelve la Lista de encuestas
*/      
traerEncuestas() {}
/**
* @api {guardarCambioPreg()} https://ppstp-8c7f4.firebaseio.com/Encuestas  Guardar cambios en encuesta
* @APIGroup Encuesta
* @apidescription guarda los cambios en las preguntas de una encuesta
* @apiparam {AngularFireList} Items datos de encuestas
* @apiparam {any} ListaEncuestas lista de encuestas
* @apiSuccess void Guarda los cambios en las preguntas
*/  
guardarCambioPreg() {}
/**
* @api {borrarEnc()} https://ppstp-8c7f4.firebaseio.com/Encuestas Borrar Encuesta
* @APIGroup Encuesta
* @apidescription borra una encuesta de la base de datos
* @apiparam {AngularFireList} Item lista de las encuestas en firebase
* @apiparam {any} ListaEncuestas datos de la encuesta a eliminar
* @apiSuccess void elimina la encuesta indicada
*/     
borrarEnc() {} 
/**
* @api {leerDB()} https://ppstp-8c7f4.firebaseio.com Leer base de datos
* @APIGroup Datos
* @apidescription lee la base de datos para obtener informacion de los alumnos y materias
* @apiparam {AngularFireList} lista lista de firebase a leer
* @apiSuccess void guarda la respuesta en una lista
*/                 
leerDB() {}
/**
* @api {guardarAsistencia()} https://ppstp-8c7f4.firebaseio.com/(Curso) Guardar datos de asistencia
* @APIGroup Asistencia
* @apidescription Guarda los datos de asistencia del dia
* @apiparam {string} opcion Curso a tomar lista
* @apiparam {AngularFireList} items Datos del curso
* @apiparam {boolean} tomar boolean que indica si se tomo lista o no ya en ese curso ese dia
* @apiparam {any} fecha fecha actual
* @apiparam {boolean} asist boolean que indica si el alumno esta presente o no
* @apiSuccess void guarda la asistencia
*/
guardarAsistencia(){}


?>