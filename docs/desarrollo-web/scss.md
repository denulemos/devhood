---
sidebar_position: 4
---
# 🌐 CSS y SASS

[Formato README en Github](https://github.com/denulemos/DevDojo/blob/master/html.md)

## 🟦 **CSS**

### Qué es la Especificidad (Specificity) de CSS?

Es como el navegador determina que propiedad de CSS se debe aplicar a un elemento si hay varios en juego o muchos selectores.

Va del mas alto al mas bajo en especificidad:

* Estilos inline (Se aplica siempre)
* IDs
* Clases, atributos y pseudo-clases
* Elementos y pseudo-elementos (Compite)

```css
section p {
    color: red;
}

// Se va a aplicar este, ya que es el mas reciente en aparecer, y tiene una especificidad mayor
.p1 {
    color: green;
}

-----
<section>
 <p class="p1">Hola</p>
</section>
```

---

### ¿Qué es el modelo de caja (Box Model) en CSS y cómo funciona?

El modelo de caja (Box Model) en CSS es la forma en que se representan y se calculan las dimensiones de los elementos HTML en una página web. Cada elemento HTML se representa como una caja rectangular que consta de cuatro áreas principales: el contenido, el relleno, el borde y el margen.

- **Contenido (Content):** Es el área interior de la caja que contiene el contenido real del elemento, como texto, imágenes, etc.
- **Relleno (Padding):** Es el espacio entre el contenido y el borde de la caja. Se puede agregar relleno para aumentar el espacio entre el contenido y el borde.
- **Borde (Border):** Es el borde que rodea el contenido y el relleno de la caja. Se puede agregar un borde para darle un aspecto visual alrededor del contenido.
- **Margen (Margin):** Es el espacio entre el borde de la caja y los elementos adyacentes. Se puede agregar un margen para controlar el espacio entre los elementos en la página.

![box-model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

---

### Que es BEM?

BEM (Block Element Modifier) es una metodología para nombrar clases en HTML y CSS que facilita la escritura de código claro, estructurado y fácil de mantener. Su objetivo es dejar explícito qué representa cada clase y cómo se relaciona con la estructura del componente.

- **Bloque (Block):** Representa el componente principal o contenedor (por ejemplo, `header`).
- **Elemento (Element):** Es una parte del bloque que no tiene sentido por sí sola (por ejemplo, `header__title`).
- **Modificador (Modifier):** Indica una variación o estado del bloque o elemento (por ejemplo, `header__title--warning`).

**Ejemplo de nomenclatura BEM:**

```html
<header class="header">
  <h1 class="header__title header__title--warning">Título</h1>
</header>
```

Esto ayuda a evitar conflictos de estilos y hace que el código sea más predecible y escalable.

---

### Como declaro variables en CSS?

Puedes declarar variables en CSS utilizando la pseudo-clase `:root`, que representa el elemento raíz del documento. Así puedes definir variables globales que luego puedes reutilizar en todo tu CSS usando la función `var()`:

```css
:root {
  --color-3: #000000;
}

html, body {
  background-color: var(--color-3);
}
```

En este ejemplo, `--color-3` es una variable CSS que almacena el color negro, y luego se utiliza para establecer el color de fondo de la página. Las variables CSS ayudan a mantener tu código más limpio y fácil de mantener.

---

### ¿Qué son las Pseudoclases?

Si vemos los vínculos, tiene un color asignado que podemos cambiarlo por ejemplo si le pasamos el
mouse por arriba al elemento , eso lo haremos con lo que se llaman pseudo clases pero es necesario
trabajar de forma interna para poder hacerlo, por ejemplo

```html
<head>
 <style>
  a:hover {color: pink;}
 </style>
</head>
```

En el ejemplo anterior hemos dicho que los vínculos al pasarle el mouse por arriba se verán en otro color, por ejemplo en el caso anterior en pink.
Tenemos varias pseudo clases:

* a:hover => cuando pasamos el mouse por arriba del vínculo
* a:link => cuando aún no hemos visitado al vínculo
* a:visited => cuando hemos visitado al vínculo
* a:active => cuando le hacemos clic al vínculo

```css
a {color: white; text-decoration:none;}
a:hover {text-decoration:underline; }
```

## 🟪 **SASS**

### Qué es Sass?

Es un preprocesador que nos permite escribir codigo CSS de una forma mas dinamica, agregando sintaxis de un lenguaje de programacion, incluyendo variables, funciones, modulos y valores

Ayuda a tener un codigo modular, simple y escalable.

* Es completamente compatible con CSS
* Se puede escribir codigo mucho mas rapidamente
* Muchos framework actualmente estan construidos con sass
* Hay mucha documentacion

---

### Cual es la diferencia entre .sass y scss?

**.sass** y **.scss** son dos sintaxis diferentes para escribir SASS:

- **.sass** (Sass Indented Syntax): Usa indentación (espacios o tabs) para definir los bloques de código, no utiliza llaves `{}` ni punto y coma `;`. Es más concisa y legible para quienes prefieren la sintaxis tipo Python.
  
  ```sass
  // Sintaxis .sass
  $color: red
  body
  background: $color
  ```

- **.scss** (Sassy CSS): Es una extensión de CSS, por lo que todo CSS válido también es SCSS válido. Usa llaves `{}` y punto y coma `;`, igual que CSS, pero permite todas las características avanzadas de SASS.
  
  ```scss
  // Sintaxis .scss
  $color: red;
  body {
  background: $color;
  }
  ```

**Resumen:**  
- `.sass` es más minimalista y depende de la indentación.  
- `.scss` es más familiar para quienes ya conocen CSS y es la sintaxis más utilizada actualmente.

Ambas sintaxis se compilan al mismo CSS final, la elección depende de tus preferencias personales o del equipo de trabajo.

---

### Interpolacion


```scss
$selector: '.hero';
$propiedad: 'color';

#{$selector} {
 #{$propiedad}: red;
}

// Es lo mismo que =>

.hero {
 color: red;
}
```

---

### Nesting

```scss
// ----- SASS -----

.hero {
 //..estilos 1
  nav {
   //.. estilos 2
    a {
     //..estilos 3
    }
  }
}

// ----- CSS -----

.hero {
 //..estilos 1
}

.hero nav {
 //..estilos 2
}

.hero nav a {
 // ..estilos 3
}
```

---

### Selectores


```scss
// Selector de hijo directo (.item es hijo directo de .card)

.card > {
 .item {}
}

.card {
 > .item {}
}
```

---

### Mixins


Es un grupo de declaraciones de CSS que pueden reutilizarse. Por ejemplo, si uso box-shadow, tendria que escribir varios estilos para varios navegadores

```jsx
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

Entonces en SASS podemos usar mixins, que son como funciones que podemos invocar para reutilizar el codigo. Hasta tiene parametros y todo para cambiar los valores

```jsx
@mixin box-shadow($x, $y, $blur, $c){
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

Luego llamamos al mixin utilizando la directiva `include`

```jsx
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

---

### Condicionales if-else

Se puede utilizar if-else dentro de los mixins en SASS

```jsx
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}

@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

---

### Ciclos


Se pueden utilizar ciclos en SASS para repetir estilos

```jsx
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 100px * $i;
  }
}
```

Esto nos sirve para crear clases de forma dinamica

---

### Funciones


Se pueden crear funciones en SASS para reutilizar codigo

```jsx
@function suma($a, $b) {
  @return $a + $b;
}

div {
  width: suma(10px, 20px);
}
```

---

### Extend/Inheritance


Se puede utilizar `@extend` para heredar estilos de un selector a otro

```jsx
.btn {
  color: white;
  background-color: blue;
}

.btn-primary {
  @extend .btn;
  border: 1px solid black;
}
```

---

### Placeholder Selectors


Los placeholders son selectores que no se compilan a CSS, pero que pueden ser extendidos por otros selectores

```jsx
%btn {
  color: white;
  background-color: blue;
}

.btn-primary {
  @extend %btn;
  border: 1px solid black;
}
```