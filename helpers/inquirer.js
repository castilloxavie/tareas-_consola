const inquirer = require("inquirer");
const { validate } = require("uuid");
require("colors");

const preguntas = [{
    type: "list",
    name: "opt",
    message: "¿Qué desea hacer?",
    choices: [{
        value: "1",
        name: `${"1.".yellow} Crear tarea`
    },
    {
        value: "2",
        name: `${"2.".yellow} Listar tareas`
    },
    {
        value: "3",
        name: `${"3.".yellow} Listar tareas completadas`
    },
    {
        value: "4",
        name: `${"4.".yellow} Listar tareas pendientes`
    },
    {
        value: "5",
        name: `${"5.".yellow} Completar tarea(s)`
    },
    {
        value: "6",
        name: `${"6.".yellow} Borrar tarea`
    },
    {
        value: "0",
        name: `${"0.".yellow} Salir\n`
    }],
    
}]


const inquirerMenu = async () => {
    console.clear();
    console.log('================================='.grey);
    console.log('  Seleccione una opción'.red);
    console.log('=================================\n'.grey);

    const { opt } = await inquirer.prompt(preguntas);

    return opt;
}


const pausa = async () => {
    const respuesta = [{
        type: "input",
        name: "enter",
        message: `Presione ${"ENTER".green} para continuar\n`
    }];

    console.log("\n");
    await inquirer.prompt(respuesta);
}

const leerInput = async(message) => {
    const question = [{
        type: "input",
        name: "desc",
        message,

        validate(value) {
            if (value.length === 0) {
                return "Por favor ingrese un valor";
            }
            return true;
        }
    }]

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async(tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: "0",
        name: "0.".green + " Cancelar"
    });

    const preguntas = [{
        type: "list",
        name: "id",
        message: "Borrar",
        choices
    }];

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

confirmarBorrar = async (tarea) => {
    const preguntas = [{
        type: "confirm",
        name: "ok",
        message: `¿Está seguro de que desea borrar la tarea: ${tarea.desc}?`,
        default: false
    }];

    const { ok } = await inquirer.prompt(preguntas);
    return ok;
}

completarTareas = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const preguntas = [{
        type: "checkbox",
        name: "ids",
        message: "Seleccione las tareas completadas",
        choices
    }];

    const { ids } = await inquirer.prompt(preguntas);
    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmarBorrar,
    completarTareas,
}