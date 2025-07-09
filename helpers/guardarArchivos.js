const { log } = require("console");
const fs = require("fs");

const directorio = "./db/datos.json"

const guardarDatabase = (data) => {
    fs.writeFileSync(directorio, JSON.stringify(data));
}

const leerDatabase = () => {
    if(!fs.existsSync(directorio)){
        return null;
    }

    const info = fs.readFileSync(directorio, {encoding: "utf-8"});
    const data = JSON.parse(info);

    return data
    
}

module.exports = {
    guardarDatabase,
    leerDatabase
}