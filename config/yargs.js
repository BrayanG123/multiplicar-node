const opciones = {
    base: {
        demand: true,
        default: 2,
        alias: 'b'
    },
    limite: {
        demand: true,
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', opciones)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}