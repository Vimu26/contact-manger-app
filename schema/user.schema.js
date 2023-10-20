const us = {
    "type": "object",
    "properties": {
      "user_name": {
        "type": "string",
        "minLength": 5
      },
      "email": {
        "type": "string",
        "format": "email"
      },
      "password": {
        "type": "string",
        "minLength": 6
      }
    },
    "required": ["user_name", "email", "password"]
  }
  
  module.exports = {us}