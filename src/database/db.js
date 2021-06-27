/* Importando o banco de dados */
const Database = require('sqlite-async')

/* Função para executar o banco de dados e criar suas respectivas tabelas */
function execute(db) {
    // Criando as tabelas do banco de dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

/* Após abrir o arquivo ele executa a função ('execute') */
/* Exportando o banco de dados para o test */
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)

