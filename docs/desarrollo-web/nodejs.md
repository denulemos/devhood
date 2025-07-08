# 💚 NodeJS

### **¿Qué es Node.js y para qué se utiliza?**

Node.js es un entorno de ejecución de JavaScript que se ejecuta en el servidor. Fue construido sobre el motor V8 de Google Chrome, lo que le permite ejecutar código JavaScript fuera del navegador. 

Se utiliza principalmente para construir aplicaciones del lado del servidor, como APIs, aplicaciones en tiempo real (chat, notificaciones), servidores web, y más. Su arquitectura basada en eventos y no bloqueante lo hace ideal para manejar múltiples conexiones simultáneamente con alta eficiencia.

Algunas de las ventajas de Node.js incluyen:

- **Velocidad**: Gracias al motor V8, el código JavaScript se ejecuta rápidamente.
- **Escalabilidad**: Su modelo de I/O no bloqueante permite manejar grandes cantidades de solicitudes concurrentes.
- **Ecosistema**: Con npm, Node.js tiene una de las bibliotecas más grandes y activas del mundo.

---

### **¿Cuál es la diferencia entre Node.js y el navegador en cuanto a ejecución de JavaScript?**

En términos simples, la diferencia principal entre Node.js y el navegador al ejecutar JavaScript es **dónde y cómo se ejecuta el código**:

1. **Entorno**:
    - En el navegador, JavaScript se ejecuta en un entorno diseñado para interactuar con páginas web. Tiene acceso al DOM (Document Object Model) para manipular elementos de la página y a APIs específicas del navegador como `alert`, `fetch`, o `localStorage`.
    - En Node.js, JavaScript se ejecuta en un entorno del lado del servidor. No tiene acceso al DOM ni a las APIs del navegador, pero ofrece módulos y herramientas para manejar archivos, redes, procesos, y más.

2. **Propósito**:
    - En el navegador, JavaScript se usa principalmente para crear experiencias interactivas en la web.
    - En Node.js, se usa para construir aplicaciones del lado del servidor, como APIs, servidores web, o herramientas de línea de comandos.

3. **APIs disponibles**:
    - El navegador tiene APIs específicas para trabajar con la interfaz de usuario.
    - Node.js tiene módulos como `fs` (para manejar archivos), `http` (para crear servidores), y `os` (para información del sistema operativo).

En resumen, el navegador es para la web y Node.js es para el servidor. Ambos usan JavaScript, pero en contextos muy diferentes.

---

### **¿Qué es el Event Loop en Node.js?**


El **Event Loop** en Node.js es un mecanismo fundamental que permite manejar operaciones asíncronas de manera eficiente. Es el encargado de coordinar la ejecución de tareas, la gestión de eventos y las operaciones no bloqueantes.

Node.js utiliza un modelo de ejecución basado en eventos y no bloqueante, lo que significa que puede manejar múltiples operaciones simultáneamente sin necesidad de bloquear el hilo principal. El Event Loop es el componente que hace esto posible.

**¿Cómo funciona el Event Loop?**

1. **Call Stack (Pila de llamadas)**:
    - Es donde se ejecuta el código JavaScript de manera síncrona. Las funciones se apilan y desapilan a medida que se ejecutan.

2. **Node APIs**:
    - Cuando se realiza una operación asíncrona (como leer un archivo o hacer una solicitud HTTP), esta se delega a las APIs de Node.js, que manejan la operación en segundo plano.

3. **Task Queue (Cola de tareas)**:
    - Una vez que una operación asíncrona se completa, su callback se coloca en la cola de tareas, esperando a ser ejecutado.

4. **El Event Loop**:
    - El Event Loop verifica constantemente si el Call Stack está vacío. Si lo está, toma la siguiente tarea de la cola de tareas y la ejecuta.

El Event Loop tiene varias fases, cada una con un propósito específico:

- **Timers**: Ejecuta callbacks programados con `setTimeout` y `setInterval`.
- **I/O Callbacks**: Maneja callbacks de operaciones I/O.
- **Idle, Prepare**: Usado internamente por Node.js.
- **Poll**: Recupera nuevos eventos I/O y ejecuta callbacks relacionados.
- **Check**: Ejecuta callbacks de `setImmediate`.
- **Close Callbacks**: Maneja eventos de cierre, como `socket.on('close')`.

