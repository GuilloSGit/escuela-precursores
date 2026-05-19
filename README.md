# Escuela de Servicio del Precursor

Aplicación web para la gestión y consulta de información de la Escuela de Servicio del Precursor - Circuito Mendoza 1B.

## 📋 Descripción

Esta aplicación permite visualizar y buscar información organizada sobre la Escuela de Servicio del Precursor que se realizará del 24 al 29 de agosto de 2026. Incluye detalles sobre horarios, menú, logística, financiamiento, seguridad, personal, lecciones y canciones.

## ✨ Características

- **Vista de Documento**: Visualización completa de toda la información organizada por categorías
- **Vista de Búsqueda**: Sistema de búsqueda y filtrado avanzado con:
  - Búsqueda por texto en títulos, contenido y etiquetas
  - Filtrado por categorías (Planificación General, Horarios, Logística, Menú, Bebidas, etc.)
  - Filtrado por etiquetas
  - Visualización en grid con tarjetas interactivas
  - Modal de detalle para ver información completa
- **Interfaz Responsiva**: Diseño adaptable a diferentes tamaños de pantalla
- **Modo Oscuro**: Soporte para tema claro y oscuro
- **Iconos Intuitivos**: Iconos específicos para cada categoría

## 🚀 Tecnologías

- **React 19.2.6** - Framework de frontend
- **Vite 8.0.12** - Herramienta de build y desarrollo
- **TailwindCSS 3.3.3** - Framework de CSS
- **Lucide React 0.460.0** - Biblioteca de iconos
- **clsx 2.0.0** - Utilidad para clases condicionales
- **tailwind-merge 2.0.0** - Utilidad para merge de clases Tailwind

## 📦 Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

## 🎯 Uso

### Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para Producción

```bash
npm run build
```

### Preview del Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
escuela-servicio/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes React
│   │   ├── DocumentView.jsx
│   │   └── SearchBar.jsx
│   ├── data/           # Datos de la aplicación
│   │   └── reunionData.js
│   ├── lib/            # Utilidades
│   │   └── utils.js
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos globales
│   ├── index.css       # Estilos de Tailwind
│   └── main.jsx        # Punto de entrada
├── index.html          # HTML principal
├── package.json        # Dependencias y scripts
├── tailwind.config.js  # Configuración de Tailwind
├── vite.config.js      # Configuración de Vite
└── README.md           # Este archivo
```

## 📊 Categorías de Información

La aplicación organiza la información en las siguientes categorías:

- **Planificación General**: Fechas, lugar, población objetivo
- **Horarios**: Breaks, almuerzos, inicio y fin de clases
- **Logística**: Recepción, montaje de almuerzo
- **Media Agua**: Coordinación con hermanos de Media Agua
- **Menú**: Alimentos y postres diarios
- **Bebidas**: Distribución de gaseosas y aguas
- **Financiamiento**: Política de fondos
- **Seguridad**: Medidas de seguridad
- **Personal**: Asignaciones y roles
- **Limpieza**: Tareas de limpieza
- **Lecciones**: Horario de las 18 lecciones
- **Canciones**: Canciones de apertura y cierre diarias

## 🎨 Personalización

Los datos de la aplicación se encuentran en `src/data/reunionData.js`. Para modificar la información:

1. Editar el archivo `src/data/reunionData.js`
2. Agregar, modificar o eliminar objetos en el array `reunionData`
3. Cada objeto debe tener: `id`, `category`, `title`, `content`, y `tags`

## 📝 Licencia

Este proyecto es privado y de uso exclusivo para la organización de la Escuela de Servicio del Precursor.

## 👥 Contacto

Para consultas sobre la aplicación, contactar a los coordinadores de la escuela.