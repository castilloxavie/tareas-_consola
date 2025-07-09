require('colors')
console.clear();

const mostrarMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('================================='.grey);
        console.log('  Seleccione una opción'.red);
        console.log('=================================\n'.grey);

        console.log(`${'1.'.yellow} Crear tarea`);
        console.log(`${'2.'.yellow} Listar tareas`);
        console.log(`${'3.'.yellow} Listar tareas completadas`);
        console.log(`${'4.'.yellow} Listar tareas pendientes`);
        console.log(`${'5.'.yellow} Completar tarea(s)`);
        console.log(`${'6.'.yellow} Borrar tarea`);
        console.log(`${'0.'.yellow} Salir\n`);

        const redline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });

        redline.question("seleccione una opción: ", (opt) => {
            redline.close();
            resolve(opt); 
        });
    });
}

const pausa = () => {
    return new Promise(resolve => {
        const redline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });

        redline.question(`\nPresione ${'ENTER'.green} para continuar\n`, () => {
            redline.close();
            resolve();
        });
    });
}

module.exports = {
    mostrarMenu,
    pausa
}