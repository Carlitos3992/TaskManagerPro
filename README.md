TaskManagerPro

Descripción:

TaskManagerPro es una aplicación web diseñada para gestionar tareas diarias de manera eficiente. Permite a los usuarios crear, actualizar, eliminar y visualizar tareas, con funcionalidades avanzadas como reportes y autenticación segura.

Características:

Gestión de Usuarios: Registro, inicio y cierre de sesión con autenticación basada en JSON Web Tokens (JWT).
CRUD de Tareas: Crear, leer, actualizar y eliminar tareas con estados personalizados (Not Started, In Progress, Done).
Reportes: Vista general con estadísticas sobre las tareas organizadas por estado.


Requisitos Previos:

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

Node.js (versión 14 o superior)
MongoDB (local o en la nube)

Instalación y Configuración

1. Configura las variables de entorno
* Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

MONGO_URI=<Tu_URI_de_MongoDB>
JWT_SECRET=<Tu_Clave_Secreta_para_JWT>
PORT=5000

Nota: Asegúrate de reemplazar los valores de <Tu_URI_de_MongoDB> y <Tu_Clave_Secreta_para_JWT> con los datos correspondientes.


Instala las dependencias necesarias para el codigo: 

En el backend: 
npm install 

en la carpeta "client":

npm install


 Navega a la carpeta "server" e inicia el servidor 

"npm start" 

Luego navega a la carpeta "client" y activa el front para que el programa se ejecute perfectamente 

cd client 

nmp start

Luego que todo este iniciado puedes irte a tu navegador y accede a: http://localhost:3000

** Autor
Desarrollado por Carlos Brito como parte de un proyecto académico.

