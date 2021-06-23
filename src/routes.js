const express = require('express');
const routes = express.Router();

const basePath = __dirname + "/views"

// request, res
routes.get('/', (request, res) => res.sendFile(basePath + "/index.html"))
routes.get('/job', (request, res) => res.sendFile(basePath + "/job.html"))
routes.get('/job/edit', (request, res) => res.sendFile(basePath + "/job-edit.html"))
routes.get('/profile', (request, res) => res.sendFile(basePath + "/profile.html"))

module.exports = routes;