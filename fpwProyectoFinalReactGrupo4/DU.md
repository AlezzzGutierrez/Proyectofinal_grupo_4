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
# [Salas, Yesica Fabiana]
# Proyecto Final - Grupo N°4 / La Gran Aventura en la Granja
# Fecha de Actualización: [ 17/11/2026 -- 18/11/2026]
# Participacion:
mi participacion consta a travez de la correcciones de errores

# Métodos y elementos utilizados
* React Hooks (useState, useEffect, useContext, useRef): Para manejar el estado de los juegos, el ciclo de vida de los componentes, el contexto global de la aplicación y las referencias al sistema de audio.

* React Router DOM (createBrowserRouter, RouterProvider): Para la navegación entre las distintas pantallas (login, juegos, panel del docente, resultados) y la protección de rutas privadas.

* Context API (JuegoContext, AuthorizationContext, AudioContext): Para compartir el estado del juego, la sesión del usuario y el control del audio de forma global en toda la aplicación.

* Axios: Utilizado en audioService.js e imagenService.js para realizar peticiones HTTP asíncronas locales y cargar los archivos multimedia desde la carpeta public.

* Funciones asíncronas (async/await): Implementadas en la carga de imágenes, música y en el proceso de login/registro de usuarios.

* Local Storage: Para persistir la sesión del usuario, guardar los puntajes de las partidas y los usuarios registrados.

# Archivos (Modificados, Creados, Eliminados)
* Creados:

- src/contexts/AudioContext.jsx
- src/services/audioService.js
- src/services/imagenService.js
- src/components/ControlAudio.jsx

* Modificados:

- src/App.jsx
- src/main.jsx
- src/routes/routes.jsx
- src/pages/LoginUnico.jsx
- src/pages/SeleccionUsuario.jsx
- src/pages/PanelDocente.jsx
- src/pages/Resultados.jsx
- src/pages/JuegoComida.jsx
- src/pages/JuegoIntruso.jsx
- src/contexts/JuegoContext.jsx
- src/services/resultadosService.js
- src/services/validacion.js
- src/components/Menu.jsx
- src/components/RutaDocente.jsx
- src/components/Form.jsx
- src/data/preguntasComida.js
- src/data/preguntasIntruso.js

* Eliminados:

- src/components/Resultados.jsx (código duplicado).
- src/components/MusicaFondo.jsx (reemplazado por una lógica de audio más robusta con Context).

# Uso de IA
Sí: Se utilizó la herramienta DeepSeek para la corrección de errores de sintaxis tras conflictos de Git, y la implementación del contexto de audio para evitar que la música se corte al cambiar de pantalla.

--

# Gutierrez, Gianella Alexandra

## Proyecto Final - Grupo N°4 / Navegación, Contexto de Juego, Multimedia y Diseño Visual 

## Fecha de Actualización: 18/11/2026

Me encargué de la conexión e integración de las distintas pantallas de la aplicación mediante rutas públicas y protegidas, la creación del contexto global para la gestión de datos y puntajes de los juegos, la incorporación de música de fondo y efectos de sonido interactivos, el diseño visual y estilos CSS completos de la plataforma, la implementación de la pantalla de selección de rol de usuario, y el mantenimiento general y distribución de tareas dentro del proyecto.

### Métodos y elementos utilizados

- `react-router-dom` (`Routes`, `Route`, `useNavigate`, `Link`, ruta comodín `*`): para conectar todas las vistas de la aplicación, gestionar la navegación entre pantallas y configurar la página de error 404 personalizada.
- `React Context` y `Custom Hooks` (`JuegoContext`, `useJuego`, `useAuthorization`): para centralizar, compartir y persistir los datos, estados y puntajes de las partidas entre los distintos componentes.
- `React Hooks` (`useState`, `useEffect`): para controlar el flujo de rondas, puntajes, estados de respuesta y la carga dinámica de recursos multimedia.
- `Axios` y funciones asíncronas (`async/await`, `api.head`, `audioService`, `imagenService`): para verificar y cargar de forma asíncrona la música de fondo, los efectos de sonido de acierto/error y las imágenes de los minijuegos desde la carpeta pública.
- `React Bootstrap` y hojas de estilo `CSS` personalizadas: para estructurar el diseño responsivo, adaptar una paleta infantil pastel (tipografías *Fredoka* y *M PLUS Rounded 1c*, botones con relieve 3D y tarjetas redondeadas) y organizar el panel del docente.
- `sessionStorage` y `Array.filter` / `Array.reduce`: para gestionar los datos del jugador activo según su rol y separar las estadísticas y promedios reales de los niños respecto a las partidas de prueba de los docentes.

### Archivos (Modificados, Creados, Eliminados)

**Creados:**
- `src/styles/` (todos los archivos CSS del proyecto: `SeleccionUsuario.css`, `PanelDocente.css`, `JuegoComida.css`, `JuegoIntruso.css`, etc.)
- `src/routes/` (archivo de configuración y protección de rutas de la aplicación)
- `src/context/JuegoContext.jsx`
- `src/hooks/useJuego.js`
- `src/music/` (creada inicialmente en `src` y luego trasladada a `public/music/`)
- `public/img/` (recursos gráficos de los animales y elementos de los juegos)

**Modificados:**
- `src/App.jsx`
- `src/components/Menu.jsx`
- `src/components/PanelDocente.jsx`
- `src/components/JuegoComida.jsx`
- `src/components/JuegoIntruso.jsx`
- `src/components/Error.jsx`
- `src/services/audioService.js`

**Eliminados:** Ninguno (únicamente se reubicó la carpeta `music` hacia `public` para su carga mediante Axios).

### Uso de IA

Sí: utilicé Gemini como copiloto de desarrollo para comprender mejor el código implementado por mis compañeros, resolver estructuras lógicas que presentaron complejidad (como el filtrado de roles y la integración de audio con Axios), y diseñar la estética visual general de la página, sus hojas de estilo CSS y recursos gráficos.