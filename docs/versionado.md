# 🗂️ Versionado y Deployment (Git, Mercurial, CI-CD etc.)

### **Git vs Mercurial**

Las diferencias principales entre **Git** y **Mercurial** son:

**1. Filosofía y Diseño**

- **Git**:
    - **Modelo distribuido**: Cada persona tiene una copia completa del repositorio, con todo el historial y las ramas.
    - **Rendimiento**: Git es rápido y maneja proyectos grandes sin problemas.
    - **Complejidad**: Tiene muchas funciones y comandos, lo que puede hacerlo más difícil de aprender al principio.

- **Mercurial**:
    - **Modelo distribuido**: Igual que Git, cada usuario tiene todo el historial.
    - **Simplicidad**: Mercurial es más sencillo y directo, ideal si buscas algo fácil de usar.
    - **Curva de aprendizaje**: Por su enfoque simple, suele ser más fácil de aprender que Git.

**2. Popularidad y Comunidad**

- **Git**:
    - **Adopción**: Es el sistema más usado hoy en día, sobre todo en plataformas como GitHub, GitLab y Bitbucket.
    - **Ecosistema**: Hay muchísimas herramientas, documentación y soporte para Git.

- **Mercurial**:
    - **Adopción**: Tiene menos usuarios y muchas plataformas han dejado de darle soporte (como Bitbucket).
    - **Comunidad**: Es más pequeña, por lo que puede costar más encontrar ayuda o recursos.

**3. Flujo de trabajo y rendimiento**

- **Git**:
    - **Ramas**: Crear y fusionar ramas es muy fácil y rápido, ideal para equipos que trabajan en paralelo.
    - **Rendimiento**: Funciona muy bien incluso con repositorios grandes.

- **Mercurial**:
    - **Ramas**: Usa un sistema diferente (named branches y bookmarks), menos flexible que Git pero suficiente para muchos casos.
    - **Rendimiento**: Va bien, aunque en proyectos enormes puede ser un poco más lento que Git.

**4. Características clave**

- **Git**:
    - **Flexibilidad**: Tiene muchos comandos y opciones para adaptar el flujo de trabajo.
    - **Staging Area**: Permite elegir qué cambios guardar en cada commit.

- **Mercurial**:
    - **Simplicidad**: No tiene staging area, así que el flujo es más directo.
    - **Facilidad de uso**: La línea de comandos es más simple y hay menos cosas que configurar.

**5. Soporte y Herramientas**

- **Git**:
    - **Herramientas**: Está integrado en casi todos los editores y servicios modernos (GitHub, GitLab, Bitbucket, VS Code, etc).
    - **Servicios en la nube**: Compatible con todos los grandes proveedores.

- **Mercurial**:
    - **Herramientas**: Tiene soporte en menos plataformas y editores.
    - **Comunidad**: Menos recursos y soporte en comparación con Git.

**6. Casos de uso y elección**

- **Git**: 
    - Perfecto para equipos grandes, proyectos open source y flujos de trabajo con muchas ramas.
    - Es el estándar en la industria.

- **Mercurial**: 
    - Bueno para equipos pequeños que quieren algo simple y rápido de usar.
    - Todavía lo usan algunos proyectos grandes como Mozilla.

| Característica                 | **Git**                                  | **Mercurial**                        |
|--------------------------------|------------------------------------------|--------------------------------------|
| **Popularidad**                | Muy popular, sobre todo con GitHub       | Menos popular, comunidad más chica   |
| **Complejidad**                | Más complejo, muchas funciones           | Más simple, fácil de aprender        |
| **Rendimiento**                | Muy eficiente en proyectos grandes       | Buen rendimiento, menos optimizado   |
| **Soporte para ramas**         | Muy fuerte y flexible                    | Suficiente, pero menos flexible      |
| **Flujo de trabajo**           | Flexible, ideal para equipos grandes     | Más simple y directo                 |
| **Herramientas y servicios**   | Gran soporte y variedad                  | Menos herramientas y servicios       |
| **Curva de aprendizaje**       | Más empinada                             | Más fácil para principiantes         |

**En resumen:**  
Git es la opción más usada hoy en día, sobre todo si tu proyecto es grande o necesitas muchas herramientas y flexibilidad. Mercurial es una buena alternativa si buscas algo más simple y directo, aunque cada vez se usa menos.

---

### **Comandos Básicos de Git**

- `git init`: Inicia un repositorio en el directorio actual.
- `git status`: Muestra el estado de los archivos (si están listos para subir o no).
- `git add archivo` o `git add *.exe`: Agrega archivos para el próximo commit.
- `git commit -m "mensaje"`: Guarda los cambios con un mensaje.
- `git log`: Muestra el historial de cambios.
- `git remote add origin <url>`: Agrega la dirección del repositorio remoto (por ejemplo, en GitHub).
- `git push -u origin master`: Sube los cambios al repositorio remoto.
- `git clone <url>`: Descarga un repositorio remoto.
- `git pull origin master`: Trae los últimos cambios del repositorio remoto.
- `git branch <nombre>`: Crea una nueva rama.
- `git log --graph --all --oneline`: Muestra el historial de forma gráfica y resumida.

