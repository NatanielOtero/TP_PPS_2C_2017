/**
  
 * @function login 
  * @description Compara el Auth de firebase con los datos de la base de datos para el inicio de sesión del usuario  -          
  * https://ppstp-8c7f4.firebaseio.com/prueba  

 * @param {string} email - Correo electronico del usuario
 * @param {string} pw - contraseña del usuario
 * @param {string} privilegio - nivel de privilegio del usuario
 * @return {CamposVacios}  los campos no estan completados correctamente
 * @return {UsuarioInvalido}  el usuario no esta registrado en el sistema
 * @return {void} inicia sesion al usuario si existe en el sistema 
 */
login();
/**
 *  @function google 
 * 
 * @description Compara los datos de Google Auth con los datos de la base de datos para el inicio de sesión del usuario. - firebase.auth.GoogleAuthProvider
 * @param {object} user - Correo electronico del usuario 
 * @param {string} privilegio - nivel de privilegio del usuario
 * @return {Firebasefailure}  Error de conexion con firebase
 * @return {GoogleError}  Error en los datos del usuario
 * @return {void} Inicia sesion al usuario con los datos provistos por Google    
 */
google();
/**
 *  @function facebookLogin 
 * @description Compara los datos de Facebook Auth con los datos de la base de datos para el inicio de sesión del usuario - firebase.auth.FacebookAuthProvider
 *  @param {object} user - Correo electronico del usuario 
 * @param {string} privilegio - nivel de privilegio del usuario
 * @return {Firebasefailure}  Error de conexion con firebase
 * @return {FacebookError}  Error en los datos del usuario
 * @return {void} Inicia sesion al usuario con los datos provistos por Facebook
 */
facebookLogin();
/**
 * @function obtenerUsuario 
 *@description  Obtiene desde la base de datos todos los datos del usuario actual -  https://ppstp-8c7f4.firebaseio.com/prueba 
 * @param {string} email - Correo electronico del usuario
 * @returns {object}  - Usuario con todos sus datos 
 * @return {UsuarioInvalido} -  El usuario actual no se encuentra en la base de datos
 */
obtenerUsuario($email);
/**
 * @function verificarPrivilegio 
 * @description Obtiene la información del usuario desde la base de datos y devuelve el tipo de privilegio del usuario    -  https://ppstp-8c7f4.firebaseio.com/prueba      
 * @param {string} email - Correo electronico del usuario
 * @return {string} - nivel de privilegio del usuario
 * @return {UsuarioInvalido} -  El usuario actual no se encuentra en la base de datos
 */
verificarPrivilegio($email);
/**
 * @function registrar 
 *  
 * @description Registra al usuario en la aplicacion con AuthModule - https://ppstp-8c7f4.firebaseio.com/prueba
 * @param {object} usuario Objeto con la información del usuario
 * @returns void registra al usuario en el sistema, a la espera de ser dado de alta por quien corresponda
 */
registrar();


/**
 * @function responderEncuesta 
 * @description Guarda la respuesta a la encuesta -  https://ppstp-8c7f4.firebaseio.com/Resultados
 * @param {object} respuesta Objeto con la respuesta del usuario
 * @returns void guarda la respuesta
 */
responderEncuesta();
/**
 * @function traerEncuesta 
 *@description  Traer las encuestas desde la base de datos https://ppstp-8c7f4.firebaseio.com/Encuestas
 *@param {AngularFireList} Items datos de encuestas
 *@param {any} ListaEncuestas lista de encuestas
 *@returns void Guarda los cambios en las preguntas
 */
traerEncuestas();
/**
 * @function traerPreguntas 
 * @description Traer las preguntas de la encuesta acutal https://ppstp-8c7f4.firebaseio.com/Encuestas
 * @param {string} nombre Nombre de la encuesta actual
 * @returns  listaPreguntas Lista de las preguntas
 * 
 */
traerPreguntas();
/**
 * @function guardarCambioPreg 
 * @description Guardar los cambios en la pregunta de una encuesta  https://ppstp-8c7f4.firebaseio.com/Encuestas
 *@param {AngularFireList} Items datos de encuestas
 *@param {any} ListaEncuestas lista de encuestas
 *@returns void Guarda los cambios en las preguntas
 */
guardarCambioPreg();
/**
 * @function borrarEnc 
 * @description Borrar una encuesta https://ppstp-8c7f4.firebaseio.com/Encuestas
 * @param {AngularFireList} Item lista de las encuestas en firebase
 * @param {any} ListaEncuestas datos de la encuesta a eliminar
 * @returns void elimina la encuesta indicada
 */
borrarEnc();

/**
 * @function leerDB 
 * @description Obtiene información desde la base de datos de todos los usuarios https://ppstp-8c7f4.firebaseio.com
 * @param {AngularFireList} lista lista de firebase a leer
 * @returns void guarda la respuesta en una lista
 */
leerDB();
/**
 * @function traerLegajos 
 *@description  Obtiene todos los legajos desde la base de datos https://ppstp-8c7f4.firebaseio.com/prueba
 *@param {AngularFireList} List lista con los datos de firebase
 *@returns legajos Lista de legajos
 */
traerLegajos();
/**
 * @function tomarFoto 
 * @description  Guarda una foto en el storage de firebase ppstp-8c7f4.appspot.com
 * @param {object} camera configuracion de la camara
 * @returns void guarda la foto tomada
 */
tomarFoto();
/**
 * @function imagenesBD 
 *@description   Obtiene todas las fotos desde el storage de firebase ppstp-8c7f4.appspot.com
 *@param {Array} imagenes arreglo de todas las fotos de la base de datos
 *@returns  void Establece los datos de las imagenes traidas
 */
imagenesBD();
/**
 * @function guardarAsistencia 
 *@description   Guarda los datos de la asistencia https://ppstp-8c7f4.firebaseio.com/(Curso)
 * @param {string} opcion Curso a tomar lista
 * @param {AngularFireList} items Datos del curso
 * @param {boolean} tomar boolean que indica si se tomo lista o no ya en ese curso ese dia
 * @param {any} fecha fecha actual
 * @param {boolean} asist boolean que indica si el alumno esta presente o no
 * @returns void guarda la asistencia 
 * 
 */
guardarAsistencia();