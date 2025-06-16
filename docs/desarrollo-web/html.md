---
sidebar_position: 3
---
# 🌐 HTML

### **¿Cuál es la diferencia entre h1, h2, etc.?**

Los elementos de encabezado h1 a h6 se utilizan para indicar la importancia del contenido que les sigue. Cuanto menor sea el número, mayor será la importancia, por lo que los elementos h2 tienen menos importancia que los elementos h1. Utiliza solo un elemento h1 por página y coloca los encabezados de menor importancia debajo de los de mayor importancia.

---

### **Vínculos Relativos en HTML**

Los vínculos relativos son aquellos que permiten interconectar los archivos de nuestro sitio (internos, dentro de nuestro sitio o servidor).
Si por ejemplo quiero ir de mi archivo index a mi contacto.html lo haré de la siguiente forma:

```html
<!doctype html>

<title>Vinculo</title>
<a href="contacto.html" title="Contacto"> Contacto </a>
```

En el ejemplo anterior, hemos visto también cómo se ha agregado el atributo title, este es obligatorio por cuestiones de accesibilidad y también nos permite describir nuestros vínculos para hacer aparecer un etiqueta amarilla llamada tooltip con dicha información.
Si mi archivo contacto se encontrase dentro de una carpeta la ruta a marcar sería la siguiente:

```html
<!doctype html>

<title>Vinculo</title>
<a href="en/contacto.html" title="Contacto"> Contacto </a>
```

---

### **Vínculos Absolutos en HTML**


Es la URL que dirige a un recurso en la web, por ejemplo, si quiero ir a google.com desde mi archivo index.html, lo haré de la siguiente forma:

```html
<!doctype html>

<title>Vinculo</title>
<a href="https://www.google.com" title="Contacto"> Contacto </a>
```

<a id="html4"></a>

### **¿Para qué es el Doctype?**

