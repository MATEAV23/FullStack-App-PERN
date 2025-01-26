# Sistema de Administración de Productos

Una aplicación fullstack que permite administrar un catálogo de productos con operaciones CRUD completas.

## Tecnologías Utilizadas

### Frontend
- React 18 con TypeScript
- React Router DOM para enrutamiento 
- Tailwind CSS para estilos
- Vite como bundler
- Valibot para validación de datos
- Axios para peticiones HTTP

### Backend
- Node.js con TypeScript
- Express.js para el servidor REST
- PostgreSQL como base de datos
- Sequelize como ORM
- Jest para testing
- Swagger para documentación de API

## Características

- ✅ CRUD completo de productos (Crear, Leer, Actualizar, Eliminar)
- 🎨 Interfaz responsive con Tailwind CSS
- 📝 Validación de datos en frontend y backend
- 🔄 Estado de disponibilidad toggle
- 📚 Documentación de API con Swagger
- ✅ Tests automatizados
- 🔒 Tipado seguro con TypeScript

## Requisitos Previos

- Node.js >= 18
- PostgreSQL >= 13
- npm o pnpm

## Instalación

1. Clona el repositorio:
bash
git clone <url-del-repositorio>
cd nombre-del-proyecto



2. Instala las dependencias del backend:
bash
cd server
npm install


3. Instala las dependencias del frontend:
bash
cd client
npm install


4. Configura las variables de entorno:

Crea un archivo `.env` en la carpeta `server` con:
bash
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_db
PORT=4000
FRONTEND_URL=http://localhost:5173


5. Inicia la base de datos PostgreSQL y crea una base de datos

6. Ejecuta las migraciones:

bash
cd server
npm run pretest


## Ejecución

1. Inicia el servidor backend:
bash
cd server
npm run dev


2. Inicia el servidor frontend:
bash
cd client
npm run dev


3. Abre http://localhost:5173 en tu navegador

## Documentación API

La documentación de la API está disponible en:
http://localhost:4000/docs

## Testing

Para ejecutar los tests del backend:
bash
cd server
npm test


Para ver la cobertura de tests:
bash
npm run test:coverage