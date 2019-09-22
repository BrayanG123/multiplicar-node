const { crearArchivo, listarTabla, crearArchivooo } = require('./multiplicar/multiplicar');
const colors = require('colors');

const argv = require('./config/yargs').argv;
//let base = '3';

let comando = argv._[0];
//let base = argv.require.command.

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then()
            .catch(e => console.log(e));
        break;
    case 'crearr':
        crearArchivo(argv.base)
            .then(archivo => console.log(`El archivo ${ archivo } ha sido creado`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivooo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${ archivo } ha sido creado`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('No existe ese comando (no reconocido)');
}

//let argv2 = process.argv;
//let parametro = argv[2];
//let num = parametro.split('=');
//base = num[1];
//console.log(argv.base);
//console.log(argv.limite);
//console.log(argv2);

/* listarTabla( base, limite)
            .then()
            .catch( e => console.log(e) ); */



/* crearArchivo(base)
    .then(archivo => console.log(`El archivo ${ archivo } ha sido creado`))
    .catch(err => console.log(err)); */