[Volver al indice](#html-base)

El doctype es una declaración que se utiliza en un documento HTML para informar al navegador web sobre la versión de HTML en la que está escrito el documento. El doctype debe ser la primera línea de un documento HTML y se utiliza para garantizar que el navegador web interprete el documento correctamente.

```html
<!DOCTYPE html>
```

---

### **Atributo placeholder para campos en HTML**


El atributo placeholder me permite guiar al usuario con referencia lo que tiene que colocar dentro de nuestro campo. Por ejemplo:

```html
<label> Nombre <br> <input type=”text” placeholder=”Nombre Completo”> </label>
```

Esto indica al usuario que en ese campo va el nombre completo, o tambien se podria poner un ejemplo.

---

### **Que es HTML Semantico?** 


Es el uso de etiquetas introducidas en HTML5 en vez de divs y span para la division de secciones en mi HTML.

```html
<header> </header>
<nav> </nav>
<main> </main>
<section> </section>
<article> </article>
<aside> </aside>
<footer> </footer>
```

Esto a nivel de renderizado no cambia nada, pero si hace que mi codigo sea mucho mas accesible. Los motores de busqueda pueden entender mejor el contenido de mi pagina, y los lectores de pantalla tambien.


---

### **Que son los atributos de los elementos HTML?**


Los atributos HTML son palabras especiales utilizadas dentro de la etiqueta de apertura de un elemento para controlar el comportamiento del elemento. El atributo src en un elemento img especifica la URL de la imagen (dónde se encuentra la imagen).

`<img src="linkaimagen.com/fcc_secondary.svg">`

---

### **Cuáles son las partes de un documento HTML?**


Además de todo esto, un documento HTML ha de estar delimitado por la etiqueta HTML.
Dentro de este documento, podemos asimismo distinguir dos partes principales:

- La cabecera, delimitada por la etiqueta HEAD, donde colocaremos etiquetas de índole informativo, como por ejemplo el titulo de nuestra página. El contenido de la cabecera no suele aparecer en el cuerpo de la página, pero sirve a los navegadores y otros sistemas para encontrar información útil para entender y procesar el documento.
- El cuerpo, flanqueado por la etiqueta BODY, que será donde colocaremos nuestro texto e imágenes delimitados a su vez por otras etiquetas como las que hemos visto.

El resultado de un documento básico tiene la siguiente estructura:

```html
<html>
  <head>
    <title>Mi documento básico</title>
  </head>
<body>
  <p>Este es el cuerpo de mi primera página HTML</p>
  <p>Este segundo párrafo también forma parte del cuerpo</p>
</body>
</html>
```

---

### **Puedo escribir las etiquetas en mayúscula y minúscula?**

En HTML las mayúsculas y minúsculas son indiferentes. Quiere decir que las etiquetas pueden ser escritas con cualquier tipo de combinación de mayúsculas y minúsculas. Resulta, sin embargo, aconsejable acostumbrarse a escribirlas en minúscula, ya que otras tecnologías que pueden c onvivir
con nuestro HTML (XML por ejemplo) no son tan permisivas y nunca viene mal hacernos a las buenas costumbres desde el principio, para evitar fallos triviales en un futuro.

---

### **Qué son los mapa de imagen?**


Aunque el uso de los mapas de imagen se ha reducido drásticamente en los últimos años, aún se utilizan en algunos sitios especializados. Muchas agencias de viaje y sitios relacionados utilizan mapas geográficos para
seleccionar el destino del viaje.

Un mapa de imagen permite definir diferentes zonas "pinchables" dentro de una imagen. El usuario puede clickear sobre cada una de las zonas definidas y cada una de ellas puede apuntar a una URL diferente.
Siguiendo el ejemplo anterior, una sola imagen que muestre un mapa de todos los continentes puede definir una zona diferente para cada continente. De esta forma, el usuario puede clickear sobre la zona correspondiente a cada continente para que el navegador muestre la página que contiene los viajes disponibles a ese destino.
Las zonas o regiones que se pueden definir en una imagen se crean mediante rectángulos, círculos y polígonos. Para crear un mapa de imagen, en primer lugar se inserta la imagen original mediante la etiqueta <img>. A continuación, se utiliza la etiqueta `<map>` para definir las zonas o regiones de la imagen. Cada zona se define mediante la etiqueta `<area>`.

<img width="197" alt="image" src="https://github.com/denulemos/denobible/assets/32619895/627950b8-7461-48b2-9846-5be8d3f355b0">

Ejemplo de imagen que incluye un mapa de imagen
Utilizando un círculo, dos rectángulos y un polígono se pueden definir fácilmente cuatro zonas clickeables en la imagen mediante el siguiente código HTML:

```jsx
<img src="imagen.gif" usemap="#mapa_zonas" />
<map name="mapa_zonas">
<area shape="rect" coords="20,25,84,113" href="rectangulo.html" />
<area shape="polygon" coords="90,25,162,26,163,96,89,25,90,24"
href="triangulo.html" /> <area shape="circle" coords="130,114,29"
href="circulo.html" />
area shape="rect" coords="19,156,170,211" [href="mailto:rectangulo@direccion.com](mailto:href=%22mailto:rectangulo@direccion.com)" />
<area shape="default" nohref="nohref" />
</map>
```

La verdad es que los mapas de imágenes son tediosos a veces de crear, y para eso contamos con generadores online por ejemplo:
https://www.image-maps.com/

---

### **Que es el tag DataList?**

Se usa para proveer con un autocomplete a algunos elementos

```jsx
<form action="action_page.php" method="get">
<input list="browsers" name="browser" id="browser">
<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
</datalist>
</form>
```

---

### **Cuál es la diferencia entre div y span?**


La etiqueta span trabaja como contenedor de línea, no se puede ampliar para ocupar un párrafo, debe usarse para edicion de frases en parrafos, y div trabaja como contenedor de bloque, y puede expandirse.

![image](https://github.com/denulemos/denobible/assets/32619895/e5463d4a-0cee-45ff-862b-f872e139ba9c)

---

