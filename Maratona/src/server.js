const express = require('express')

const server = express()

//puxou o listen das pastas baixadas no express... => é uma arrowfunction, uma forma simplificada de fazer pedaços de função
server.listen(3000, () => console.log("RODANDO"))