- Permite manejar miles de conexiones concurrentes con un solo hilo.
- Es ideal para aplicaciones en tiempo real, como chats o servidores de streaming.

---

### **¿Qué son los módulos en Node.js? ¿Cuál es la diferencia entre CommonJS y ES Modules?**

Node.js soporta dos sistemas de módulos principales:

**CommonJS (CJS)**

- Es el sistema de módulos por defecto en Node.js.
- Utiliza `require` para importar módulos y `module.exports` o `exports` para exportarlos.
- Se ejecuta de manera síncrona, lo que significa que los módulos se cargan en el orden en que se requieren.

    ```javascript
    // archivo.js
    module.exports = function saludar() {
        console.log("Hola desde CommonJS");
    };

    // main.js
    const saludar = require('./archivo');
    saludar();
    ```

**ES Modules (ESM)**

- Es el sistema de módulos estándar de JavaScript introducido en ES6.
- Utiliza `import` para importar módulos y `export` para exportarlos.
- Se ejecuta de manera asíncrona, lo que permite cargar módulos de forma más eficiente.
- Requiere que los archivos tengan la extensión `.mjs` o que el campo `"type": "module"` esté definido en el `package.json`.

    ```javascript
    // archivo.mjs
    export function saludar() {
        console.log("Hola desde ES Modules");
    }

    // main.mjs
    import { saludar } from './archivo.mjs';
    saludar();
    ```

| Característica         | CommonJS (CJS)         | ES Modules (ESM)       |
|------------------------|------------------------|------------------------|
| Sintaxis               | `require` / `module.exports` | `import` / `export`   |
| Ejecución              | Síncrona              | Asíncrona              |
| Compatibilidad         | Soportado por defecto | Requiere configuración |
| Ámbito de exportación  | Objeto mutable        | Exportación estática   |

En general, CommonJS es ideal para proyectos existentes o cuando se necesita compatibilidad con versiones anteriores de Node.js. Por otro lado, ES Modules es el estándar moderno y se recomienda para nuevos proyectos.

--- 

### **¿Qué es npm y qué diferencia hay con npx?**

npm (Node Package Manager) es una herramienta que viene con Node.js y se utiliza para instalar, compartir y gestionar paquetes (bibliotecas o herramientas) de JavaScript. Es como una tienda de aplicaciones, pero para desarrolladores.

**¿Qué hace npm?**
- Instala paquetes desde un repositorio en línea.
- Permite gestionar dependencias de un proyecto.
- Ayuda a ejecutar scripts definidos en el archivo `package.json`.

**¿Qué es npx y en qué se diferencia?**
- npx es una herramienta que también viene con npm (a partir de la versión 5.2.0) y se utiliza para ejecutar paquetes directamente sin necesidad de instalarlos globalmente.
- Es útil para probar herramientas o ejecutar comandos sin ensuciar tu sistema con instalaciones innecesarias.

**Ejemplo práctico:**
- Con npm: Si quieres usar una herramienta como `create-react-app`, primero necesitas instalarla globalmente con `npm install -g create-react-app` y luego ejecutarla con `create-react-app my-app`.
- Con npx: Puedes ejecutarla directamente con `npx create-react-app my-app` sin instalarla globalmente.

En resumen:
- Usa **npm** para instalar y gestionar paquetes.
- Usa **npx** para ejecutar paquetes de manera temporal o probar herramientas sin instalarlas.

--- 

### **¿Qué es nodemon y para qué se utiliza?**

Nodemon es una herramienta que se utiliza en el desarrollo con Node.js para facilitar el proceso de reinicio del servidor. Normalmente, cuando haces cambios en tu código, necesitas detener y reiniciar manualmente el servidor para que los cambios se reflejen. Nodemon automatiza este proceso.

**¿Cómo funciona?**
- Nodemon observa los archivos de tu proyecto y, cuando detecta un cambio, reinicia automáticamente el servidor.
- Esto ahorra tiempo y mejora la productividad, ya que no necesitas reiniciar el servidor manualmente cada vez que haces un cambio.

**¿Cómo se instala y usa?**
1. Instálalo globalmente con npm:
    ```bash
    npm install -g nodemon
    ```
2. En lugar de ejecutar tu aplicación con `node`, usa `nodemon`:
    ```bash
    nodemon app.js
    ```

**Ventajas:**
- Ideal para desarrollo, ya que no necesitas preocuparte por reiniciar el servidor.
- Compatible con cualquier aplicación Node.js.