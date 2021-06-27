// Servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses, sucessPage} = require('./pages')

// Configurando o nunjucks (Template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor
server
// Receber os dados do req body
.use(express.urlencoded({ extended: true }))
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public")) 
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/sucess-page", sucessPage)
.post("/save-classes", saveClasses)
.listen(5500) /* Inicializando um servidor */
