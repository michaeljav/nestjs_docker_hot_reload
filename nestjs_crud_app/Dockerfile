FROM node:20

# Crear un usuario sin privilegios
RUN addgroup --system app && adduser --system --ingroup app app

WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install

# Copiar el resto del proyecto con permisos correctos para el usuario
COPY --chown=app:app . .

# Crear carpeta dist y asegurar que tenga permisos para el usuario app
RUN mkdir -p /app/dist && chown -R app:app /app

# Usar un usuario sin privilegios
USER app

EXPOSE 3000

# Ejecutar el servidor de desarrollo
CMD ["pnpm", "start:dev"]
