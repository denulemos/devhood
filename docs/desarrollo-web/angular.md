---
sidebar_position: 1
---

# 🔺 Angular

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

---

### **¿Qué son los componentes standalone y cuando conviene utilizarlos?**

Son una característica introducida en Angular 14 que permite definir componentes sin necesidad de declararlos en un módulo (`NgModule`). En lugar de eso, los componentes standalone se definen utilizando la propiedad `standalone: true` en el decorador `@Component`, y ellos mismos pueden importar directamente otros componentes, directivas, pipes, o módulos necesarios.

Un ejemplo básico de un componente standalone es el siguiente:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-example',
  template: `<h1>Hola desde un componente standalone</h1>`,
  standalone: true,
  imports: [], // Aquí puedes importar otros componentes o módulos
})
export class StandaloneExampleComponent {}
```

**Ventajas**

1. **Simplicidad**: Elimina la necesidad de crear o mantener módulos para cada grupo de componentes.
2. **Modularidad**: Facilita la creación de componentes altamente independientes que pueden ser reutilizados en diferentes aplicaciones.
3. **Carga más rápida**: Se pueden usar directamente en **lazy loading** (carga diferida) o **bootstrap** sin necesidad de un módulo adicional.
4. **Menos boilerplate**: Reduce la sobrecarga de configuración al no requerir un módulo explícito para declarar o exportar un componente.
5. **Facilidad de pruebas**: Son más fáciles de probar de manera aislada, ya que no dependen de módulos intermedios.

**¿Cuándo conviene utilizarlos?**
Conviene usar componentes standalone en las siguientes situaciones:

1. **Aplicaciones nuevas**:
   - Si comienzas un proyecto desde cero, puedes adoptar el enfoque standalone desde el inicio para simplificar la estructura del proyecto y aprovechar las ventajas de esta arquitectura.

2. **Componentes independientes**:
   - Para componentes reutilizables o librerías de UI (como botones, tarjetas, o modal dialogs), donde no necesitas integrarlos en un módulo completo.

3. **Rutas (Lazy Loading)**:
   - En módulos cargados de manera diferida, los componentes standalone pueden ser la opción ideal, ya que pueden ser cargados directamente en una ruta sin necesidad de un módulo asociado.
   ```typescript
   import { Route } from '@angular/router';
   import { StandaloneExampleComponent } from './standalone-example.component';

   const routes: Route[] = [
     { path: 'example', component: StandaloneExampleComponent },
   ];
   ```

4. **Migración progresiva**:
   - Si tienes un proyecto con módulos existentes, puedes migrar poco a poco a componentes standalone en lugar de reestructurar completamente los módulos.

5. **Proyectos pequeños o específicos**:
   - En aplicaciones con pocos componentes, usar componentes standalone puede ser suficiente y evita el uso innecesario de módulos.

**Limitaciones**

1. **Compatibilidad con proyectos existentes**:
   - En proyectos grandes con módulos muy establecidos, puede ser complicado combinar ambos enfoques. Sin embargo, Angular permite mezclar componentes standalone y no-standalone.

2. **Agrupación lógica**:
   - Si tienes muchos componentes que comparten servicios o configuraciones, un módulo podría ser más práctico para organizar estas dependencias.

Los componentes standalone simplifican la arquitectura de Angular al reducir la dependencia de módulos y alinear el framework con tendencias modernas en diseño de componentes. Conviene adoptarlos cuando buscas simplicidad, modularidad y mayor flexibilidad en proyectos nuevos o en escenarios específicos como componentes reutilizables o lazy loading.

---

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

---

### **¿Cómo funciona la detección de cambios en Angular?**

Angular tiene un sistema que cada vez que:

- tocás algo del DOM (como un botón),

- hacés un evento ((click), (input), etc.),

- llega un nuevo dato de un observable o un servicio,

automáticamente revisa todos los componentes y se pregunta: **“¿Cambió algo que estoy mostrando en la pantalla?”**

Si la respuesta es sí, Angular actualiza lo que ve el usuario.

**¿Angular revisa TODO todo el tiempo?**

Sí, y no. Por defecto, Angular vuelve a revisar todos los componentes desde la raíz hacia abajo, cada vez que cree que algo pudo haber cambiado. Esto es gracias a algo que se llama **zone.js**, una librería que observa cosas como:

- setTimeout
- eventos de usuario
- llamadas HTTP
- promesas

Entonces Angular dice: “Algo pasó, mejor reviso todo, por si las dudas”, a esto se le dice **Dirty Checking**
Si tu app es de tamanio pequenio, ni lo notás. Pero en apps grandes con muchos componentes, puede volverse lento. 

Hay varias estrategias para detectar los cambios:

* **Default**: Angular recorre todo el arbol de componentes y verifica si hay cambios en las propiedades de los componentes. Si hay cambios, actualiza la vista. Se ejecuta ante cualquier evento asincronico y puede afectar el rendimiento si hay muchos componentes.
* **OnPush**: Solo se actualiza el componente si hay cambios en las propiedades de entrada (`@Input`) o si se emite un evento (`@Output`). Es mas eficiente que la estrategia por defecto.

```typescript
@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush // Activa la detección optimizada
})
```

La deteccion de cambios sin embargo puede ser tambien forzada mediante el uso de `ChangeDetectorRef`

- `ChangeDetectorRef.detectChanges()` → Recorre el árbol de componentes y actualiza la vista.
- `ChangeDetectorRef.markForCheck()` → Marca el componente como "sucio" para la próxima detección.

```typescript
constructor(private cdr: ChangeDetectorRef) {}

