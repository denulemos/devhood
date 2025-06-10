---
sidebar_position: 1
---

# Angular

### **¿Qué son los modulos en Angular?**

**⚠️ En versiones nuevas de Angular (como Angular 15+), ya no es obligatorio usar módulos. Ahora puedes tener componentes "standalone": independientes, sin necesidad de estar dentro de un módulo.**

Imaginá que tu aplicación es una casa grande. En esa casa, hay habitaciones diferentes para distintas tareas: la cocina, el dormitorio, el baño, etc. Cada habitación tiene su propósito y sus herramientas.

En Angular, esa casa es tu aplicación, y cada habitación es un módulo (`NgModule`).

- Ayudan a organizar el código para que no sea un caos.
- Agrupan cosas que trabajan juntas, como componentes, servicios, y rutas.
- Te permiten importar otras librerías (por ejemplo, para mostrar botones, manejar formularios, etc.).
- Podes tener rutas específicas dentro de un módulo (como si tuvieras un mini-GPS dentro de cada habitación).

Supongamos que estás creando una tienda online:

- 🛍 Módulo de productos: todo lo que tiene que ver con mostrar productos, ver detalles, etc.
- 👩‍💼 Módulo de usuarios vendedores: gestión de sus productos, sus ventas.
- 🧑‍🤝‍🧑 Módulo de compradores: ver historial de compras, carrito, etc.

Cada módulo tiene su propio archivo `.module.ts`, como `productos.module.ts`

```js
@NgModule({
  declarations: [ProductoComponent],
  imports: [CommonModule],
  exports: [ProductoComponent]
})
export class ProductosModule {}
```

- declarations: qué componentes tiene este módulo.
- imports: qué cosas necesita (otros módulos, librerías, etc).
- exports: qué cosas le comparte a otros módulos.

Para resumir un poco:

- Los módulos son como grupos de funcionalidades que organizan tu app.
- Hacen que sea más fácil de mantener y escalar.
- Son como contenedores de lógica, donde pones componentes, servicios, rutas, etc.
- Aunque ahora podés usar componentes independientes, los módulos siguen siendo útiles en muchos casos.

### **¿Qué es Property Binding?**

Property Binding es cuando le pasás un valor dinámico a un elemento HTML usando corchetes [].
Es la forma que tiene Angular de decir: *“Ey, esta propiedad va a cambiar, así que estate atento”*

```html
<input [value]="empresa" [disabled]="habilitado" >
```

- empresa y habilitado son variables de tu componente.
- value y disabled son propiedades del `<input>`.
- El [value]="empresa" significa: "Poné el valor de esta variable dentro del input."

En cambio, la misma linea de codigo SIN corchetes: 

```html
<input type="text" value="empresa" disabled="habilitado" >
```

Acá Angular no entiende que empresa o habilitado son variables.
Los toma como texto plano. O sea, va a escribir literalmente "empresa" en el input.

#### ¿Y qué diferencia hay con la interpolación `{{}}`?

Ambas cosas sirven para mostrar datos, pero se usan en contextos distintos.

```html
<!-- Interpolación -->
<img src="{{itemImageUrl}}" />

<!-- Property Binding -->
<img [src]="itemImageUrl" />
```

Las dos hacen lo mismo si es un string, pero si estás trabajando con cosas más complejas que un texto (como objetos, booleanos, números, arrays), usá Property Binding. **¿Por qué?** Porque Angular entiende mejor ese tipo de datos con los corchetes

- Property Binding = `[propiedad]="valor"`
- Angular escucha y actualiza la propiedad del HTML cuando cambie el valor.
- Te ayuda a tener una app reactiva, sin andar actualizando todo a mano.
- Si pasás algo que no es un texto, usá sí o sí Property Binding.