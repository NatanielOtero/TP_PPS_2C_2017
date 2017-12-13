define({ "api": [
  {
    "type": "..",
    "url": "..",
    "title": "Iniciar sesión con AuthModule",
    "group": "Login",
    "description": "<p>Compara el Auth de firebase con los datos de la base de datos para el inicio de sesión del usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "..",
            "optional": false,
            "field": "..",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Login",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Borrar Encuesta",
    "group": "borrarEnc",
    "description": "<p>borra una encuesta de la base de datos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "xx",
            "optional": false,
            "field": "xx",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "borrarEnc",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Iniciar sesión con FacebookAuthModule",
    "group": "facebookLogin",
    "description": "<p>Compara los datos de Facebook Auth los datos de la base de datos para el inicio de sesión del usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "..",
            "optional": false,
            "field": "..",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "facebookLogin",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Iniciar sesión con GoogleAuthModule",
    "group": "google",
    "description": "<p>Compara los datos de Google Auth con los datos de la base de datos para el inicio de sesión del usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "..",
            "optional": false,
            "field": "..",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "google",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Guardar datos de asistencia",
    "group": "guardarAsistencia",
    "description": "<p>Guarda los datos de asistencia del dia</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "xx",
            "optional": false,
            "field": "xx",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "guardarAsistencia",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Guardar cambios en encuesta",
    "group": "guardarCambioPreg",
    "description": "<p>guarda los cambios en las preguntas de una encuesta</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "xx",
            "optional": false,
            "field": "xx",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "guardarCambioPreg",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Guardar datos modificados",
    "group": "guardarDatos",
    "description": "<p>guarda los datos modificados en el perfil del usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "xx",
            "optional": false,
            "field": "xx",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "guardarDatos",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Obtener Fotos",
    "group": "imagenesBD",
    "description": "<p>Obtiene todas las fotos de la base de datos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "xx",
            "optional": false,
            "field": "xx",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "imagenesBD",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Leer base de datos",
    "group": "leerDB",
    "description": "<p>lee la base de datos para obtener informacion de los alumnos y materias</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "xx",
            "optional": false,
            "field": "xx",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "leerDB",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Obtener los datos en la base de datos del usuario actual",
    "group": "obtenerUsuario",
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
    "groupTitle": "obtenerUsuario",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Registrar al usuario en la aplicación",
    "group": "registrar",
    "description": "<p>guarda los datos del usuario en la base de datos y crea una cuenta en AuthFirebase</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "..",
            "optional": false,
            "field": "..",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "registrar",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Guardar la respuesta a la encuesta",
    "group": "responderEncuesta",
    "description": "<p>guardar la respuesta del usuario actual a la encuesta actual</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "xx",
            "optional": false,
            "field": "xx",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "responderEncuesta",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Guardar Foto",
    "group": "tomarFoto",
    "description": "<p>guarda la foto tomada en el storage de la base de datos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "xx",
            "optional": false,
            "field": "xx",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "tomarFoto",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Traer Encuestas",
    "group": "traerEncuestas",
    "description": "<p>trae todas las encuestas disponibles para el alumno</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "xx",
            "optional": false,
            "field": "xx",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "traerEncuestas",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Traer Legajos",
    "group": "traerLegajos",
    "description": "<p>trae todos los legajos de todos los alumnos desde la base de datos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "xx",
            "optional": false,
            "field": "xx",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "traerLegajos",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Traer Preguntas",
    "group": "traerPreguntas",
    "description": "<p>trae todas las preguntas de la encuesta actual desde la base de datos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "xx",
            "optional": false,
            "field": "xx",
            "description": "<p>no tiene parametros</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "traerPreguntas",
    "name": "__"
  },
  {
    "type": "..",
    "url": "..",
    "title": "Verificar el tipo de usuario",
    "group": "verificarPrivilegio",
    "description": "<p>Obtiene los datos del usuario desde la base de datos y devuelve el tipo de privilegio del usuario</p>",
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
    "groupTitle": "verificarPrivilegio",
    "name": "__"
  }
] });