ngAfterViewInit() {
  this.cdr.detectChanges(); // Forzar actualización
}
```

---

### **¿Cuales son algunas reglas de Clean Code en Angular?**

🔹 **1. Un componente, una responsabilidad**
**❌ Malo:** un componente que muestra una lista *y* también guarda datos en el servidor.
**✅ Bueno:** un componente que solo muestra la lista, y otro que se encarga de guardar los datos.

```ts
// ❌ Esto hace demasiado:
@Component({...})
export class UsuarioComponent {
  usuarios = [];
  guardarUsuario(usuario) {
    // guardar en API
  }
}
```

```ts
// ✅ Separado en dos componentes:
- UsuarioListaComponent (muestra)
- UsuarioFormularioComponent (guarda)
```

🔹 **2. Usá componentes hijos**
Cuando un componente se vuelve grande, dividilo en partes más pequeñas:

```html
<!-- padre -->
<app-info-personal></app-info-personal>
<app-preferencias></app-preferencias>
```

🔹 **3. Plantillas (HTML) simples y limpias**
**❌ Malo:**

```html
<div *ngIf="user && user.age > 18 && user.isActive">...</div>
```

**✅ Bueno:**

```ts
mostrarContenido() {
  return this.user && this.user.age > 18 && this.user.isActive;
}
```

```html
<div *ngIf="mostrarContenido()">...</div>
```


🔹 **4. Servicios para lógica pesada**
El componente solo debería mostrar cosas, **no** manejar llamadas a APIs.

```ts
// Servicio
getDatos() {
  return this.http.get('https://api.com/datos');
}
```

```ts
// Componente
this.apiService.getDatos().subscribe(...);
```

🔹 **5. Desuscribirse de los Observables**

```ts
subscripcion: Subscription;

ngOnInit() {
  this.subscripcion = this.servicio.getDatos().subscribe(...);
}

ngOnDestroy() {
  this.subscripcion.unsubscribe();
}
```

O mejor aún, usá el `async` pipe:

```html
<div *ngIf="datos$ | async as datos">
  {{ datos.nombre }}
