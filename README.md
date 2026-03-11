# Microbackends DSIII

Este proyecto contiene un backend en Node.js con TypeScript que expone un CRUD de palabras conectado a Supabase (Postgres).

## 🚀 Tecnologías
- Node.js + Express
- TypeScript
- Supabase (Postgres)
- Vercel (despliegue)

## 📦 Instalación
```bash
npm install
```

## 🌐 Endpoints
POST /words → Inserta una palabra

GET /words → Lista todas las palabras

PUT /words/:id → Actualiza la palabra con ese id

DELETE /words/:id → Elimina la palabra con ese id

El cuerpo que espera estos endpoints como PUT y POST es
```bash
{
    "word":"{value}"
}
```