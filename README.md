### Manejando diferentes elementos web con Cypress
## Autor: Francisco Rodriguez

# Cypress 13 Web Elements Management Project

Este proyecto utiliza Cypress 13 para automatizar pruebas de manejo de diferentes elementos web. El desarrollo y la ejecución de las pruebas se realizan en Visual Studio Code (VSCode).

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- Visual Studio Code (VSCode)
- Cypress 13

## Instalación

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/XERF99/Cypress-Web-Interactions.git
    cd Cypress-Web-Interactions
    ```

2. **Instalar dependencias:**

    ```bash
    npm install
    ```

3. **Abrir el proyecto en VSCode:**

    ```bash
    code .
    ```

## Estructura del Proyecto

- **cypress/**: Carpeta principal que contiene los tests, fixtures y configuraciones de Cypress.
  - **fixtures/**: Archivos de datos de prueba.
  - **integration/**: Tests de integración escritos en Cypress.
  - **plugins/**: Plugins y configuraciones adicionales de Cypress.
  - **support/**: Archivos de soporte y comandos personalizados.

- **cypress.json**: Archivo de configuración de Cypress.

## Ejecución de las Pruebas

### Ejecutar Cypress en Modo Interactivo

Interfaz gráfica de Cypress

    ```bash
    npx cypress open
    ```
Ejecutar cypress desde la línea de comandos

    ```bash
    npx cypress run
    ```

