const express = require('express')
const jsonServer = require("json-server");
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use('/images', express.static('images'));

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});