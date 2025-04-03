#  studying JSON Web Tokens
 
# Backend com Autenticação JWT

Este é um backend RESTful desenvolvido com Node.js, Express e Sequelize para autenticação de usuários utilizando JWT. O banco de dados utilizado é o PostgreSQL.

## Tecnologias Utilizadas
- Node.js
- Express
- Sequelize (ORM para PostgreSQL)
- JWT (JSON Web Token)
- Bcrypt.js (criptografia de senhas)
- Dotenv (variáveis de ambiente)


### Registro de Usuário
**POST** `/register`
#### Request Body:
```json
{
  "username": "usuario",
  "password": "senha123"
}
```
#### Response:
```json
{
  "message": "Usuário criado com sucesso!"
}
```

### Login
**POST** `/login`
#### Request Body:
```json
{
  "username": "usuario",
  "password": "senha123"
}
```
#### Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Rota Protegida
**GET** `/protected`
#### Headers:
```json
{
  "Authorization": "Bearer SEU_TOKEN_AQUI"
}
```
#### Response:
```json
{
  "message": "Acesso autorizado!"
}
```

Caso o token seja inválido ou não enviado:
```json
{
  "error": "Token necessário"
}
```

---

## Testando com Postman
1. **Registrar um usuário** enviando um POST para `/register`.
2. **Fazer login** com esse usuário no POST `/login` e copiar o token retornado.
3. **Testar a rota protegida** fazendo um GET para `/protected` e enviando o token no cabeçalho `Authorization`.

---
