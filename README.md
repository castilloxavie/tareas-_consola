# Aplicativo de Gestión de Tareas en Consola

Este es un aplicativo de consola desarrollado en Node.js para gestionar tareas pendientes, completadas y eliminarlas fácilmente desde la terminal.

## Características

- Crear tareas nuevas
- Listar todas las tareas
- Listar tareas completadas o pendientes
- Completar tareas
- Borrar tareas
- Persistencia de datos en archivo JSON

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tuusuario/04-tareas.git
   cd 04-tareas
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

## Uso

Ejecuta la aplicación con:

```sh
node app.js
```

Sigue las instrucciones del menú interactivo.

## Notas

- Los datos se guardan en `db/datos.json`.
- Si quieres empezar con una base de datos vacía, elimina el contenido de ese archivo.
- Puedes modificar el archivo `.gitignore` para evitar subir tus datos personales.

## Despliegue

Este aplicativo está pensado para ejecutarse localmente en la terminal. Si deseas ejecutarlo en la nube, puedes usar servicios como [Replit](https://replit.com/) o [GitHub Codespaces](https://github.com/features/codespaces).

---

Desarrollado por Xavier Castillo