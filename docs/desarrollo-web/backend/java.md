# Java 

## **Funciones**

Las funciones en Java poseen la siguiente estructura:

```java
public int sumar(int a, int b) {
    int resultado = a + b;
    return resultado;
}
```

### Las funciones reciben parámetros por valor o por referencia?

En Java, los parámetros de una función **siempre se pasan por valor**, pero lo que cambia es *qué es lo que se copia* según el tipo de dato:

Cuando pasas un **tipo primitivo** (como `int`, `double`, `boolean`), lo que la función recibe es una copia del valor.  
Esto significa que dentro del método puedes modificar ese valor, pero el original fuera de la función no cambia.

```java
void cambiarNumero(int x) {
    x = 10;
}

public static void main(String[] args) {
    int a = 5;
    cambiarNumero(a);
    System.out.println(a); // Imprime 5, porque 'a' no cambió
}
```

Aquí se copia el número `5`, no la variable original.

En el caso de **objetos y arrays**, lo que se copia es *la referencia* al objeto. Esa referencia sigue apuntando al mismo espacio de memoria, por lo que, aunque la variable original no cambie de referencia, **sí puedes modificar el contenido interno del objeto**.

```java
void modificarArray(int[] arr) {
    arr[0] = 99; // Modifica el contenido del array
}

public static void main(String[] args) {
    int[] numeros = {1, 2, 3};
    modificarArray(numeros);
    System.out.println(numeros[0]); // Imprime 99
}
```

Aquí se copió la referencia al array. Ambas variables (la de fuera y la del parámetro) apuntan al mismo array en memoria.

- No se puede cambiar qué objeto referencia la variable original dentro del método (porque solo recibes una copia de la referencia).  
- Sí se puede cambiar el **estado interno** del objeto.

```java
void asignarNuevoArray(int[] arr) {
    arr = new int[]{10, 20}; // esta asignación no afecta al array original
}

public static void main(String[] args) {
    int[] numeros = {1, 2, 3};
    asignarNuevoArray(numeros);
    System.out.println(numeros[0]); // Imprime 1, no 10
}
```

En este caso, reasignar la referencia no afecta al original, porque solo cambió la copia de la referencia que recibe el método.  


## Cómo se maneja la entrada de datos por consola?

Se permite mediante el uso de la clase `Scanner`

```java
// Importar la clase
import java.util.Scanner;

// Crear una instancia
Scanner sc = new Scanner(System.in);

// Metodos comunes
String lineaTexto = sc.nextLine(); 
int numeroEntero = sc.nextInt();
double numeroDecimal = sc.nextDouble();
```

## Métodos sobre Strings

Estos métodos poseen la misma base de la **programación funcional**, es decir, no mutan el dato original si no que devuelven nuevas instancias con los cambios aplicados.

Los metodos existentes son:

- `length()`
- `substring(int inicio, int fin)`
- `toUpperCase()` y `toLowerCase()`
- `trim()` : Quita los espacios en blanco al principio y al final de la cadena
- `indexOf(String s)`: retorna la posición de la primera aparición de s en la cadena
- `replace(String viejo, String nuevo)`
- `split(" ")`: Convierte la cadena de caracteres en un array, en este caso, entre cada espacio, ya es un elemento en el Array 
- `append()`: Agregar elemento a la cadena, funciona cuando se lo realiza a un `StringBuilder`

## **Listas**

Hay distintos tipos de listas en Java

### Arrays
Es una estructura de datos de tamaño fijo, una vez declarada no puede ser modificada en su tamaño.

```java
String[] productos = new String[3];
productos[0] = "Cafe";
productos[1] = "Fideos";
productos[2] = "Chocolate";
```

Operaciones como búsqueda o eliminación requieren manejo manual

### Listas y ArrayList

Java ofrece `ArrayList` que es una lista dinámica, el tamaño es dinámico, y se pueden agregar elementos `add(elemento)`, eliminar `remove(index u objeto)` y obtener `get(index)`.

```java
import java.util.ArrayList;

ArrayList<String> listaProductos = new ArrayList<>();

listaProductos.add("Cafe");

System.out.println(listaProductos.size()); // 1

listaProductos.clear(); // Vacia la lista
```

## **Iteraciones**

### `for-each`

```java
for (String producto : listaProductos) {
    System.out.println(producto);
}
```

### `for`

```java
for (int i = 0; i < productos.length; i++) {
    System.out.println(productos[i]);
}
```