</div>
```

🔹 **6. Usá Angular CLI**
Siempre preferí:

```bash
ng generate component usuario
ng generate service api
```

Te asegura estructura clara y buenas prácticas.


🔹 **7. Evitá lógica compleja en el HTML**
Si hay mucha lógica en el template, movela al archivo `.ts`.


🔹 **8. Usá tipado estricto y `interfaces`**
No uses `any`. Definí tus modelos:

```ts
interface Usuario {
  nombre: string;
  edad: number;
}
```


🔹 **9. Poné nombres claros y descriptivos**
**❌ Malo:** `comp1`, `servicio2`
**✅ Bueno:** `FormularioUsuarioComponent`, `AutenticacionService`


🔹 **10. Estilo consistente con Prettier/ESLint**
Instalá herramientas que formateen y detecten errores automáticamente.

---

### **¿Qué problemas de rendimiento pueden existir en Angular y cómo se solucionan?**

#### 1. ⚠️ Renderizado excesivo (detección de cambios ineficiente)

**Qué pasa:**
Angular, por defecto, revisa todo el árbol de componentes cada vez que algo cambia. En apps grandes, esto puede hacer que se renderice más de lo necesario, generando lentitud.

**Cómo lo solucionás:**

* Activá `ChangeDetectionStrategy.OnPush` en tus componentes. Esto le dice a Angular que solo actualice el componente si cambian sus `@Input` o se dispara un evento (como un observable).

```ts
@Component({
  selector: 'app-mi-componente',
  template: `{{ data }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiComponente {
  @Input() data!: string;
}
```

* Desuscribite de los observables cuando ya no los necesites, usando `takeUntil` o el operador `async` directamente en el HTML.

#### 2. 🐢 Carga innecesaria de módulos

**Qué pasa:**
Si cargás todos los módulos desde el inicio (eager loading), el usuario va a esperar más para ver algo en pantalla.

**Cómo lo solucionás:**

* Aplicá **lazy loading** en rutas que no se usan de entrada:

```ts
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
}
```

* Si querés un balance, podés usar una **estrategia de pre-carga personalizada** para cargar algunos módulos después de la carga inicial, mientras el usuario está inactivo.

#### 3. 📋 Listas largas que se renderizan lento

**Qué pasa:**
Una tabla con miles de filas puede hacer que todo se vuelva pesado, ya que Angular intenta renderizar todos los ítems del DOM.

**Cómo lo solucionás:**

* Usá **Virtual Scroll** del Angular CDK para renderizar solo lo visible:

```html
<cdk-virtual-scroll-viewport itemSize="50" style="height: 300px;">
  <div *cdkVirtualFor="let item of items">{{ item }}</div>
</cdk-virtual-scroll-viewport>
```

* Si estás trayendo todo desde una API, agregá **paginación en el backend** para evitar cargar miles de elementos de una sola.

#### 4. 🖼️ Imágenes pesadas

**Qué pasa:**
Imágenes grandes o mal optimizadas pueden hacer que la página tarde en cargar, sobre todo en dispositivos móviles.

**Cómo lo solucionás:**

* Usá `loading="lazy"` en todas las etiquetas `<img>`:

```html
<img src="imagen.jpg" alt="Ejemplo" loading="lazy" />
```

* Comprimí y redimensioná las imágenes con herramientas como **TinyPNG**, **ImageMagick** o servicios como **Cloudinary**.

#### 5. 📝 Formularios lentos

**Qué pasa:**
Si tenés formularios con muchas validaciones, lógica compleja o campos dinámicos, la app se puede trabar al escribir.

**Cómo lo solucionás:**

* Evitá validaciones complejas innecesarias. Usá funciones simples y validaciones asincrónicas solo si realmente las necesitás.

```ts
myForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
});
```

* Dividí formularios largos en **pasos o secciones** (wizard), para no cargar todo al mismo tiempo.

#### 6. 🔁 Llamadas repetidas a la API

**Qué pasa:**
Si hacés muchas llamadas iguales a la misma API desde distintos lugares, saturás el backend y hacés más lenta tu app.

**Cómo lo solucionás:**

* Implementá cache en los servicios, por ejemplo con `Map` y RxJS:

```ts
private cache = new Map<string, any>();

getData(url: string): Observable<any> {
  if (this.cache.has(url)) return of(this.cache.get(url));
  return this.http.get(url).pipe(tap(data => this.cache.set(url, data)));
}
```

* Agrupá múltiples llamadas con `forkJoin` o `combineLatest` para hacer una sola petición conjunta.

#### 7. 📦 Scripts pesados y dependencias innecesarias

**Qué pasa:**
Agregar muchas librerías sin control aumenta el tamaño del bundle, haciendo más lenta la app.

**Cómo lo solucionás:**

* Limpiá el `package.json`: eliminá lo que no uses.
* Importá solo los módulos necesarios:

```ts
import { MatButtonModule } from '@angular/material/button'; // No todo Angular Material
```

* Asegurate de que el **tree shaking** esté funcionando en tu build.

---

