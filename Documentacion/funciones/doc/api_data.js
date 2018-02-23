define({ "api": [
  {
    "type": "guardarAsistencia()",
    "url": "https://ppstp-8c7f4.firebaseio.com/(Curso)",
    "title": "Guardar datos de asistencia",
    "group": "Asistencia",
    "description": "<p>Guarda los datos de asistencia del dia</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "opcion",
            "description": "<p>Curso a tomar lista</p>"
          },
          {
            "group": "Parameter",
            "type": "AngularFireList",
            "optional": false,
            "field": "items",
            "description": "<p>Datos del curso</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "tomar",
            "description": "<p>boolean que indica si se tomo lista o no ya en ese curso ese dia</p>"
          },
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "fecha",
            "description": "<p>fecha actual</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "asist",
            "description": "<p>boolean que indica si el alumno esta presente o no</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>guarda la asistencia</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Asistencia",
    "name": "Guardarasistencia__HttpsPpstp8c7f4FirebaseioComCurso"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_Usuario_Desktop_appSimple_Documentacion_funciones_doc_main_js",
    "groupTitle": "C__Users_Usuario_Desktop_appSimple_Documentacion_funciones_doc_main_js",
    "name": ""
  },
  {
    "type": "guardarDatos()",
    "url": "https://ppstp-8c7f4.firebaseio.com/prueba",
    "title": "Guardar datos modificados",
    "group": "Datos",
    "description": "<p>guarda los datos modificados en el perfil del usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "alum",
            "description": "<p>informacion del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>guarda los datos actualizados</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Datos",
    "name": "Guardardatos__HttpsPpstp8c7f4FirebaseioComPrueba"
  },
  {
    "type": "leerDB()",
    "url": "https://ppstp-8c7f4.firebaseio.com",
    "title": "Leer base de datos",
    "group": "Datos",
    "description": "<p>lee la base de datos para obtener informacion de los alumnos y materias</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "AngularFireList",
            "optional": false,
            "field": "lista",
            "description": "<p>lista de firebase a leer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>guarda la respuesta en una lista</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Datos",
    "name": "Leerdb__HttpsPpstp8c7f4FirebaseioCom"
  },
  {
    "type": "traerLegajos()",
    "url": "https://ppstp-8c7f4.firebaseio.com/prueba",
    "title": "Traer Legajos",
    "group": "Datos",
    "description": "<p>trae todos los legajos de todos los alumnos desde la base de datos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "AngularFireList",
            "optional": false,
            "field": "List",
            "description": "<p>lista con los datos de firebase</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "legajos",
            "description": "<p>Lista de legajos</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Datos",
    "name": "Traerlegajos__HttpsPpstp8c7f4FirebaseioComPrueba"
  },
  {
    "type": "borrarEnc()",
    "url": "https://ppstp-8c7f4.firebaseio.com/Encuestas",
    "title": "Borrar Encuesta",
    "group": "Encuesta",
    "description": "<p>borra una encuesta de la base de datos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "AngularFireList",
            "optional": false,
            "field": "Item",
            "description": "<p>lista de las encuestas en firebase</p>"
          },
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "ListaEncuestas",
            "description": "<p>datos de la encuesta a eliminar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>elimina la encuesta indicada</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Encuesta",
    "name": "Borrarenc__HttpsPpstp8c7f4FirebaseioComEncuestas"
  },
  {
    "type": "guardarCambioPreg()",
    "url": "https://ppstp-8c7f4.firebaseio.com/Encuestas",
    "title": "Guardar cambios en encuesta",
    "group": "Encuesta",
    "description": "<p>guarda los cambios en las preguntas de una encuesta</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "AngularFireList",
            "optional": false,
            "field": "Items",
            "description": "<p>datos de encuestas</p>"
          },
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "ListaEncuestas",
            "description": "<p>lista de encuestas</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Guarda los cambios en las preguntas</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Encuesta",
    "name": "Guardarcambiopreg__HttpsPpstp8c7f4FirebaseioComEncuestas"
  },
  {
    "type": "responderEncuesta()",
    "url": "https://ppstp-8c7f4.firebaseio.com/Resultados",
    "title": "Guardar la respuesta a la encuesta",
    "group": "Encuesta",
    "description": "<p>guardar la respuesta del usuario actual a la encuesta actual</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "respuesta",
            "description": "<p>Objeto con la respuesta del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>guarda la respuesta</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Encuesta",
    "name": "Responderencuesta__HttpsPpstp8c7f4FirebaseioComResultados"
  },
  {
    "type": "traerEncuestas()",
    "url": "https://ppstp-8c7f4.firebaseio.com/Encuestas",
    "title": "Traer Encuestas",
    "group": "Encuesta",
    "description": "<p>trae todas las encuestas disponibles para el alumno</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "AngularFireList",
            "optional": false,
            "field": "List",
            "description": "<p>lista de encuestas de firebase</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "encuestas",
            "description": "<p>Devuelve la Lista de encuestas</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Encuesta",
    "name": "Traerencuestas__HttpsPpstp8c7f4FirebaseioComEncuestas"
  },
  {
    "type": "traerPreguntas()",
    "url": "https://ppstp-8c7f4.firebaseio.com/Encuestas",
    "title": "Traer Preguntas",
    "group": "Encuesta",
    "description": "<p>trae todas las preguntas de la encuesta actual desde la base de datos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la encuesta actual</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "listaPreguntas",
            "description": "<p>Lista de las preguntas</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Encuesta",
    "name": "Traerpreguntas__HttpsPpstp8c7f4FirebaseioComEncuestas"
  },
  {
    "type": "imagenesBD()",
    "url": "ppstp-8c7f4.appspot.com",
    "title": "Obtener Fotos",
    "group": "Fotos",
    "description": "<p>Obtiene todas las fotos de la base de datos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "imagenes",
            "description": "<p>arreglo de todas las fotos de la base de datos</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Establece los datos de las imagenes traidas</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Fotos",
    "name": "Imagenesbd__Ppstp8c7f4AppspotCom"
  },
  {
    "type": "tomarFoto()",
    "url": "ppstp-8c7f4.appspot.com",
    "title": "Guardar Foto",
    "group": "Fotos",
    "description": "<p>guarda la foto tomada en el storage de la base de datos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "camera",
            "description": "<p>configuracion de la camara</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>guarda la foto tomada</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Fotos",
    "name": "Tomarfoto__Ppstp8c7f4AppspotCom"
  },
  {
    "type": "facebookLogin()",
    "url": "firebase.auth.FacebookAuthProvider",
    "title": "Iniciar sesión con FacebookAuthModule",
    "group": "Login",
    "description": "<p>Compara los datos de Facebook Auth con los datos de la base de datos para el inicio de sesión del usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>Objeto con la informacion retornada por el FacebookAuthProvider con la identidad del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "privilegio",
            "description": "<p>Nivel de privilegio del usuario en caso de que este registrado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Inicia sesion al usuario con los datos provistos por Facebook</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Firebasefailure",
            "description": "<p>Error de conexion con firebase</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FacebookError",
            "description": "<p>Error en los datos del usuario</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Login",
    "name": "Facebooklogin__FirebaseAuthFacebookauthprovider"
  },
  {
    "type": "google()",
    "url": "firebase.auth.GoogleAuthProvider",
    "title": "Iniciar sesión con GoogleAuthModule",
    "group": "Login",
    "description": "<p>Compara los datos de Google Auth con los datos de la base de datos para el inicio de sesión del usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>Objeto con la informacion retornada por el GoogleAuthProvider con la identidad del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "privilegio",
            "description": "<p>Nivel de privilegio del usuario en caso de que este registrado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Inicia sesion al usuario con los datos provistos por Google</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Firebasefailure",
            "description": "<p>Error de conexion con firebase</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GoogleError",
            "description": "<p>Error en los datos del usuario</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Login",
    "name": "Google__FirebaseAuthGoogleauthprovider"
  },
  {
    "type": "login()",
    "url": "https://ppstp-8c7f4.firebaseio.com/prueba",
    "title": "Iniciar sesión con AuthModule",
    "version": "0.1.0",
    "group": "Login",
    "description": "<p>Compara el Auth de firebase con los datos de la base de datos para el inicio de sesión del usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>correo electronico del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pw",
            "description": "<p>contraseña del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "privilegio",
            "description": "<p>nivel de privilegio del usuario en caso de que este registrado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Inicia sesion al usuario</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CamposVacios",
            "description": "<p>los campos no estan completados correctamente</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsuarioInvalido",
            "description": "<p>el usuario no esta registrado en el sistema</p>"
          }
        ]
      }
    },
    "filename": "./api.php",
    "groupTitle": "Login",
    "name": "Login__HttpsPpstp8c7f4FirebaseioComPrueba"
  },
  {
    "type": "obtenerUsuario($email)",
    "url": "https://ppstp-8c7f4.firebaseio.com/prueba",
    "title": "Obtener los datos en la base de datos del usuario actual",
    "group": "Login",
    "description": "<p>Obtiene desde la base de datos todos los datos del usuario actual</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Correo Electronico del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "object",
            "description": "<p>devuelve un objeto con la informacion del usuario</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsuarioInvalido",
            "description": "<p>El usuario actual no se encuentra en la base de datos</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Login",
    "name": "Obtenerusuario__email_HttpsPpstp8c7f4FirebaseioComPrueba"
  },
  {
    "type": "verificarPrivilegio($email)",
    "url": "https://ppstp-8c7f4.firebaseio.com/prueba",
    "title": "Verificar el tipo de usuario",
    "group": "Login",
    "description": "<p>Obtiene la información del usuario desde la base de datos y devuelve el tipo de privilegio del usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Correo Electronico del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "string",
            "description": "<p>devuelve el nivel de privilegio del usuario</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsuarioInvalido",
            "description": "<p>El usuario actual no se encuentra en la base de datos</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Login",
    "name": "Verificarprivilegio__email_HttpsPpstp8c7f4FirebaseioComPrueba"
  },
  {
    "type": "registrar()",
    "url": "https://ppstp-8c7f4.firebaseio.com/prueba",
    "title": "Registrar al usuario en la aplicación",
    "group": "Registro",
    "description": "<p>Guarda los datos del usuario en la base de datos y crea una cuenta en AuthFirebase</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "usuario",
            "description": "<p>Objeto con la información del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>registra al usuario en el sistema, a la espera de ser dado de alta por quien corresponda</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Registro",
    "name": "Registrar__HttpsPpstp8c7f4FirebaseioComPrueba"
  }
] });