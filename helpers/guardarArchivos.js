const fs = require("fs");
const path = require("path");

const directorio = "./db/datos.json";

const guardarDatabase = (data) => {
    // Crear la carpeta si no existe
    const dir = path.dirname(directorio);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(directorio, JSON.stringify(data));
}

const leerDatabase = () => {
    if(!fs.existsSync(directorio)){
        return null;
    }

    const info = fs.readFileSync(directorio, {encoding: "utf-8"});
    const data = JSON.parse(info);

    return data;
}

module.exports = {
    guardarDatabase,
    leerDatabase
}