Si agregás un archivo **.gitignore**, podés evitar que se suban archivos que no te interesan (como cachés o temporales).

**Niveles de configuración:**
- `--local`: Solo para el repositorio actual.
- `--global`: Para tu usuario.
- `--system`: Para todos los usuarios del sistema.

---

### **Conceptos base de Git**

- **Repositorio remoto:** Donde se guarda el código en la nube o en un servidor.
- **Repositorio local:** Tu copia en la computadora.
- **Working directory:** Carpeta donde trabajás con los archivos.
- **Versión:** Estado del repositorio en un momento dado.
- **Commit:** Cambios guardados en el historial.
- **Branch:** Rama, referencia a un commit específico (por defecto suele ser master o main).

---

### **Manejo de Branches (Git Flow)**

- **Master:** Rama principal, lista para producción.
- **Develop:** Rama de desarrollo, donde se hacen los cambios.
- **Feature:** Para nuevas funcionalidades.
- **Hotfix:** Para arreglos urgentes.
- **Release:** Para preparar nuevas versiones.

---

### **Trunk Based Development vs Git Flow**

**Trunk Based Development**:
- Todos trabajan sobre la rama principal (main o trunk).
- Si hacés un cambio, creás una rama corta y la unís rápido.
- Menos ramas largas, menos conflictos.
- Ventaja: Todo está más simple y actualizado.
- Desventaja: Hay que tener cuidado de no romper nada.

**Git Flow**:
- Hay varias ramas: main, develop, feature, release, hotfix.
- Cada cosa importante tiene su propia rama.
- Ventaja: Mejor organización para equipos grandes.
- Desventaja: Puede ser más complicado y lento.

**¿Cuál conviene?**
- Equipos chicos o proyectos simples: Trunk Based Development.
- Proyectos grandes o con muchos colaboradores: Git Flow.

| Estrategia                | ¿Cómo se usa?                       | ¿Cuándo conviene?         |
|---------------------------|-------------------------------------|---------------------------|
| Trunk Based Development   | Todos en la rama principal           | Equipos chicos, simple    |
| Git Flow                  | Muchas ramas para cada cosa          | Proyectos grandes         |

---

### **Explica la diferencia entre `git reset --soft`, `--mixed` y `--hard`.**

`git reset` se usa para deshacer cambios en tu repositorio. La diferencia entre `--soft`, `--mixed` y `--hard` es cómo afectan el área de preparación (staging area) y el directorio de trabajo.

**`git reset --soft <commit>`**:
  - Deshace los commits hasta el commit especificado.
  - Mantiene los cambios en el área de preparación (staging area).
  - Útil si querés rehacer commits sin perder los cambios.

**`git reset --mixed <commit>`** (por defecto si no especificás):
  - Deshace los commits hasta el commit especificado.
  - Mantiene los cambios en el directorio de trabajo, pero los quita del área de preparación.
  - Útil si querés rehacer commits y trabajar en los cambios sin subirlos aún.
  
**`git reset --hard <commit>`**:
  - Deshace los commits hasta el commit especificado.
  - Borra todos los cambios en el área de preparación y en el directorio de trabajo.
  - Útil si querés deshacer todo y volver a un estado anterior sin conservar cambios.

---


### **¿Qué es CI/CD?**

**CI/CD** significa **Integración Continua** y **Entrega/Despliegue Continuo**.

- **Integración Continua (CI):** Cada vez que alguien sube cambios, se ejecutan pruebas automáticas para detectar errores rápido.
- **Entrega/Despliegue Continuo (CD):** Si todo sale bien, el código se puede poner en producción automáticamente.

**¿Por qué sirve?**
- Encontrás errores antes.
- El código llega más rápido a los usuarios.
- Menos trabajo manual.

**Ejemplo:**
1. Subís tu código a GitHub.
2. Un robot (como GitHub Actions) lo prueba automáticamente.
3. Si todo pasa, lo sube a producción.

**En resumen:** CI/CD automatiza pruebas y despliegues para que tu software llegue más rápido y seguro.

---

### **¿Qué es un Pipeline?**

Un **pipeline** es como una línea de montaje automática para tu código.

Cuando subís cambios, el pipeline sigue una serie de pasos (probar, construir, desplegar) en orden. Si un paso falla, los siguientes no se hacen.

**Ejemplo de pipeline:**
1. Revisar el código.
2. Ejecutar pruebas.
3. Construir la app.
4. Subirla a producción.

Así te asegurás de que todo funciona bien antes de que tu software llegue a los usuarios, y sin hacerlo a mano cada vez
