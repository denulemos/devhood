---
id: accesibilidad
title: 🌐 Accesibilidad
---

[Formato README en Github](https://github.com/denulemos/DevDojo/blob/master/Accesibilidad.md)

### 🟢 ¿Qué significa a11y y por qué es importante en el desarrollo web?

**A11y** es una forma corta de escribir "accesibilidad" porque hay 11 letras entre la "a" y la "y". En pocas palabras, significa hacer que los sitios web sean fáciles de usar para **todas las personas**, incluidas aquellas con discapacidades.

¿Por qué es importante? Porque **todos** deberían poder usar internet, sin importar si tienen problemas de visión, audición o movilidad. Algunos ejemplos de cómo mejorar la accesibilidad son:
- **Texto alternativo en imágenes**: Describe las imágenes para personas con discapacidad visual que usan lectores de pantalla.
- **Colores con buen contraste**: Ayudan a las personas con problemas de visión a leer mejor.

En resumen, la accesibilidad hace que la web sea más inclusiva y útil para todos.

---

### 🟢 ¿Qué es un atributo alt en imágenes y para qué se usa?

El atributo `alt` es un texto que describe lo que hay en una imagen. Es como un "plan B" para cuando la imagen no se carga o para personas que no pueden verla.

¿Por qué es útil?
1. Si la imagen no carga, el texto explica qué debería estar ahí.
2. Ayuda a las personas con discapacidad visual que usan lectores de pantalla.

Ejemplo práctico:

```html
<img src="perro.jpg" alt="Un perro jugando en el parque">
```

Si la imagen no aparece, el usuario verá: "Un perro jugando en el parque". Esto hace que la web sea más amigable para todos.

---

### 🟢 WCAG: Las reglas de oro de la accesibilidad

Las **WCAG** (Pautas de Accesibilidad para el Contenido Web) son un conjunto de reglas internacionales creadas por el W3C para hacer que los sitios web sean accesibles. Hay 3 niveles:
- **A**: Lo básico.
- **AA**: Lo intermedio (el más común).
- **AAA**: Lo avanzado (ideal para sitios importantes como los del gobierno).

Las WCAG se basan en 4 principios clave:
1. **Perceptible**: Todo debe ser visible o audible.
2. **Operable**: Fácil de usar con teclado o mouse.
3. **Comprensible**: Claro y fácil de entender.
4. **Robusto**: Compatible con diferentes dispositivos y tecnologías.

En pocas palabras, seguir las WCAG hace que tu sitio sea accesible para todos.

---

### 🟢 Principios POUR: La base de la accesibilidad

POUR significa **Perceptible, Operable, Comprensible y Robusto**. Aquí te explico cada uno de forma sencilla:

1. **Perceptible (Perceptible)**: 
  - Todos los usuarios deberían poder "ver" o "escuchar" la información importante.
  - Ejemplo: Usa `alt` en imágenes, agrega subtítulos a videos y no dependas solo del color para transmitir información.

2. **Operable (Operable)**:
  - La interfaz debe ser fácil de usar con teclado, mouse o pantalla táctil.
  - Ejemplo: Asegúrate de que los botones sean accesibles y que los formularios den suficiente tiempo para completarse.

3. **Comprensible (Comprensible)**:
  - Todo el contenido debe ser fácil de entender.
  - Ejemplo: Usa un lenguaje simple, haz que la navegación sea predecible y escribe mensajes de error claros.

4. **Robusto (Robusto)**:
  - Tu sitio debe funcionar en diferentes dispositivos, navegadores y tecnologías de asistencia.
  - Ejemplo: Asegúrate de que tu sitio sea compatible con lectores de pantalla y que se vea bien en cualquier tamaño de pantalla.

---

### 🟢 ¿Qué etiquetas semánticas de HTML ayudan a mejorar la accesibilidad?

Las etiquetas semánticas de HTML son aquellas que describen claramente su propósito y el contenido que contienen. Ayudan a los navegadores y tecnologías de asistencia a entender mejor la estructura de una página web. Aquí tienes algunas de las más importantes:

1. **`<header>`**: Define el encabezado de una página o sección. Suele contener el título o el logo.
  ```html
  <header>
     <h1>Bienvenido a mi sitio web</h1>
  </header>
  ```

2. **`<nav>`**: Representa un bloque de enlaces de navegación.
  ```html
  <nav>
     <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#contacto">Contacto</a></li>
     </ul>
  </nav>
  ```

3. **`<main>`**: Indica el contenido principal de la página. Solo debe haber uno por página.
  ```html
  <main>
     <p>Este es el contenido principal de la página.</p>
  </main>
  ```

4. **`<article>`**: Representa contenido independiente, como un artículo o una publicación de blog.
  ```html
  <article>
     <h2>Mi primer artículo</h2>
     <p>Este es el contenido del artículo.</p>
  </article>
  ```

5. **`<section>`**: Agrupa contenido relacionado dentro de una página.
  ```html
  <section>
     <h2>Sección de noticias</h2>
     <p>Últimas noticias del día.</p>
  </section>
  ```

6. **`<footer>`**: Define el pie de página de una página o sección. Suele contener información de contacto o derechos de autor.
  ```html
  <footer>
     <p>© 2023 Mi Sitio Web</p>
  </footer>
  ```

7. **`<aside>`**: Contiene contenido relacionado, como barras laterales o widgets.
  ```html
  <aside>
     <p>Publicidad o enlaces relacionados.</p>
  </aside>
  ```

8. **`<label>`**: Asocia un texto descriptivo con un campo de formulario, mejorando la accesibilidad.
  ```html
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">
  ```

Estas etiquetas no solo mejoran la accesibilidad, sino que también hacen que tu código sea más fácil de leer y mantener.

---

### 🟢 ¿Qué es el atributo aria-label y en qué se diferencia de alt?

El atributo `aria-label` se utiliza para proporcionar una etiqueta accesible para elementos que no tienen un texto visible. Es especialmente útil para elementos interactivos como botones o íconos. Por otro lado, el atributo `alt` se usa específicamente en imágenes para describir su contenido.

**Diferencias clave**:
- **Uso**: `aria-label` se aplica a cualquier elemento, mientras que `alt` solo se aplica a imágenes.
- **Propósito**: `aria-label` proporciona información adicional sobre la función de un elemento, mientras que `alt` describe el contenido de una imagen.

Ejemplo de `aria-label`:

```html
<button aria-label="Cerrar">X</button>
```

Ejemplo de `alt`:

```html
<img src="logo.png" alt="Logotipo de la empresa">
```

Ambos atributos son importantes para mejorar la accesibilidad, pero se utilizan en diferentes contextos.

---

### 🟢 ¿Por qué es importante usar etiquetas `<label>` con los campos de formulario?

Las etiquetas `<label>` son esenciales para mejorar la accesibilidad de los formularios. Asociar un `<label>` con un campo de formulario ayuda a los usuarios, especialmente a aquellos que utilizan tecnologías de asistencia, a entender el propósito de cada campo.

**Ventajas de usar `<label>`:**
1. **Mejora la accesibilidad**: Los lectores de pantalla leen el texto del `<label>` cuando el usuario navega por los campos del formulario.
2. **Aumenta la usabilidad**: Los usuarios pueden hacer clic en el texto del `<label>` para enfocar el campo correspondiente.
3. **Claridad**: Proporciona una descripción clara del propósito de cada campo.

**Ejemplo:**

```html
<label for="email">Correo electrónico:</label>
<input type="email" id="email" name="email">
```

En este ejemplo, el atributo `for` del `<label>` está vinculado al atributo `id` del campo de entrada. Esto asegura que ambos estén relacionados, mejorando la experiencia del usuario.

En resumen, usar `<label>` no solo hace que los formularios sean más accesibles, sino que también mejora la experiencia general para todos los usuarios.

---

### 🟢 ¿Qué rol cumple el contraste de colores en accesibilidad?

El contraste de colores es crucial para que el texto y los elementos visuales sean legibles para todos, especialmente para personas con baja visión o daltonismo. Si el contraste es bajo, puede ser difícil distinguir el texto del fondo.

**¿Cómo asegurarte de que el contraste sea adecuado?**
1. Usa herramientas en línea para verificar el contraste, como [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
2. Sigue las pautas WCAG, que recomiendan un contraste mínimo de 4.5:1 para texto normal y 3:1 para texto grande.

**Ejemplo de buen contraste:**
- Texto negro sobre fondo blanco ✅

**Ejemplo de mal contraste:**
- Texto gris claro sobre fondo blanco ❌

En resumen, un buen contraste de colores mejora la legibilidad y hace que tu contenido sea accesible para más personas.

---

### 🟡 ¿Cuál es la diferencia entre `aria-label`, `aria-labelledby` y `aria-describedby`? ¿Cuándo usar cada uno?


`aria-label`, `aria-labelledby` y `aria-describedby` son atributos que ayudan a que los elementos de una página sean más accesibles para personas que usan lectores de pantalla.

1. **`aria-label`**:
  - Sirve para darle un "nombre" a un elemento que no tiene texto visible.
  - Ejemplo:
    ```html
    <button aria-label="Cerrar">X</button>
    ```
    El lector de pantalla va a decir "Cerrar" en vez de "X".

2. **`aria-labelledby`**:
  - Usa el texto de otro elemento como etiqueta.
  - Ejemplo:
    ```html
    <h1 id="titulo">Formulario de contacto</h1>
    <form aria-labelledby="titulo">
     <!-- Campos del formulario -->
    </form>
    ```
    El lector de pantalla va a leer "Formulario de contacto" como etiqueta del formulario.

3. **`aria-describedby`**:
  - Agrega una descripción extra para un elemento.
  - Ejemplo:
    ```html
    <input type="text" id="nombre" aria-describedby="ayuda-nombre">
    <p id="ayuda-nombre">Escribí tu nombre completo.</p>
    ```
    El lector de pantalla va a leer "Escribí tu nombre completo" después de anunciar el campo.

**En resumen**:
- `aria-label`: Le ponés un nombre al elemento.
- `aria-labelledby`: Usás un texto que ya está en la página como etiqueta.
- `aria-describedby`: Sumás una explicación adicional.

---

 