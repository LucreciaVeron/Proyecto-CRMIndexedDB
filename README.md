# 📇 Administrador de Clientes (CRM con IndexedDB)

Aplicación web para la gestión de clientes, que permite **añadir, editar y eliminar registros** de manera sencilla.  
Los datos se almacenan en el **navegador** usando **IndexedDB**, funcionando como un pequeño **CRM local** sin necesidad de servidor.  

Este proyecto fue creado como parte del curso de Udemy:  
[JavaScript Moderno: Guía Definitiva Construye +10 Proyectos](https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos)

## 🌐 Demo en línea

Podés probar el proyecto aquí:  
👉 [Ver proyecto en vivo]()

## 🚀 Funcionalidades

- **Agregar cliente:** Registra nombre, empresa, teléfono y email.
- **Generación automática de ID:** Cada cliente obtiene un ID único interno (no visible para el usuario).
- **Validación de datos únicos:**
  - El **ID** es único por registro.
  - El **email** no puede repetirse.
- **Editar cliente:** Modifica los datos existentes.
- **Eliminar cliente:** Borra el registro de forma permanente.
- **Listado en pantalla:** Muestra todos los datos (excepto el ID interno).
- **Almacenamiento persistente:** Los datos se guardan en **IndexedDB** y se mantienen incluso al recargar la página.

## 🛠️ Tecnologías utilizadas

- **HTML5** – Estructura de la aplicación.
- **CSS3** – Estilos y diseño.
- **JavaScript (ES6+)** – Lógica de la aplicación y manejo de IndexedDB.
- **IndexedDB API** – Base de datos local en el navegador para persistencia de datos.

## 🚀 Cómo usar

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/LucreciaVeron/Proyecto-CRMIndexedDB.git

