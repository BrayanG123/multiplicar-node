//requireds
const fs = require('fs');


let data = '';

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(limite) || !Number(base)) {
            reject(`Algunos de los argumentos son erroneos
                     (base: ${ base }; limite: ${ limite }). Por favor, corrijalos`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            console.log(` ${ base } * ${ i } = ${ base*i } `);
        }
    });
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero!!');
            return;
        }

        for (let i = 1; i <= 10; i++) {
            data += `${ base } * ${ i }  = ${ base*i } \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`)
                //console.log(`El archivo  ha sido creado!`);
        });

    });
}

let crearArchivooo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(limite) || !Number(base)) {
            reject(`Algunos de los argumentos son erroneos
                     (base: ${ base }; limite: ${ limite }). Por favor, corrijalos`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i } \n`;
        }

        fs.writeFile(`tablas/tabla-B${ base }L${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-B${ base }L${ limite }.txt`)
                //console.log(`El archivo  ha sido creado!`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla,
    crearArchivooo,
}