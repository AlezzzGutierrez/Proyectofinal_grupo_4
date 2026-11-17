# González Tolay, Esmeralda Rocío

## Proyecto Final - Grupo N°4 / La Aventura en la Granja (React): Resultados, Funciones Flecha, Acceso Docente y Validación de Formulario

## Fecha de Actualización: 16/11/2026

Participación en el desarrollo del proyecto final en React (juego educativo para niños con dos minijuegos, login y panel docente). Mis aportes fueron: la pantalla de resultados y los archivos restantes del proyecto, la conversión de las funciones declaradas con `function` a funciones flecha, y una primera versión del acceso para docentes con verificación del formulario de ingreso. Luego, el acceso de docentes fue modificado por una compañera del grupo, que lo reemplazó por un login con roles y una ruta protegida para el panel. Por último, trabajé en mover la lógica de lectura de resultados a la carpeta `services`, para que la página de resultados solo muestre los datos.

### Commits realizados

- **03/11/2026:** "Agregando los resultados y corrigiendo/agregando los archivos restantes".
- **07/11/2026:** "Corrigiendo Function por Funcion Flecha".
- **09/11/2026:** "Agrego acceso de Docente y nueva pestaña para los niños, además de la verificación de formulario".
- Integración de mis cambios al repositorio grupal mediante *pull requests* y *merges* de la rama `main` en mi rama `Gonzalez-Esmeralda`.

### Métodos y elementos utilizados

- **Pantalla de resultados** (`Resultados.jsx`): muestra el puntaje de cada juego, el total y un mensaje de felicitación según el puntaje, con componentes de React-Bootstrap (`Container`, `Card`, `Button`) y navegación con `useNavigate()`.
- `localStorage`, `Number()` y `JSON.parse()`: lectura de los puntajes y de la sesión guardados en el navegador.
- **Funciones flecha** (`() => {}`): conversión de las funciones tradicionales a funciones flecha, usando `return` implícito cuando el cuerpo es una sola expresión.
- **Acceso docente**: enlace a la pantalla de docentes con `Button as={Link}` de React Router y credenciales de docente definidas en `data/docentes.js`.
- **Verificación de formulario** (`validacion.js`): funciones `validarNombre`, `validarUsuario` y `validarClave`, que usan `.trim()`, `.length` y una expresión regular con `.test()` para controlar que el nombre sea obligatorio, tenga entre 2 y 20 letras y no tenga números ni símbolos.
- **Mensajes de error en el formulario**: `Form` de React-Bootstrap con `noValidate`, `isInvalid` y `Form.Control.Feedback` para mostrar el error debajo del campo.
- **Refactorización a `services`**: función `obtenerResultadoActual()` en `resultadosService.js`, que lee la sesión y los puntajes, calcula el total y elige el mensaje; `Resultados.jsx` la usa con `useState(() => ...)` (inicialización perezosa) y solo se encarga de mostrar los datos.

### Archivos (Modificados, Creados, Eliminados)

<!-- Confirmar la lista exacta con: git show --stat <hash> de cada uno de mis commits -->

**Creados:**
- `src/pages/Resultados.jsx`
- `src/styles/Resultados.css`
- `src/components/Form.jsx`
- `src/services/validacion.js`
- `src/data/docentes.js`

**Modificados:**
- `src/services/resultadosService.js` (se agregó `obtenerResultadoActual`)
- `src/pages/Resultados.jsx` (ahora solo muestra los datos que entrega el service)
- Archivos del proyecto donde se reemplazaron funciones tradicionales por funciones flecha

**Eliminados:** Ninguno

### Uso de IA

**Sí:** se utilizó **Claude (Anthropic)** como copiloto (interacción) y herramienta de apoyo durante el desarrollo y el estudio del proyecto. El código fue desarrollado por el grupo; la IA no creó el proyecto, sino que se empleó para:

1. Explicar conceptos teóricos de JavaScript y de React (variables, funciones, arrays, componentes, props, estado, `useEffect`, Context).
2. Detectar y corregir errores de importación y exportación entre módulos (por ejemplo, un archivo de `services` sin los `export` que otro archivo esperaba) y diferencias en los nombres de las propiedades de los datos del juego del intruso.
3. Explicar las funciones flecha (sintaxis, `return` implícito y diferencias con `function`) y React Router (`createBrowserRouter`, `Outlet`, `useNavigate`, rutas protegidas).
5. Proponer cómo mover la lógica de lectura de resultados desde `Resultados.jsx` hacia `resultadosService.js` y explicar el criterio de separar la lógica de la vista.

Todo el código sugerido por la IA fue revisado y adaptado antes de incorporarlo al proyecto.

---

# [Apellido, Nombre]

## Proyecto Final - Grupo N°4 / [Título de lo que hiciste]

## Fecha de Actualización: [dd/mm/aaaa]

[Descripción breve de lo que desarrollaste.]

### Métodos y elementos utilizados

- `[método o elemento]`: [para qué se usó].
- `[método o elemento]`: [para qué se usó].

### Archivos (Modificados, Creados, Eliminados)

**Creados:**
- `[ruta del archivo]`

**Modificados:**
- `[ruta del archivo]`

**Eliminados:** [Ninguno / indicar cuáles]

### Uso de IA

[Sí / No]: [qué herramienta usaste (Gemini, ChatGPT, Claude, etc.) y para qué].