---
sidebar_position: 1
---
# 💎 Typescript

[Formato README en Github](https://github.com/denulemos/DevDojo/blob/master/TS.md)

### Qué es TypeScript?

Es un superset de JavaScript, es el mismo JavaScript pero le extiende características, o posee cosas propias.

Es mantenido por Microsoft

* Ofrece tipado estricto y flexible
* Mejora la legibilidad del código
* Nos permite usar características modernas de Javascript sin miedo a la compatibilidad
* Mejora el intellisense
* Nos permite la **inyección de dependencias**

---

### TSConfig.json

Es el archivo de configuración de TypeScript, en el se definen las reglas de compilación de TypeScript.

Mediante estas configuraciones se **deberia** buscar que Typescript sea lo mas estricto posible.

```json
{
 "compilerOptions": {
  "target": "es5", // A que versión de JS se compilará
  "module": "commonjs", // Sistema de modulos
  "strict": true, // Habilita todas las opciones estrictas
  "noImplicitAny": true, // No permite any
  "esModuleInterop": true, // Permite importar modulos de ES6
  "skipLibCheck": true, // No revisa las librerias
  "forceConsistentCasingInFileNames": true, // Obliga a que los nombres de archivos sean consistentes
 }
}
```

---

### Watch Mode

Typescript al ejecutarse es traducido a Javascript. Para que Typescript esté pendiente de los cambios en los archivos y los compile automáticamente, se puede usar el siguiente comando

```bash
tsc --watch
```

---

### Cuáles son sus características superadoras?

Su tipado estricto ayuda a saber como funcionan las cosas, por ejemplo, en este código Javascript

```jsx
function calcularISV (productos) {
 let total = 0;

 productos.forEach( ({precio}) => {
  total += precio;
 }

 return [total, total * 0.15]
}
```

* No sabemos de que tipo de dato son los productos
* Como luce un producto
* Que propiedades debe tener el producto para que el código funcione

Entonces, en Typescript quedaría algo así la firma de nuestro método

```tsx
function calcularISV(productos: Producto[]): [number, number] {}
```

* Productos es un arreglo del tipo Producto
* ¿Cómo luce Producto? Se puede definir con una interfaz

```tsx
interface Producto {
 desc: string;
 precio: number;
}
```

* Retorna un arreglo de dos números

---

### Cómo declaro una variable en Typescript?

Por defecto, implicitamente Typescript asigna un tipo a las variables, pero se puede asignar un tipo explicito. `any` deberia evitarse a toda costa, a menos que sea un elemento reutilizable.

```tsx
let nombre: string = 'Denu'; // Tipo explicito
let nombre= 'Denu' // Tipo implicito

// Variable de dos posibles tipos
let variable: number | string = 95;
variable = 'Denu'

let arrayVariable: (boolean | string | number)[] = ['Denu', 22, false]
```

---

### Tuples - Tuplas

Una **tupla** en TypeScript es un tipo especial de arreglo donde se conoce el tipo de dato y la cantidad de elementos que contiene. Permite definir una estructura de datos con un número fijo de elementos, cada uno con su propio tipo.

Por ejemplo:

```ts
let tupla: [string, number];
tupla = ['Denu', 22]; // Correcto
// tupla = [22, 'Denu']; // Error: el orden y tipo deben coincidir
```

Las tuplas son útiles cuando se necesita retornar o manejar un conjunto de valores relacionados pero de diferentes tipos.

También pueden tener elementos opcionales o usar el operador rest:

```ts
let tuplaOpcional: [string, number?] = ['Denu'];
let tuplaRest: [string, ...number[]] = ['Denu', 1, 2, 3];
```