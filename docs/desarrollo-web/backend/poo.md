# Programación Orientada a Objetos

Ejemplos en **Java**

## Programación Estructurada vs POO

Imagina que estás cocinando. En la **programación estructurada**, es como seguir una receta paso a paso: primero picas las verduras, luego las cocinas, después las sirves. Todo es una secuencia lineal de instrucciones. No hay "cosas" que recuerden su estado; solo funciones que hacen una tarea específica.

En la **POO (Programación Orientada a Objetos)**, es como tener un robot chef que sabe cómo picar verduras, cocinar y servir. Cada "objeto" (como el robot) tiene sus propias propiedades (velocidad, herramientas) y métodos (acciones que puede hacer). Los objetos interactúan entre sí, como si el robot le pasara la comida a otro robot para servirla.

- **Estructurada**: Enfocada en procedimientos y funciones. El código fluye de arriba abajo.
- **POO**: Enfocada en objetos que encapsulan datos y comportamientos. Más fácil para proyectos grandes y complejos.

En resumen, la estructurada es como un libro de instrucciones, mientras que la POO es como un equipo de trabajadores especializados.

## Encapsulamiento

Cada objeto controla su propio estado interno, exponiendo solo lo necesario.

## Abstracción

Ocultar la complejidad interna de los objetos, presentando una interfaz sencilla.

## Herencia

Se pueden crear nuevas clases basadas en otras existentes.

## Polimorfismo

Objetos de distintas clases pueden ser tratados de la misma forma si comparten una interfaz en común.

## Clase y Objeto

Una clase es un plano o plantilla que define las **características (atributos)** y las **acciones (métodos)** de algo. 

Un objeto es la **instancia de una clase**. La clase es la receta, el objeto es la comida.

```java
public class Producto {
    String nombre;
    double precio;
    int stock;
}

// Creación del Objeto

Producto cafe = new Producto();
cafe.nombre = "Capuchino";
cafe.precio = 10.0;
cafe.stock = 12;

// Creación de un array de objetos del mismo tipo

ArrayList<Producto> catalogo = new ArrayList<>();
Producto teVerde = new Producto();

// .. se definen sus propiedades

catalogo.add(teVerde);
```

## Métodos

Los **Métodos de instancia** son aquellos que operan sobre un objeto específico. Hace referencia a `this`.
Los **Métodos de clase (estáticos)** no requieren una instancia para ser usados, son buenos para el manejo de lógica general. 

```java
public class Producto {
    String nombre;
    double precio;
    int stock;

    // Método de Instancia (this)
    public void descontarStock(int cantidad) {
        this.stock -= cantidad;
    }

    // Método estático
    public static double calcularImpuesto(double precio) {
        return precio * 0.21;
    }
}
```




