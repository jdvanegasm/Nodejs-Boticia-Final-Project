# News API REST
This API is designed to support a Discord bot that provides news updates.

## About
The API features a CRUD system for managing various collections, including News, Categories, UserTypes and Users. User passwords are stored securely using **bcrypt** encryption with 10 salt rounds. The API provides a token when using the login endpoint, which is then used to authenticate other endpoints via the Authorization Header using **JWT**. The API documentation is available via **Swagger UI** in the /api/ endpoint.

This project is built with the following technologies and tools:

<p align="left">  
  <img src="https://skillicons.dev/icons?i=mongodb,nodejs,postman,express&perline=7&theme=dark" >
</p>

## Getting Started
### Prerequisites
- Node.js (v14+)
- MongoDB
### Quick setup
Deploy the API, configure your MongoDB connection and server secret key in the environment variables. Check the Swagger UI at /api/ for full API documentation.
