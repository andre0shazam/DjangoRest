define({ "api": [
  {
    "type": "GET",
    "url": "api/client/",
    "title": "Solicitar informações do usuário",
    "name": "GetCliente",
    "group": "client",
    "version": "0.0.0",
    "filename": "teste/urls.py",
    "groupTitle": "client"
  },
  {
    "type": "DELETE",
    "url": "api/client/:id",
    "title": "Deletar usuário",
    "name": "GetCliente",
    "group": "client",
    "examples": [
      {
        "title": "Exemplo para localizar pelo Id para Deletar:",
        "content": "curl -X DELETE http://localhost:8080/api/client/1",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "teste/urls.py",
    "groupTitle": "client"
  },
  {
    "type": "PUT",
    "url": "api/client/:id",
    "title": "Alterar usuário",
    "name": "Getcliente",
    "group": "client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sobrenome",
            "description": "<p>Sobrenome do cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idade",
            "description": "<p>Idade do cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sexo",
            "description": "<p>Sexo do cliente</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo para localizar pelo Id para Alterar:",
        "content": "curl -X PUT http://localhost:8080/api/client/1",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "teste/urls.py",
    "groupTitle": "client"
  },
  {
    "type": "POST",
    "url": "api/client/",
    "title": "Mostrar usuário",
    "name": "Postcliente",
    "group": "client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sobrenome",
            "description": "<p>Sobrenome do cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idade",
            "description": "<p>Idade do cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sexo",
            "description": "<p>Sexo do cliente</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "teste/urls.py",
    "groupTitle": "client"
  }
] });
